import axios from 'axios'
import env from 'dotenv'



export async function register ({username,password,email}){
   try{
     const response = await axios.post(`http://localhost:3000/api/auth/register`,{
        username,email,password
    },{
        withCredentials:true
    })
    return response.data
   }catch(err){
    console.log(err)
   }
}

export async function login ({email,password}){
   
    try{
        const response = await axios.post(`http://localhost:3000/api/auth/login`,{
            email,password
        },{
            withCredentials:true
        })
       
        return response.data
       
    }catch(err){
        console.log(err)
    }
}

export async function logout(){
    try{const response = axios.get(`${import.meta.env.BACKEND}/api/auth/logout`,{
        withCredentials:true
    })
    return response.data}catch(err){
        console.log(err)
    }
}

export async function getme(){
    try{const response  = axios.get(`${import.meta.env.BACKEND}/api/auth/getme`,{
        withCredentials:true
    })

    return response.data}catch(err){
        console.log(err)
    }
}