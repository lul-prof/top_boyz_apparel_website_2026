import React from 'react'
import './NavbarComponent.css'
import { assets } from '../../assets/assets'

const NavbarComponent = () => {
  return (
    <>
    <div className="navbar-container">
        {/*-------------------------*/}
        <div className="navbar-left">
            <h1>TOP BOYZ APPAREL</h1>

        </div>
        {/*-------------------------*/}
        <div className="navbar-center">
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Collection</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
        {/*-------------------------*/}
        <div className="navbar-right">
            <div className="nav-user">
                <img src={assets.userIcon} alt="user" />
            </div>
            <div className="nav-cart">
                <img src={assets.cartIcon} alt="cart" />
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
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
                <li>Orders</li>
                <li>FAQs</li>
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