import React, { useState } from 'react'
import './LoginPage.css'
import { assets } from '../../assets/assets';
import { useContext } from 'react';
import { ShopContext } from '../../context/shopContext';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-hot-toast'

const LoginPage = () => {
  const [login,setLogin]=useState(true);
  const [loading, setLoading]=useState(false);

  const [avatar,setAvatar]=useState(false);
  const [full_names,setFullNames]=useState("")
  const [username,setUsername]=useState("")
  const [phone,setPhone]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const {backendUrl,setToken}=useContext(ShopContext);
  const token=localStorage.getItem("token");
  
  const navigate=useNavigate()
  
  const handleRegister=async(e)=>{
    e.preventDefault()
    try {
      const formData=new FormData();
      avatar && formData.append("avatar",avatar);
      formData.append("full_names",full_names);
      formData.append("username",username);
      formData.append("phone",phone);
      formData.append("email",email);
      formData.append("password",password);
      setLoading(true)
      const response=await axios.post(`${backendUrl}/api/user/register`,formData)
      if(response.data.success){
        toast.success(response.data.message);
        setLoading(false);
        setLogin(true);
      }else{
        toast.error(response.data.message);
      }
      
    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false)
    }
  }

  const handleLogin=async(e)=>{
    e.preventDefault();
    try {
      setLoading(true);
      const response=await axios.post(`${backendUrl}/api/user/login`,{email,password});
      console.log(response);
      if(response.data.success){
        toast.success(response.data.message);
        const token=response.data.token;
        setToken(token);
        localStorage.setItem("token",token)
        const avatar=response.data.exists.avatar;
        localStorage.setItem("avatar",avatar);
        setLoading(false);
        navigate('/');
      }
      else{
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      
    }finally{
    setLoading(false)
  }
}
const handleTokenExists=()=>{
  try {
    
    toast.error("You are already logged in")
    window.location.replace('/')
  } catch (error) {
    console.log(error);
  }
}

  if(loading){
    return(
      <div id='loader-class' className="loader-class">
        <div id='loader' className="loader">

        </div>
        <div id='loader-text' className="loader-text">
          <h2>Logging you in...</h2>
        </div>
      </div>
    )
  }
  return (
    <>
    {
      token
      ?
      handleTokenExists()
      :
      login
      ?
      <div className="login-container">
        <div className="login-form">
          <form onSubmit={handleLogin}>
            
            <div className="login-form-class">
              <label htmlFor="email">Email Address</label>
              <br />
              <input value={email} onChange={(e)=>(setEmail(e.target.value))} type="email" required />
            </div>

            <div className="login-form-class">
              <label htmlFor="password">Password</label>
              <br />
              <input type="password" value={password} onChange={(e)=>(setPassword(e.target.value))} required  />
            </div>
            <div className="login-form-btn">
              <button type='submit'>Login</button>
            </div>
          </form>
          <h5 onClick={()=>(setLogin(false))}>Don't have an account? Register</h5>
        </div>
      
    </div>
    :
    <div className="register-container">
      <div className="register-form">
        <form onSubmit={handleRegister}>
          <div className="register-form-avatar">
            <label htmlFor="avatar">
              <img src={avatar&& avatar? URL.createObjectURL(avatar):assets.avatar} alt="avatar" />
              <input type="file" id="avatar" hidden  onChange={(e)=>(setAvatar(e.target.files[0]))}/>
            </label>
          </div>
          <div className="register-form-class">
            <label htmlFor="fname">Full Names</label>
            <br />
            <input type="text" value={full_names} onChange={(e)=>(setFullNames(e.target.value))} required/>
          </div>
          <div className="register-form-class">
            <label htmlFor="fname">Username</label>
            <br />
            <input type="text" value={username} onChange={(e)=>(setUsername(e.target.value))} required/>
          </div>
          <div className="register-form-class">
            <label htmlFor="fname">Phone number</label>
            <br />
            <input type="text" value={phone} onChange={(e)=>(setPhone(e.target.value))} required/>
          </div>
          <div className="register-form-class">
            <label htmlFor="fname">Email Address</label>
            <br />
            <input type="email" value={email} onChange={(e)=>(setEmail(e.target.value))} required/>
          </div>
          <div className="register-form-class">
            <label htmlFor="fname">Password</label>
            <br />
            <input type="password" value={password} onChange={(e)=>(setPassword(e.target.value))} required/>
          </div>
          <div className="register-form-btn">
            <button type='submit'>REGISTER</button>
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