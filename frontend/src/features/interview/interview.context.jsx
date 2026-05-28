import { createContext, useState } from "react";

 export const InterviewContext = createContext()

 export const InterviewProvider = ({children})=>{
     const [Loading, setLoading] = useState(false)
     const [Report, setReport] = useState(null)
     const [Reports , setReports] =useState([])

     return (
        <InterviewContext.Provider value={{Loading , setLoading , setReport ,Report , Reports ,setReports }}>
           { children}
        </InterviewContext.Provider>
     )
}