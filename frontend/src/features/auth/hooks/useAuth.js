
import { useContext } from 'react'
import { AuthContext } from '../auth.context'
import { login, register } from '../services/auth.api'
import { useNavigate } from 'react-router'



 export const useAuth =  ()=>{
          
    const navigate = useNavigate()
    const context = useContext(AuthContext)
    const {User,setUser,Loading,setLoading} = context
  
    
     
    const handleLogin = async ({email,password})=>{
       
        setLoading(true)
        try{
        const data =  await login({email,password}) 
        setUser(data.user)
        }catch(err){
            console.log(err)
        }finally{
         setLoading(false)

        navigate('/')
        }
        
       
        
    }
    const handleRegister = async ({username,email,password})=>{
       setLoading(true)
       const data = await register({email,password})
       setUser(data.user)
       setLoading(false)
    }

    const handleLogout = async ()=>{
            setLoading(true)
           const data =  await logout()
            setUser(null)
            setLoading(false)
    }


    return {User,Loading,handleLogin,handleLogout,handleRegister}

}