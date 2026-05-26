import React from 'react'
import '../interview/styles/Home.css'
import '../../styles/button.css'

const Home = () => {
  return (
    <div className='mainContainer'>
      <form action="" className='main-form' encType='multipart/formdata'>

           <textarea type="text" className='selfDescription'  placeholder='enter self description here' />
           <div className="resumeButtonContainer">
                  <input type="file" accept='.pdf' />
                <textarea type="text" className='jobDescription'  placeholder='enter job description here' />

                <button type='submit' className='button primary-button'> generate interview report</button>
           </div>
        

      </form>

    </div>
  )
}

export default Home