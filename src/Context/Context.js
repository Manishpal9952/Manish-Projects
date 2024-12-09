import { createContext } from "react";

export const myContextAPI = createContext({
    myTheme:"light",
    lightMode:()=>{},
    darkMode:()=>{}
})