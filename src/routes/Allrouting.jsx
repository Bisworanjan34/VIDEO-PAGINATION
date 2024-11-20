import React, { useContext } from 'react'
import { LoginContext } from '../component/login/loginContext/LoginContext'
import Navbar from '../component/navbar/Navbar'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Profile from '../pages/profile/Profile'
import Login from '../component/login/Login'

const Allrouting = () => {

    let {login,setLogin}=useContext(LoginContext)
    return (
        <div>
            <Navbar />
           
            <Routes>
                <Route path='/' element={login? <Home /> : <Login/>} />
                <Route path='/profile' element={login ? <Profile /> :<Navigate to={'/'}/>} />
                {/* <Route path='/login' element={<Login />} /> */}
            </Routes>  
        </div>
    )
}

export default Allrouting
