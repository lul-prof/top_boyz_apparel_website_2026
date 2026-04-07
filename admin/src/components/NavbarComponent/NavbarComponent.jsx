import React from 'react'
import './NavbarComponent.css'
import {assets} from '../../assets/assets.js'
import { useNavigate } from 'react-router-dom'

const NavbarComponent = () => {
    const navigate=useNavigate();
  return (
    <>
    <div className="navbar">
        {/*------------------------*/}
        <div className="navbar-left">
            <img onClick={()=>(document.getElementById("sidemenu").style.display="block")} src={assets.menuIcon} alt="image" />
        </div>
        {/*------------------------*/}
        <div className="navbar-center">
            <h2>TOP BOYZ APPAREL</h2>
        </div>
        {/*------------------------*/}
        <div className="navbar-right">
            <img onMouseOver={()=>(document.getElementById("avatar-p").style.display="block")} onMouseOut={()=>(document.getElementById("avatar-p").style.display="none")} src={assets.adminAvatar} alt="image" />
            <p id='avatar-p' style={{display:"none"}}>Admin</p>
        </div>
    </div>
    <div id='sidemenu' className="sidemenu">
        {/*-----------------------------*/}
        <div className="sidemenu-header">
            <h1>ADMIN</h1>
        </div>
        {/*-----------------------------*/}
        <div className="sidemenu-content">
            <nav>
                <ul>
                    <li onClick={()=>(navigate('/'),document.getElementById("sidemenu").style.display="none")}>Dashboard</li>
                    <li onClick={()=>(navigate('/add'),document.getElementById("sidemenu").style.display="none")}>Add Products</li>
                    <li onClick={()=>(navigate('/orders'),document.getElementById("sidemenu").style.display="none")}>Orders</li>
                    <li onClick={()=>(navigate('/users'),document.getElementById("sidemenu").style.display="none")}>Users</li>
                    <li onClick={()=>(navigate('/login'),document.getElementById("sidemenu").style.display="none")}>Logout</li>
                </ul>
            </nav>
        </div>
        {/*-----------------------------*/}
        <div className="sidemenu-footer">
            <img onClick={()=>(document.getElementById("sidemenu").style.display="none")} src={assets.closeIcon} alt="image" />
        </div>
    </div>
    </>
  )
}

export default NavbarComponent