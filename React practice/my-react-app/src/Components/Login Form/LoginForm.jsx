import React, { useState } from 'react'
import {Login} from './Login.css'

const LoginForm = () => {

    const [isLogin,setIsLogin] = useState(true);

    return (
        <div className='container mt-5 border-5'>
            <div className="form-container">
                <div className="form-toggle mt-5">
                    <button className={`btn ps-4 pe-4 me-4 ${isLogin ? 'active' : ""}`} onClick={()=>{setIsLogin(true)}}>Login</button>
                    <button className={`btn ps-4 pe-4 me-4 ${!isLogin ? 'active' : ""}`} onClick={()=>{setIsLogin(false)}}>Sign Up</button>
                </div>
                {isLogin ? 
                <>
                <div className="Login-form mt-4">
                    <h4>Login Form</h4>
                    <input type="email" className='mb-3 w-100 p-1'  placeholder='Enter Email'/>
                    <input type="password" className='mb-3 w-100 p-1'  placeholder='Enter Password'/><br />
                    <a href="/" className='d-flex mb-0 justify-content-end'>Forget password</a><br />
                    <button className='btn btn-primary w-100'>Login</button>
                    <p className='text-center mt-2'>Not a Member ? <a href="#" onClick={()=>setIsLogin(false)}>Signup Now</a></p>
                </div>
                </>:
                <>
                <div className="signup-form mt-4">
                    <h4>Sign Up Form</h4>
                    <input type="email" className='mb-3 w-100 p-1'  placeholder='Enter your email'/>
                    <input type="password" className='mb-3 w-100 p-1'  placeholder='Enter Password'/><br />
                    <input type="password" className='mb-3 w-100 p-1'  placeholder='Confirm Password'/><br />
                    <button className='btn btn-primary w-100'>Sign Up</button>
                </div>
                </>}
            </div>
        </div>
    )
}

export default LoginForm