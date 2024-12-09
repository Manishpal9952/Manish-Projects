import { useState, useEffect } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route, Outlet} from "react-router-dom";
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import GitHub from './Components/GitHub'
// import GitUser from './Components/GitUser'
import Navbar from './Components/Navbar'
import { myContextAPI } from './Context/Context';
import { ContextProvider } from './MyContact';

function App() {
  const [myTheme, setMyTheme] = useState("light");


  
  const lightMode = () => {
    setMyTheme("light");
  };
  const darkMode = () => {
    setMyTheme("dark");
  };

  console.log(myTheme);
  
  
  useEffect(() => {
    let myHTML = document.querySelector("html");
    myHTML.classList.remove('light', 'dark');
    myHTML.classList.add(myTheme);
  },[myTheme]);
    
  

  return (
    // <>
    // <Router>
    //   <Navbar/>
    //   <Routes>
    //     <Route path="/" element={<Home/>} />
    //     <Route path="/About" element={<About/>} />
    //     <Route path="/Contact" element={<Contact/>} />
    //     <Route path="/GitHub" element={<GitHub/>} />
    //   </Routes>
    //   <Footer/>
    // </Router>

    // </>
    
    <>
    <ContextProvider value={{myTheme, lightMode,darkMode}}>
    <Navbar/>
     <Outlet/>
    <Footer/>
    </ContextProvider>
    </>
  )
}

export default App
