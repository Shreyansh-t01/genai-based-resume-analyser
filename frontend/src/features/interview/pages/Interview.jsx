import React, { useEffect, useState } from 'react'
import { useInterview } from '../hooks/useInterview'
import { useParams } from 'react-router'
import "../styles/Interview.css"


const questionCard = ({item,index})=>{
 
    const [open,setOpen] = useState(false)

    return (
        <div className="questionContainer">
            <div className="questionHeading" onClick={()=>setOpen(open=>!open) }>
                <h4 className='numberingOfQuestion'> Q{index+1}</h4>
                 <h4  className='quesion'>{item.question}</h4>
            </div>
        
        {open && (
            <div className='detailsOfQuestion'>
                    <div className="intention">
                    <div className="header">Intention:-</div>
                    <div className="response">item.intention</div> 
                    
                    </div>
                    <div className="answer">
                    <div className="header">Answer:-</div>
                    <div className="response">{item.answer}</div> 
                    
                    </div>
                    
            </div>
   
        )
          }
          </div>
    )
}

const roadMap = ({day})=>{
    return (
        <div className="roadmapContainer">
            <div className="headerContainer">
                <span className='numberingOfDay'>Day{day.day}</span>
                <div className='task'>{day.focus}</div>
            </div> 
            <ul className='taskList'>
            {day.tasks.map((task, i) => (
                <li key={i}>
                    <span className='roadmap-day__bullet' />
                    {task}
                </li>
            ))}
        </ul>
        </div>
    )
}





const Interview = () => {

    const {Loading,Report,getReport} = useInterview()
    const {interviewId} = useParams()
    const [ mainInfo ,setMainInfo] = useState("technicalQuestions")

    useEffect(()=>{
        if(interviewId){
            getReport({reportId:interviewId})
        }
    },interviewId)

     



    
     if(Loading || !Report){
        return (
            <div>
                <h2> Loading your interview report...</h2>
            </div>
        )
     }



  return (
    <div className='mainDiv'>
        <div className="fieldContainer">
            <button className='button' 
            onClick={()=>{
                setMainInfo("technicalQuestions")
            }}
            name='technicalQuestions'>Technical Questions</button>
            <button className='button ' 
            onClick={()=>{
                setMainInfo("behavioralQuestions")
            }}
            name='behavioralQuestions'>Behavioral Questions</button>
            <button className='button' 
            onClick={()=>{
                setMainInfo("prepPlan")
            }}
            name='preparationPlane'>Prep-Plan</button>
        </div>
        <div className="fieldInfoBox">
            {mainInfo==="technicalQuestions" && (
                <>
                <div className='Heading'>Technical Questions</div>
                {Report.technicalQuestions.map((item,index)=>{
                    <questionCard  item = {item} index = {index} key = {index}  />
                })} </>
            )}
             {mainInfo==="behavioralQuestions" && (
               <>
               <div className="Heading">Behavioral Questions</div>
               { Report.behavioralQuestions.map((item,index)=>{
                    <questionCard  item = {item} index = {index} key = {index}  />
                })}
               </>
            )}
            {mainInfo==="prepPlan" && (
                <>
                <div className="Heading">Preparation Plan</div>
                {Report.preparationPlan.map((day)=>{
                    <roadMap day = {day} key = {day.day}/>
                }) }
                </>
            )}
        </div>
        <div className="skillGapContainer">
            <h3 className='titleskillgap'>skills Gaps</h3>
             <div className="skills">
                {Report.skillGaps.map((gap,idx)=>(
                    <div className= {`skillContainer  ${gap.severity}`}>
                       { gap.skill}
                    </div>
                )
                     

                )}
             </div>
        </div>
         


    </div>
  )
}

export default Interview