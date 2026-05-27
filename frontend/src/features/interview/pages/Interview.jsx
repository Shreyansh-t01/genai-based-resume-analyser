import React, { useState } from 'react'
import { useInterview } from '../hooks/useInterview'


const questionDay = ({item,index})=>{
 
    const [open,setOpen] = useState(false)

    return (
        <div className="questionContainer">
            <div className="questionHeading" onClick={()=>setOpen(open=>!open) }>
                <h4 className='numberingOfQuestion'> Q{index+1}</h4>
                 <h4  className='quesion'>{item.question}</h4>
            </div>
        
        {open && (
            <div className='detailsofquestion'>
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
                <span className='NumberingofDay'>Day{day.day}</span>
                <div className='task'>{day.focus}</div>
            </div> 
            <ul className='roadmap-day__tasks'>
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

    const {Loading,Report,setReport}

  return (
    <div className='mainDiv'>
        <div className="fieldContainer">
            <button className='button' name='technicalQuestions'>Technical Questions</button>
            <button className='button ' name='behavioralQuestions'>Behavioral Questions</button>
            <button className='button' name='preparationPlane'>Prep-Plan</button>
        </div>
        <div className="fieldInfoBox">
            {/* question container div as per the given number of question or roadmap day wise */}
        </div>
        <div className="skillGapContainer">
            <h3 className='titleskillgap'>skills Gaps</h3>
            {/* divs will be added as per the number of element present inside skill gap array */}
        </div>
         


    </div>
  )
}

export default Interview