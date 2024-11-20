import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faReact } from '@fortawesome/free-brands-svg-icons';
import { LoginContext } from '../login/loginContext/LoginContext';


const Navbar = () => {
    let {login,setLogin}=useContext(LoginContext)
  return (
    <div>
       <nav className='d-flex border justify-content-around align-items-center py-3'style={{height:'60px'}}>
        <div className="logo">
            <h4 className='text-primary fw-bold fst-italic'><FontAwesomeIcon icon={faReact} /> Developer  
            </h4>
        </div>
        <div className=" d-flex gap-4">
          <NavLink to='/' className={(isActive)=>{(isActive?'fw-bold':'text-success')}}>Home</NavLink> 
            <NavLink to={'/profile'} className={(isActive)=>{(isActive?'fw-bold':'text-success')}}>Videos</NavLink>
            <NavLink to={'/'} onClick={()=>setLogin(false)}
            className={(isActive)=>{(isActive?'fw-bold':'text-success')}}
            >logout</NavLink>
        </div>
       </nav>
    </div>
  )
}

export default Navbar
