import React from 'react'
import './LoginPage.css'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';

const LoginPage = () => {
    const navigate=useNavigate();
  return (
    <>
    <div className="login">
        <div className="login-header">
            <h1>ADMIN PANEL</h1>
        </div>
        <form>
            <div className="login-form-class">
                <input type="email" placeholder='Email Address' />
            </div>
            <div className="login-form-class">
                <input type="password" placeholder='Password' />
            </div>
            <div className="login-form-btn">
                <button onClick={()=>(navigate("/"),toast.success("Login Successful"))}>LOGIN</button>
            </div>
        </form>
    </div>
    </>
  )
}

export default LoginPage