import React, { useContext, useState } from 'react'
import { LoginContext } from './loginContext/LoginContext'

const Login = () => {
    const { login, setLogin } = useContext(LoginContext);
    const [loginInput, setLoginInput] = useState({ userid: '', password: '' });
    const [err, setErr] = useState({});
    const [updateInput, setUpdateInput] = useState({});
    
  
    const handleChange = (e) => {
      setLoginInput({ ...loginInput, [e.target.name]: e.target.value });
    };
    const loginFun = () => {
       let {userid,password}=loginInput
       let upErr = {};

        if(!userid){
          upErr.userid='enter user id'
        }
        else if(userid !== 'bisworanjan'){
          upErr.userid=' wrong userid'
        }
        else if(userid.length < 8){
          upErr.userid='user id should be greter than 8'
        }
        if(!password){
          upErr.password='enter password'
        }
        else if(password.length < 8){
          upErr.password='password should be greter than 8'
        }
        else if(password !=='webdeveloper'){
          upErr.password='wrong password '
        }
        setErr(upErr);

       if (!upErr.userid && !upErr.password) {
         setUpdateInput(loginInput);
         setLogin(true); 
        }
      };

    return (
      <div>
        <h3 className='text-center'>LOG-IN-Page</h3>
        <div className="container">
          <div className="row">
            <div className="col-5 w-50 shadow p-2 mx-auto  text-white" style={{height:'350px'}}>
              <div className="p-3 text-center">
               <form action="" onSubmit={loginFun}>
               <input
                  type="text"
                  placeholder='enter userid'
                  onChange={handleChange}
                  value={loginInput.userid}
                  name='userid'
                  required
                  className='border p-1 px-4 text-primary '
                />
                <p className='text-start ms-2'style={{color:'red',}} >{err.userid}</p>
              
               
               <input
                  type="password"
                  placeholder='enter password'
                  onChange={handleChange}
                  value={loginInput.password}
                  name='password' 
                  required
                   className=' border p-1 px-4 text-primary my-2 '
                />
                <p className='text-start ms-2'style={{color:'red'}}>{err.password}</p>
              
                <button type='submit'>
                  Log in
                </button>
               </form>
                <br />
                <br />
               <p className='text-dark'>id:bisworanjan</p>
               <p  className='text-dark mb-2'>password:webdeveloper</p>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Login;
  
  


