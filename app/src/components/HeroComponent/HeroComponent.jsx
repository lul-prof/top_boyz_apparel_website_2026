import React from 'react'
import './HeroComponent.css'
import { assets } from '../../assets/assets'
import TitleComponent from '../TitleComponent/TitleComponent'

const HeroComponent = () => {
  return (
    <>
    <div className="hero-container">


      {/*---------------Hero for desktop-------------------*/}
     <div className="hero-desk">
        <img src={assets.heroImage} alt="" srcset="" />
        <div className="hero-desk-text">
          <h1>Brought to you by Top Boyz Records</h1>
          <button>Shop Now</button>
        </div>
     </div>


      {/*-------------Hero phonr-----------------*/}
     <div className="hero-mobile">
      <div className="hero-image">
        <img src={assets.heroImage2} alt="" />
     </div>
     </div>

    </div>
    </>
  )
}

export default HeroComponent