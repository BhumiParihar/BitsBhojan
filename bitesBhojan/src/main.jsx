import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Dashboard from './Components/Pages/Dashboard.jsx'
import About from './Components/Pages/About.jsx'

import ProfileUs from './Components/Pages/User/ProfileUs.jsx'
import SigninUs from './Components/Pages/User/SigninUs.jsx'
import SignupUs from './Components/Pages/User/SignupUs.jsx'

import ProfileCon from './Components/Pages/Consumer/ProfileCon.jsx'

import SignDashBoard from './Components/Pages/Consumer/SignDashBoard.jsx'
// import Thali from './Components/Pages/MessFood/Thali.jsx'
import Detail from './Components/Pages/MessFood/Detail.jsx'

import Chat from './Components/Pages/Popups/Chat.jsx'
import Option from './Components/Pages/Popups/Diettype.jsx'
import Dash from './Components/Pages/Popups/Messadv.jsx'
import Mess from './Components/Pages/Popups/Messportal.jsx'
import Check from './Components/Css/Check.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Dashboard/>}/>
      <Route path='/about' element={<About/>}/>

      {/* User */}
      <Route path='/profile' element={<ProfileUs/>}/>
      <Route path='/signin' element={<SigninUs/>}/>
      <Route path='/signup' element={<SignupUs/>}/>

      {/* Consumer */}
      <Route path='/profileC' element={<ProfileCon/>}/>
      {/* <Route path='/signinC' element={<SigninCon/>}/>
      <Route path='/signupC' element={<SignupCon/>}/> */}

      <Route path='/signdashboard' element={<SignDashBoard/>}/>
      {/* Food options */}
      {/* <Route path='/thali' element={<Thali/>}/> */}
      <Route path='/detail' element={<Detail/>}/>
      

       <Route path='/popchat' element={<Chat />}/>
       <Route path='/pops' element={<Option />}/>
       <Route path='/popchat' element={<Dash />}/>
       <Route path='/mess' element={<Mess />}/>

       <Route path='/check' element={<Check />}/>
      
      
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
