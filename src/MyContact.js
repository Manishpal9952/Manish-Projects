import { createContext, useContext } from "react";


export const mycontext = createContext({
    myTheme:"light",
    lightMode:()=>{},
    darkMode:()=>{}
});

export const ContextProvider = mycontext.Provider;

export const useMyContext = ()=>{
    return useContext(mycontext)
}