import React, { createContext, useState } from "react";

export const AuthContext = createContext({})

export default function AuthProvider({children}){
  const [token, setToken] = useState("")
  const [userImg, setUserImg] =useState("")

  function saveToken(token){
    setToken(token)
  }
  function saveImg(img){
    setUserImg(img)
  }

return(
<AuthContext.Provider value={{token, saveToken, userImg, saveImg}}>
    {children}
</AuthContext.Provider>
)
}