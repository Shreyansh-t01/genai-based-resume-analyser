import axios from 'axios'
import env from 'dotenv'



export async function register ({username,password,email}){
   try{
     const response = await axios.post(`${import.meta.env.BACKEND}/api/auth/register`,{
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
    console.log("api call hone wali hai")
    try{
        const response = await axios.post(`${import.meta.env.BACKEND}/api/auth/login`,{
            email,password
        },{
            withCredentials:true
        })
        console.log("user entered in api layer")
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