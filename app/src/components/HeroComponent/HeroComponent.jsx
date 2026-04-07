import React from 'react'
import './HeroComponent.css'
import { assets } from '../../assets/assets'
import TitleComponent from '../TitleComponent/TitleComponent'
import {useNavigate} from 'react-router-dom'

const HeroComponent = () => {
  const navigate=useNavigate()
  return (
    <>
    <div className="hero-container">


      {/*---------------Hero for desktop-------------------*/}
     <div className="hero-desk">
        <div className="hero-desk-left">
          <img src={assets.heroYellow1} alt="image" />
        </div>
        <div className="hero-desk-center">
          <h5>MOST LOVED BY YOU</h5>
          <h1>THIS WEEK'S TOP SELLERS</h1>
          <button onClick={()=>(navigate('/collection'))}>SHOP NOW</button>
        </div>
        <div className="hero-desk-right">
          <img src={assets.heroYellow2} alt="" />
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