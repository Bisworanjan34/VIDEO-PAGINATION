import { faReact, faSuperpowers } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <div>
     <div className="container home-cont ">
         <div className='mx-auto ms-3'>
          <h1 className='display-3 '><FontAwesomeIcon icon={faSuperpowers} /></h1>
          <h1 className='text-primary fw-bold'>Frontend Web 
            <span style={{color:'red'}}>Developer</span></h1>
          <h5 className='fst-italic'>Bisworanjan</h5>
          <p>welcome to Frontend react web developer page</p>
          <button className='rounded my-2'>click here</button>
          </div>
          <div className='' style={{marginTop:'0'}}>
          <img src="https://png.pngtree.com/png-vector/20190611/ourmid/pngtree-web-development-illustration-modern-can-be-used-for-landing-pages-web-png-image_1496200.jpg" alt="" width={400} className='' />
</div>

   </div>  
    </div>
  )
}

export default Home





