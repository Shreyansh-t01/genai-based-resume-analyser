import axios from "axios"


 export const generateReport = async ({selfDescription,jobDescription,resumeData})=>{
  console.log("resume data is coming to axios ",resumeData)
  console.log("selfDescription :-",selfDescription)
  console.log("job description :-",jobDescription)

    const data = new FormData()
    data.append("selfDescription",selfDescription)
    data.append( "jobDescription", jobDescription)
    data.append("resumeData",resumeData)

   
    
   const response = await axios.post('http://localhost:3000/api/interview/upload',
    data,{
    withCredentials: true
  }
    
   
  )

  console.log("axios called response",response)

  return response.data
}

 export const getReportById = async ({reportId})=>{
    const report = await axios.get('http://localhost:3000/api/interview/reports/:reportId')


    return report.data
}

 export const getAllReports = async ()=>{
  const reports = await axios.get('http://localhost:3000/api/interview/getReports')

  return reports.data
}

