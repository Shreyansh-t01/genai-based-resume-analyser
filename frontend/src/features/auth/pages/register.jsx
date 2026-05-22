import React, { useState } from 'react'
import '../../../styles/button.css'
import '../../../styles/auth.css'
import {useNavigate} from 'react-router'
import { Link } from 'react-router'
import { useAuth } from '../hooks/useAuth'


const register = () => {
     const {Loading,handleRegister,User} = useAuth()
    const navigate=useNavigate()
     const [email, setEmail] = useState("")
     const [password,setPassword] = useState("")
     const [username,setUsername] = useState(null)


    const handleSubmit =  (e)=>{
            e.preventDefault()
              handleRegister({email,password,username})
              if(!Loading && User) navigate('/')
    }
     if(Loading){return (
        <main>
            <h1>loading....</h1>
        </main>
     )}
    
  return (
       <main>
    <div className="form-container">
        <h1>Register</h1>
        <form action="" onSubmit={handleSubmit}>
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" id='email' name='email' placeholder='enter email address'
                 onChange={(e)=>{
                    setEmail(e.target.value)
                 }}
                />
            </div>
            <div className="input-group">
                <label htmlFor="username">Username</label>
                <input type="text" id='username' name='username' placeholder='enter username' 
                onChange={(e)=>{
                    setUsername(e.target.value)
                }}
                />
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" id='pasword' name='password' placeholder='enter password' 
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                />
            </div>
            

            <button className='button primary-button' type='submit'>submit</button>

        </form>
        <p>Already have an account ? <Link to={"/login"} >login</Link>  </p>
    </div>
   </main>
  )
}

export default register