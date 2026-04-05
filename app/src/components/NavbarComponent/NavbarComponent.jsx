import React from 'react'
import './NavbarComponent.css'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-hot-toast'

const NavbarComponent = () => {
    const navigate=useNavigate();
  return (
    <>
    <div className="navbar-container">
        {/*-------------------------*/}
        <div className="navbar-left">
            <h1 onClick={()=>(navigate('/'))}>TOP BOYZ APPAREL</h1>

        </div>
        {/*-------------------------*/}
        <div className="navbar-center">
            <nav>
                <ul>
                    <li onClick={()=>(navigate('/'))}>Home</li>
                    <li onClick={()=>(navigate('/collection'))}>Collection</li>
                    <li onClick={()=>(navigate('/about'))}>About</li>
                    <li onClick={()=>(navigate('/contact'))}>Contact</li>
                </ul>
            </nav>
        </div>
        {/*-------------------------*/}
        <div className="navbar-right">
            <div className="nav-user">
                <img onClick={()=>(navigate('/login'))}  src={assets.userIcon} alt="user" />
            </div>
            <div className="nav-cart">
                <img onClick={()=>(navigate('/cart'))} src={assets.cartIcon} alt="cart" />
                <div className="nav-cart-count">
                    <p>0</p>
                </div>
            </div>
            <div className="nav-menu">
                <img onClick={()=>(document.getElementById("side-menu").style.display="block")} src={assets.menuIcon} alt="menu" />
            </div>
        </div>
    </div>
    <div id='nav-divider' className="nav-divider"></div>
    
    <div id='side-menu' className="side-menu">
        <div className="side-header">
            <h1></h1>
        </div>
        <hr />
        <nav>
            <ul>
                <li onClick={()=>(navigate('/'),document.getElementById("side-menu").style.display="none")}>Home</li>
                <li onClick={()=>(navigate('/about'),document.getElementById("side-menu").style.display="none")}>About</li>
                <li onClick={()=>(navigate('/contact'),document.getElementById("side-menu").style.display="none")}>Contact</li>
                <li onClick={()=>(navigate('/cart'),document.getElementById("side-menu").style.display="none")}>Cart</li>
                <li onClick={()=>(toast.success("Feature Under development"),document.getElementById("side-menu").style.display="none")}>Orders</li>
                <li onClick={()=>(navigate('/checkout'),document.getElementById("side-menu").style.display="none")}>Checkout</li>
                <li onClick={()=>(navigate('/collection'),document.getElementById("side-menu").style.display="none")}>Collection</li>
            </ul>
        </nav>
        
        <div className="side-footer">
            <hr />
            <img onClick={()=>(document.getElementById("side-menu").style.display="none")} src={assets.closeIcon} alt="image" />
        </div>
    </div>
    
    </>
    
  )
}

export default NavbarComponent