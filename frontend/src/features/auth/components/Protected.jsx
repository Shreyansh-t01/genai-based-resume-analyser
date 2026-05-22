import React from 'react'
  import {useAuth} from '../hooks/useAuth'
import { Navigate, useNavigate } from 'react-router'

const Protected = ({children}) => {

  

const {Loading,User} = useAuth()


if(Loading){
    return(<main>
        <h1>Loading...</h1>
    </main>)
}


if(!User) {
    return (<Navigate to={"/login"} />)
}

  return (
  children)
}

export default Protected