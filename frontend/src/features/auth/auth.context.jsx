import { createContext, useState } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({children})=>{
    const [User, setUser] = useState(null)
  const [Loading, setLoading] = useState(false)





  return(
    <AuthContext.Provider value={{User,setUser,setLoading,Loading}}>
        {children}
    </AuthContext.Provider>
  )




}



