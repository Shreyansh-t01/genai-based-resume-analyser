import { useContext } from "react";
import { generateReport , getReportById , getAllReports } from "../services/interview.api";
import { InterviewContext } from "../interview.context";


 export const useInterview =  ()=>{
   
    const context = useContext(InterviewContext)

    if(!context) {
        console.log("interviewContext is not found")
    }
 
     const {Loading , setLoading ,Report ,setReport ,Reports ,setReports} = context
     console.log("loading state",Loading)


 const getGeneratedReport = async ({selfDescription,jobDescription,resumeData})=>{
          
        setLoading(true)

        let response  = null
        try{
            response =  await generateReport({selfDescription,jobDescription,
                resumeData
            })
            setReport(response.interviewReport)
        }catch(error){
            console.log(error)
        }finally{
            setLoading(false)
        }
        

        return response.interviewReport
    }

 const getReport = async ({reportId})=>{
     
    setLoading(true)

      let response = null
    try{
        response = getReportById({reportId})
        setReport(response.interviewReport)
    }catch(error){
        console.log(error.message)
    }finally{
        setLoading(false)
    }

    return response.interviewReport

 }

 const getReports = async ()=>{
    setLoading(true)
      let response = null
    try{
        response = getAllReports ()
        setReports(response.interviewReports)
    }catch(error){
        console.log(error.message)
    }finally{
        setLoading(false)
    }

    return response.interviewReports
 }

 return {
    Loading,
    Reports ,
    Report,
    getReports,
    getReport,
    getGeneratedReport
}
 
}