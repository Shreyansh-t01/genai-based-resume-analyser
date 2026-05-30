import React, { useState } from 'react'
import '../styles/Home.css'
import '../../../styles/button.css'
import { useNavigate } from 'react-router'
import { useInterview } from '../hooks/useInterview'
import Navbar from '../../Navbar/Navbar'


const Home = () => {
    const navigate = useNavigate()
   const {Loading,Report ,Reports ,getReport ,getReportS ,getGeneratedReport}   = useInterview()
  const [resumeData, setresumeData] = useState(null)
  const [selfDescription, setselfDescription] = useState("")
  const [jobDescription, setjobDescription] = useState("")

  
   const submitHandler = async (e)=>{
    e.preventDefault()
    const response = await  getGeneratedReport({resumeData,selfDescription,jobDescription})
    
     navigate(`interview/${response._id}`)
   }
  
    

   if(Loading){
    return (
      <h1>Loading the interview report...</h1>
    )
   }

   

  
  return (
    <>
    <Navbar/>
    <div className='mainContainer'>
      <div className="textContainer">
        <h1 className='Headline'>Create Your <span className='interview'>Interview</span> Plan</h1>
        <h5>let our AI help you get your desired job</h5>
      </div>
      
      <form action="" className='main-form' encType='multipart/form-data' onSubmit={submitHandler}>

           <textarea type="text" className='selfDescription'  placeholder='enter self description here' onChange={(e)=>{
            setselfDescription(e.target.value)
           }} />
           <div className="resumeButtonContainer">
                  <div className="inputFileContainer">
                    <div className="textinputfile">
                      <h5>upload your resume in pdf format :-</h5>
                    <label htmlFor="fileinput" className='fileLabel'>
                      Upload file
                    </label>
                    </div>
                    <input type="file" 
                  accept='.pdf'
                  className='fileInput' 
                  id='fileinput'
                  onChange={(e)=>{
                    setresumeData(e.target.files[0])
                  }}
                   />
                  </div>
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
     </>
  )
}

export default Home