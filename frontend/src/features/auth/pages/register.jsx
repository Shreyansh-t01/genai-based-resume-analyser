import React from 'react'
import '../../../styles/button.css'
import '../../../styles/auth.css'

const register = () => {
    const handleSubmit = (e)=>{
            e.preventDefault()
    }
    
  return (
       <main>
    <div className="form-container">
        <h1>Register</h1>
        <form action="">
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" id='email' name='email' placeholder='enter email address' />
            </div>
            <div className="input-group">
                <label htmlFor="email">Username</label>
                <input type="text" id='username' name='username' placeholder='enter username' />
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

export default register