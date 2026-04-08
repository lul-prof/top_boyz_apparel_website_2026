import React from 'react'
import './FooterComponent.css'
import {useNavigate,Link} from 'react-router-dom'
import {toast} from 'react-hot-toast'
import { useState } from 'react'
import axios from 'axios';
import { useContext } from 'react'
import {ShopContext} from '../../context/shopContext'


const FooterComponent = () => {
    const date=new Date();
    const year=date.getFullYear();
    const navigate=useNavigate();
    const token=localStorage.getItem("token");
    const [email,setEmail]=useState("");
    const {backendUrl}=useContext(ShopContext);
    const adminUrl=import.meta.env.VITE_ADMIN_URL;



    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const response=await axios.post(`${backendUrl}/api/user/subscribe`,{email},{headers:{token}});
            if(response.data.success){
                toast.success(response.data.message);
            }else{
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error); 
        }
    }

    const handleLogout=async()=>{
        try {
           localStorage.removeItem("token");
           toast.success("Logged out Successfully");
           navigate('/login');
        } catch (error) {
            console.log(error); 
        }
    }
  return (
    <>
    <div className="footer-container">
        {/*-----------------------------------*/}
        <div id='footer-divider' className="footer-divider">
        </div>

        {/*-----------------------------------*/}
        <div className="footer-content">
            <div className="footer-left">
                <h2 onClick={()=>(navigate('/'))}>TOP BOYZ APPAREL</h2>
                <p>Top Boyz Records brings you this amazing apparel store</p>
                <b>Developed by <a href="https://portofolio-two-rosy-31.vercel.app/" target="_blank" rel="noopener noreferrer">HighValueTech</a></b>
            </div>

            <div className="footer-center-1">
                <h2>QUICK LINKS</h2>
                <nav>
                    <ul>
                        <li onClick={()=>(navigate('/'))}>Home</li>
                        <li onClick={()=>(navigate('/about'))}>About</li>
                        <li onClick={()=>(navigate('/contact'))}>Contact</li>
                        <li onClick={()=>(navigate('/collection'))}>Shop Now</li>
                        <li onClick={()=>(navigate('/orders'))}>My Orders</li>
                        <Link style={{textDecoration:"none"}} to={adminUrl} target='_blank'><li>Admin Panel</li></Link>
                        <li onClick={()=>(token?handleLogout():navigate('/login'),document.getElementById("side-menu").style.display="none")}>{token?"Logout":"Login"}</li>
                    </ul>
                </nav>
            </div>

            <div className="footer-center-2">
                <h2>CATEGORIES</h2>
                <nav>
                    <ul>
                        <li onClick={()=>(navigate('/collection'))}>Men</li>
                        <li onClick={()=>(navigate('/collection'))}>Women</li>
                        <li onClick={()=>(navigate('/collection'))}>Kids</li>
                        <li onClick={()=>(navigate('/collection'))}>Topwear</li>
                        <li onClick={()=>(navigate('/collection'))}>Bottomwear</li>
                        <li onClick={()=>(navigate('/collection'))}>Footwear</li>
                    </ul>
                </nav>
            </div>

            <div className="footer-right">
                <h2>NEWSLETTER</h2>
                <div className="footer-form">
                    <form onSubmit={handleSubmit}>
                        <input type="email" placeholder='Email Address' value={email} onChange={(e)=>(setEmail(e.target.value))}/>
                        <p></p>
                        <button type='submit'>Subscribe</button>
                    </form>
                </div>

            </div>
        </div>
        <hr />
        {/*-----------------------------------*/}
        <div className="footer-copyright">
            <h5>&copy;{year} TopBoyzApparel. All Rights Reserved</h5>
        </div>
        
    </div>
    
    </>
  )
}

export default FooterComponent