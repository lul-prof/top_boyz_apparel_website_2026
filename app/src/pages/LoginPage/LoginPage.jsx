import React, { useState } from 'react'
import './LoginPage.css'
import { assets } from '../../assets/assets';

const LoginPage = () => {
  const [login,setLogin]=useState(true);
  return (
    <>
    {
      login
      ?
      <div className="login-container">
        <div className="login-form">
          <form>
            
            <div className="login-form-class">
              <label htmlFor="email">Email Address</label>
              <br />
              <input type="email" />
            </div>

            <div className="login-form-class">
              <label htmlFor="password">Password</label>
              <br />
              <input type="password"/>
            </div>
            <div className="login-form-btn">
              <button>Login</button>
            </div>
          </form>
          <h5 onClick={()=>(setLogin(false))}>Don't have an account? Register</h5>
        </div>
      
    </div>
    :
    <div className="register-container">
      <div className="register-form">
        <form>
          <div className="register-form-avatar">
            <img src={assets.avatar} alt="avatar" />
          </div>
          <div className="register-form-class">
            <label htmlFor="fname">Full Names</label>
            <br />
            <input type="text" />
          </div>
          <div className="register-form-class">
            <label htmlFor="fname">Username</label>
            <br />
            <input type="text" />
          </div>
          <div className="register-form-class">
            <label htmlFor="fname">Phone number</label>
            <br />
            <input type="text" />
          </div>
          <div className="register-form-class">
            <label htmlFor="fname">Email Address</label>
            <br />
            <input type="text" />
          </div>
          <div className="register-form-class">
            <label htmlFor="fname">Password</label>
            <br />
            <input type="text" />
          </div>
          <div className="register-form-btn">
            <button>REGISTER</button>
          </div>
        </form>
        <h5 onClick={()=>(setLogin(true))}>Already have an account? Login</h5>
      </div>
      
    </div>
    }
    </>
  )
}

export default LoginPage