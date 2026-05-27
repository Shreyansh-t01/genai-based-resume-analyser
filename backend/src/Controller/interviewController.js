const { PDFParse } = require('pdf-parse')
const { generateResponse } = require('../Service/ai.service')

const interviewReportModel = require('../Models/interviewReportModel')


//to make sure that only important text from parsed pdf goes  to the ai 
async function extractResumeText(fileBuffer) {
   const parser = new PDFParse({ data: fileBuffer })

   try {
      const parsedResume = await parser.getText()
      return parsedResume.text
   } finally {
      await parser.destroy()
   }
}

const uploadHandler = async (req, res) => {
   try {
      if (!req.file) {
         return res.status(400).send({
            message: 'resumePDF file is required'
         })
      }

      const { selfDescription = '', jobDescription = '' } = req.body
      const resumeText = await extractResumeText(req.file.buffer)

      const interviewReportbyai = await generateResponse({
         selfDescription,
         jobDescription,
         resume: resumeText
      })

      const interviewReport = await 
interviewReportModel.create({
      user :req.user.id,
      jobDescription,
      resume:resumeText,
      selfDescription,
      ...interviewReportbyai
})
res.status(201).send({
      message:"interview report generated successfully",
      interviewReport
})
   } catch (error) {
      console.error('Failed to generate interview report:', error)

   }
}
const getInterviewReportById = async (req,res)=>{
      const interviewId = req.params

      const report = await interviewReportModel.findone({_id:interviewId,user:req.user.id})
      if(!report){
res.send(501).send({
   message: "report not found"
})
      }

   res.status(201).send({
      message:"report found",
      interviewReport:report
   })
} 


// get all reports 
const getReports = async (req,res)=>{
   
    const reports = interviewReportModel.find({user:req.user.id}).sort({fieldName:-1})
    if(!reports){
      res.status(500).send({
         message:"reports are not found"
      })
    }

    res.status(201).send({
      messgae:"reports are sent to the client",
      interviewReports :reports
    })


    
}

module.exports = {
   uploadHandler , getInterviewReportById ,getReports
}
