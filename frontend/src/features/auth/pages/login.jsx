import React, { use, useState } from 'react'
import '../../../styles/auth.css'
import "../../../styles/button.css"
import { Link } from 'react-router'
import { useAuth } from '../hooks/useAuth'


const login = () => {
     const {Loading,handleLogin} = useAuth()
    const handleSubmit = (e)=>{
            e.preventDefault()
            console.log("submit handler is being called")
            handleLogin({email,password})
    }
 
     const [email, setEmail] = useState("")
     const [password,setPassword]  = useState("")

     if(Loading){return (
        <main>
            <h1>loading....</h1>
        </main>
     )}
   console.log(email)
  return (
   <main>
    <div className="form-container">
        <h1>login</h1>
        <form action="" onSubmit={handleSubmit}>
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" id='email' name='email' placeholder='enter email address' 
                
                 onChange={(e)=>{setEmail(e.target.value)}}
                />
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" id='password' name='password' placeholder='enter password'
                onChange={(e)=>{setPassword(e.target.value)}}
                />
            </div>

            <button className='button primary-button' type='submit'>submit</button>

        </form>
        <p> Don't have an account ? <Link to={"/register"} >Register</Link>  </p>
    </div>
   </main>

  )
}

export default login