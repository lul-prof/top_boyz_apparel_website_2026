import React from 'react'
import './FooterComponent.css'

const FooterComponent = () => {
    const date=new Date();
    const year=date.getFullYear();
  return (
    <>
    <div className="footer-container">
        {/*-----------------------------------*/}
        <div id='footer-divider' className="footer-divider">
        </div>

        {/*-----------------------------------*/}
        <div className="footer-content">
            <div className="footer-left">
                <h2>TOP BOYZ APPAREL</h2>
                <p>Top Boyz Records brings you this amazing apparel store</p>
                <b>Developed by <a href="https://portofolio-two-rosy-31.vercel.app/" target="_blank" rel="noopener noreferrer">HighValueTech</a></b>
            </div>

            <div className="footer-center-1">
                <h2>QUICK LINKS</h2>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Shop Now</li>
                        <li>My Orders</li>
                        <li>Admin Panel</li>
                    </ul>
                </nav>
            </div>

            <div className="footer-center-2">
                <h2>CATEGORIES</h2>
                <nav>
                    <ul>
                        <li>Men</li>
                        <li>Women</li>
                        <li>Kids</li>
                        <li>Topwear</li>
                        <li>Bottomwear</li>
                        <li>Footwear</li>
                    </ul>
                </nav>
            </div>

            <div className="footer-right">
                <h2>NEWSLETTER</h2>
                <div className="footer-form">
                    <form onSubmit={(e)=>{e.preventDefault()}}>
                        <input type="text" name="" id="" placeholder='Email Address'/>
                        <p></p>
                        <button>Subscribe</button>
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