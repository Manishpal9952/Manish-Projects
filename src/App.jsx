import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route, Outlet} from "react-router-dom";
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import GitHub from './Components/GitHub'
// import GitUser from './Components/GitUser'
import Navbar from './Components/Navbar'

function App() {

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
    <Navbar/>
     <Outlet/>
    <Footer/>
    </>
  )
}

export default App
