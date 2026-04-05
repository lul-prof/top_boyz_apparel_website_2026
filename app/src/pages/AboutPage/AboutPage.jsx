import React from 'react'
import './AboutPage.css'
import {assets} from '../../assets/assets.js'

const AboutPage = () => {
  return (
    <>
    <div className="about-container">
        <div className="about-header">
          <h1>ABOUT US</h1>
        </div>
        {/*-------------------------------*/}
        <div className="about-top">
          <div className="about-top-left">
            <img src={assets.top1} alt="image" />
          </div>
          <div className="about-top-right">
            <div className="about-top-right-1">
              <h2>BY TOP BOYZ RECORDS</h2>
              <p>We've brought the entire shopping
                universe right to your fingertips.
                We're not just an online store;
                we're your ally in discovering the
                finest online sales, premium offers,
                captivating deals, and unparalleled
                discounts. Shop with us today and
                embrace the future of online
                shopping!
                </p>
            </div>
            <div className="about-top-right-2">
              <h1>OUR MISSION</h1>
              <p>To ensure optimum levels of
                convenience and customer satisfaction
                with the retail process; order deliverytracking, dedicated customer service
                support and many other premium
                services.
              </p>
            </div>

            <div className="about-bottom">
          <div className="about-bottom-header">
            <h1>WHY CHOOSE US</h1>
          </div>
          <div className="about-bottom-content">
            <p>We take pride in presenting high-quality items at best prices that can't
                be matched, hailing from renowned top brands such as Gucci,
                LouieVuton, Guapi, NBA, Balanciage, Versace and many more.
            </p>
          </div>
         </div>
          </div>
        </div>
         {/*-------------------------------*/}
         
    </div>
    </>
  )
}

export default AboutPage