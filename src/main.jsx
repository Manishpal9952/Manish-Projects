import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route1 } from 'react-router-dom'
import GitHub from './Components/GitHub.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Home from './Components/Home.jsx'
import fetchGitData from "./Components/FetchGitData";


// const router = createBrowserRouter([{

//   path: "/",
//   element: <App/>,
//   children:[{
//     path:"about",
//     element:<About/>,
//   },
//   {
//     path:"home",
//     element:<Home/>,
//   },
//   {
//     path:"contact",
//     element:<Contact/>,
//   },
//   {
//     path:"github",
//     element:<GitHub/>,
//     loader:fetchGitData
//   },
// ],
// },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<App/>} >
       <Route path="" element={<Home/>} />
       <Route path="about" element={<About/>} />
       <Route path="contact" element={<Contact/>} />
       <Route path="github" element={<GitHub/>} loader={fetchGitData} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />
 
)
