import React from 'react'
import '../../../styles/button.css'
import '../../../styles/auth.css'
import {useNavigate} from 'react-router'
import { Link } from 'react-router'


const register = () => {
    const navigate=useNavigate()
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
        <p>Already have an account ? <Link to={"/login"} >login</Link>  </p>
    </div>
   </main>
  )
}

export default register