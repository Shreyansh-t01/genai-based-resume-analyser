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
                <svg class="svg-icon" width={20} height={20} viewBox="0 0 20 20">
							<path d="M12.522,10.4l-3.559,3.562c-0.172,0.173-0.451,0.176-0.625,0c-0.173-0.173-0.173-0.451,0-0.624l3.248-3.25L8.161,6.662c-0.173-0.173-0.173-0.452,0-0.624c0.172-0.175,0.451-0.175,0.624,0l3.738,3.736C12.695,9.947,12.695,10.228,12.522,10.4 M18.406,10c0,4.644-3.764,8.406-8.406,8.406c-4.644,0-8.406-3.763-8.406-8.406S5.356,1.594,10,1.594C14.643,1.594,18.406,5.356,18.406,10M17.521,10c0-4.148-3.374-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.147,17.521,17.521,14.147,17.521,10"></path>
						</svg>
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