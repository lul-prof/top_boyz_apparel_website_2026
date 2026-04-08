import React, { useState } from 'react'
import './LoginPage.css'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
import axios from 'axios';

const LoginPage = () => {
    const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const backendUrl=import.meta.env.VITE_BACKEND_URL;
    const [loading,setLoading]=useState(false)

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            setLoading(true)
            const response=await axios.post(`${backendUrl}/api/admin/login`,{email,password});
            console.log(response);
            if(response.data.success){
                const token=response.data.token;
                localStorage.setItem("admin-token",token);
                setLoading(false)
                toast(response.data.message);
                navigate('/');
            }else{
                toast(response.data.message);
            }
        } catch (error) {
            console.log(error); 
        }finally{
           setLoading(false) 
        }
    }

    if(loading){
    return(
        <div id='loader-class' className="loader-class">
            <div id='loader' className="loader">

            </div>
            <div id='loader-text' className="loader-text">
            <h2>Logging You In...</h2>
            </div>
        </div>
        )
  }
  return (
    <>
    <div className="login">
        <div className="login-header">
            <h1>ADMIN PANEL</h1>
        </div>
        <form onSubmit={handleSubmit}>
            <div className="login-form-class">
                <input type="email" value={email} onChange={(e)=>(setEmail(e.target.value))} required placeholder='Email Address' />
            </div>
            <div className="login-form-class">
                <input type="password" value={password} onChange={(e)=>(setPassword(e.target.value))} required placeholder='Password' />
            </div>
            <div className="login-form-btn">
                <button type='submit'>LOGIN</button>
            </div>
        </form>
    </div>
    </>
  )
}

export default LoginPage