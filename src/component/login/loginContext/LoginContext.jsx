import { createContext, useState } from "react";

let LoginContext= createContext()

let LoginContextProvider=({children})=>{
    let [login,setLogin]=useState(false)

    return (
        <LoginContext.Provider value={{login,setLogin}}>
            {children}
        </LoginContext.Provider>
    )
}

export {LoginContext,LoginContextProvider}