import React from 'react'
import '../../../styles/auth.css'
import "../../../styles/button.css"

const login = () => {

    const handleSubmit = (e)=>{
            e.preventDefault()
    }


  return (
   <main>
    <div className="form-container">
        <h1>login</h1>
        <form action="">
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" id='email' name='email' placeholder='enter email address' />
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" id='password' name='password' placeholder='enter password' />
            </div>

            <button className='button primary-button' onSubmit={handleSubmit}>submit</button>

        </form>
    </div>
   </main>

  )
}

export default login