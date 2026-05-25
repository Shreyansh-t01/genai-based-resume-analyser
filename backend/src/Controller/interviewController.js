const { PDFParse } = require('pdf-parse')
const { generateResponse } = require('../Service/ai.service')

const uploadHandler = async (req,res)=>{
      
const resume = req.file
const resumeContent = await  new PDFParse(req.file.buffer)


const {selfDescription , jobDescription} = req.body

const interviewReport = await generateResponse({
       selfDescription,
       jobDescription,
       resume: resumeContent
})
console.log(interviewReport.technicalQuestions)


res.status(200).send(interviewReport)

}



module.exports = {
      uploadHandler
}