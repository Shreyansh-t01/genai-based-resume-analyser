import { useContext } from "react";
import { generateReport , getReportById , getAllReports } from "../services/interview.api";
import { InterviewContext } from "../interview.context";


 export const useInterview = async ()=>{
    const context = useContext(InterviewContext)

    if(!context) {
        throw new error("context is needed for this application to run")
    }
 
     const {Loading , setLoading ,Report ,setReport ,Reports ,setReports} = context
 const getGeneratedReport = async ({selfDescription,jobDescription,resumeData})=>{
          
        setLoading(true)

        const response  = null
        try{
            response = generateReport({selfDescription,jobDescription,
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

    const response = null
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
      const response = null
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