import React, { useState } from 'react'
import '../styles/Home.css'
import '../../../styles/button.css'
import { useNavigate } from 'react-router'
import { useInterview } from '../hooks/useInterview'

const navigate = useNavigate()
const Home = () => {
  
   const {Loading,Report ,Reports ,getReport ,getReportS ,getGeneratedReport}   = useInterview()
  const [resumeData, setresumeData] = useState(null)
  const [selfDescription, setselfDescription] = useState("")
  const [jobDescription, setjobDescription] = useState("")

   const submitHandler = async ()=>{
    const response = await  getGeneratedReport({resumeData,selfDescription,jobDescription})
     navigate(`interview/${response._id}`)
   }
    

   if(Loading){
    return (
      <h1>Loading the interview report...</h1>
    )
   }

   

  
  return (
    <div className='mainContainer'>
      <form action="" className='main-form' encType='multipart/formdata' onSubmit={submitHandler}>

           <textarea type="text" className='selfDescription'  placeholder='enter self description here' onChange={(e)=>{
            setselfDescription(e.target.value)
           }} />
           <div className="resumeButtonContainer">
                  <input type="file" 
                  accept='.pdf' 
                  onChange={(e)=>{
                    setresume(e.target.files[0])
                  }}
                   />
                <textarea type="text"
                 className='jobDescription' 
                  placeholder='enter job description here'
                  onChange={
                    (e)=>{
                      setjobDescription(e.target.value)
                    }
                  }
                   />

                <button type='submit' className='button primary-button'> generate interview report</button>
           </div>
        

      </form>

    </div>
  )
}

export default Home