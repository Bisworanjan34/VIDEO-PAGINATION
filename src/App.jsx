import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/navbar/Navbar'
import { Route ,Routes} from 'react-router-dom'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import Login from './component/login/Login'
import Allrouting from './routes/Allrouting'
import { LoginContextProvider } from './component/login/loginContext/LoginContext'

function App() {
  

  return (
    <>
    <LoginContextProvider>
    <Allrouting/>

    </LoginContextProvider>

    </>
  )
}

export default App
