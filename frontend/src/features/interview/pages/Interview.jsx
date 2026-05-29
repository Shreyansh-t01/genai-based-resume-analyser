import React, { useEffect, useState } from 'react'
import { useInterview } from '../hooks/useInterview'
import { useParams } from 'react-router'
import "../styles/Interview.css"
import Navbar from '../../Navbar/Navbar'


const QuestionCard = ({item,index})=>{
 
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
                    <div className="response">{item.intention}</div> 
                    
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

const RoadMap = ({day})=>{
    return (
        <div className="roadmapContainer">
            <div className="headerContainer">
                <span className='numberingOfDay'>Day{day.day}</span>
                <div className='task'>{day.focus}</div>
            </div> 
            <ul className='taskList'>
            { (!day.task) &&  (day.task.map((task, i) => (
                <li key={i}>
                    <span className='roadmap-day__bullet' />
                    {task}
                </li>
            )))}
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
    },[interviewId])

     



    
     if(Loading || !Report){
        return (
            <div>
                <h2> Loading your interview report...</h2>
            </div>
        )
     }



  return (
   <div className="background">
     
     <Navbar/>

     <div className='mainDiv'>
        <div className="fieldContainer">
            <h2 className='Heading'> Sections</h2>
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
                
              <div className="Box">
                  <div className='Heading'>Technical Questions</div>
                {Report.technicalQuestions.map((item,index)=>(
                    <QuestionCard  item = {item} index = {index} key = {index}  />
                ))} 
              </div>
            )}
             {mainInfo==="behavioralQuestions" && (
            
              <div className="Box">
                 <div className="Heading">Behavioral Questions</div>
               { Report.behavioralQuestion.map((item,index)=>(
                    <QuestionCard  item = {item} index = {index} key = {index}  />
                ))}
              </div>
               
            )}
            {mainInfo==="prepPlan" && (
                
                 <div className="Box">
                     <div className="Heading">Preparation Plan</div>
                <div className="planContainer">
                    {Report.preparationPlan.map((day)=>(
                    <RoadMap day = {day} key = {day.day}/>
                )) }
                </div>
                 </div>
                
            )}
        </div>
        <div className="skillGapContainer">
            <h3 className='titleSkillGap'>skills Gaps</h3>
             <div className="skills">
                {Report.skillGaps.map((gap,idx)=>(
                    <div className={`skill ${gap.severity}`}>
                       { gap.skill}
                    </div>
                )
                     

                )}
             </div>
        </div>
         


    </div>
   </div>
  )
}

export default Interview