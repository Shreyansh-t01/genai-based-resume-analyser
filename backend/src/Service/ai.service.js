require('dotenv').config()

const { GoogleGenAI } = require('@google/genai')
const { z } = require('zod')

const ai = new GoogleGenAI({
   apiKey: process.env.GEMINI_KEY
})

const questionSchema = z.object({
   question: z.string().describe('The interview question'),
   intention: z.string().describe('What the interviewer is trying to assess'),
   answer: z.string().describe('How the candidate should answer the question')
}).strict()

const skillGapSchema = z.object({
   skill: z.string().describe('The missing or weak skill'),
   severity: z.enum(['low', 'medium', 'high']).describe('How important the skill gap is for the role')
}).strict()

const preparationPlanItemSchema = z.object({
   day: z.number().int().min(1).describe('The day number in the preparation plan'),
   focus: z.string().describe('The main focus area for the day'),
   tasks: z.array(z.string()).describe('The tasks to complete on that day')
}).strict()

const responseReportSchema = z.object({
   matchScore: z.number().int().min(0).max(100).describe('A score between 0 and 100 indicating match quality'),
   technicalQuestions: z.array(questionSchema).describe('Technical questions with intention and answer guidance'),
   behavioralQuestions: z.array(questionSchema).describe('Behavioral questions with intention and answer guidance'),
   skillGaps: z.array(skillGapSchema).describe('Skill gaps with severity'),
   preparationPlan: z.array(preparationPlanItemSchema).describe('Day-wise preparation plan'),
   title: z.string().describe('The job title for which the report is generated')
}).strict()

const responseReportJsonSchema = z.toJSONSchema(responseReportSchema, {
   target: 'draft-7'
})

function buildPrompt({ selfDescription, jobDescription, resume }) {
   return `
Return only valid JSON that exactly matches the provided schema.

Rules:
- Do not return markdown
- Do not return explanations
- Do not add extra keys
- Do not rename keys
- Every array item must be an object, never a plain string
- Use this exact shape for technicalQuestions and behavioralQuestions:
  { "question": "...", "intention": "...", "answer": "..." }
- Use this exact shape for skillGaps:
  { "skill": "...", "severity": "low" }
- Use this exact shape for preparationPlan:
  { "day": 1, "focus": "...", "tasks": ["...", "..."] }
   and make sure that the task array should not be empty.

Candidate Data:

Resume:
${resume}

Self Description:
${selfDescription}

Job Description:
${jobDescription}
`
}

function parseStructuredResponse(responseText) {
   if (!responseText) {
      throw new Error('Gemini returned an empty response.')
   }

   let parsedResponse

   try {
      parsedResponse = JSON.parse(responseText)
   } catch (error) {
      throw new Error(`Gemini returned invalid JSON: ${error.message}`)
   }

   return responseReportSchema.parse(parsedResponse)
}

async function generateResponse({ selfDescription, jobDescription, resume }) {
   const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: buildPrompt({ selfDescription, jobDescription, resume }),
      config: {
         responseMimeType: 'application/json',
         responseJsonSchema: responseReportJsonSchema
      }
   })

   return parseStructuredResponse(response.text)
}

module.exports = {
   generateResponse,
   responseReportSchema
}
