const dotenv = require('dotenv').config()
const {GoogleGenAI} = require('@google/genai')
const {z} = require('zod')
const {zodToJsonSchema } = require('zod-to-json-schema')

const ai = new GoogleGenAI({
   apiKey: process.env.GEMINI_KEY
});
const responseReportSchema = z.object({
    matchScore: z.number().describe("A score between 0 and 100 indicating how well the candidate's profile matches the job describe"),
    technicalQuestions: z.array(z.object({
        question: z.string().describe("The technical question can be asked in the interview"),
        intention: z.string().describe("The intention of interviewer behind asking this question"),
        answer: z.string().describe("How to answer this question, what points to cover, what approach to take etc.")
    })).describe("Technical questions that can be asked in the interview along with their intention and how to answer them"),
    behavioralQuestions: z.array(z.object({
        question: z.string().describe("The technical question can be asked in the interview"),
        intention: z.string().describe("The intention of interviewer behind asking this question"),
        answer: z.string().describe("How to answer this question, what points to cover, what approach to take etc.")
    })).describe("Behavioral questions that can be asked in the interview along with their intention and how to answer them"),
    skillGaps: z.array(z.object({
        skill: z.string().describe("The skill which the candidate is lacking"),
        severity: z.enum([ "low", "medium", "high" ]).describe("The severity of this skill gap, i.e. how important is this skill for the job and how much it can impact the candidate's chances")
    })).describe("List of skill gaps in the candidate's profile along with their severity"),
    preparationPlan: z.array(z.object({
        day: z.number().describe("The day number in the preparation plan, starting from 1"),
        focus: z.string().describe("The main focus of this day in the preparation plan, e.g. data structures, system design, mock interviews etc."),
        tasks: z.array(z.string()).describe("List of tasks to be done on this day to follow the preparation plan, e.g. read a specific book or article, solve a set of problems, watch a video etc.")
    })).describe("A day-wise preparation plan for the candidate to follow in order to prepare for the interview effectively"),
    title: z.string().describe("The title of the job for which the interview report is generated"),
})

async function generateResponse ({selfDescription,jobDescription,resume}){
        const prompt = `
STRICT INSTRUCTIONS:

Return ONLY valid JSON.

DO NOT:
- add explanations
- add markdown
- add report summaries
- add extra fields
- rename fields

You MUST follow the schema exactly.

Required fields:
- matchScore
- technicalQuestions
- behavioralQuestions
- skillGaps
- preparationPlan
- title

Candidate Data:

Resume:
${resume}

Self Description:
${selfDescription}

Job Description:
${jobDescription}


IMPORTANT FORMAT:

technicalQuestions MUST be:
[
  {
    "question": "...",
    "intention": "...",
    "answer": "..."
  }
]

behavioralQuestions MUST be:
[
  {
    "question": "...",
    "intention": "...",
    "answer": "..."
  }
]

skillGaps MUST be:
[
  {
    "skill": "...",
    "severity": "low"
  }
]

preparationPlan MUST be:
[
  {
    "day": 1,
    "focus": "...",
    "tasks": ["...", "..."]
  }
]   make sure the output is in the same kind of format as I have told dont give questions intention and answer in string format in should be in proper json format with field name and similarly for preparation plan
 EXAMPLE OUTPUT:

{
  "matchScore": 85,
  "technicalQuestions": [
    {
      "question": "Explain JWT authentication",
      "intention": "Check backend security understanding",
      "answer": "Discuss tokens, middleware, expiry"
    }
  ]
}
`;
     const response  =  await ai.models.generateContent({
        model : "gemini-3-flash-preview",
        contents:prompt,
        config: {
         responseMimeType: "application/json",
        responseSchema: zodToJsonSchema(
   responseReportSchema,
   
)
        }
        
     })
     return JSON.parse(response.text)
}
module.exports = {
   generateResponse
}