const axios = require('axios')


const generateReport = async ({selfDescription,jobDescription,resumeData})=>{

    const data = new formData()
    data.append(selfDescription)
    data.append(jobDescription)
    data.append(resumeData)
    
  const response = await axios.post('http://localhost:3000/api/interview/upload',
    {
        body:data
    }
    
  )

  return response
}

const getReportById = async ({reportId})=>{
    const report = await axios.get('http://localhost:3000/api/interview/reports/:reportId')


    return report 
}

const getAllReports = async ()=>{
  const reports = await axios.get('http://localhost:3000/api/interview/getReports')

  return reports
}

module.exports = {
    getAllReports,
    getReportById,
    generateReport
}