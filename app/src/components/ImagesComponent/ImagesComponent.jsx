import React from 'react'
import TitleComponent from '../TitleComponent/TitleComponent'
import { assets } from '../../assets/assets'
import './ImagesComponent.css'
import {useNavigate} from 'react-router-dom'

const ImagesComponent = () => {
  const navigate=useNavigate()
  return (
    <>
    <div className="ic-header">
            <h1>DRIP TOO HARD</h1>
            <h2>Fashion is a language that creates itself in clothes</h2>
            <hr />
    </div>
    <div className="images-container">
       {/*-------------------------*/}
       <div className="images-container-left">
        <img src={assets.flex1} alt="" />
        <div className="images-left-text">
            <h1>Top Boyz Apparel</h1>
            <button onClick={()=>(navigate('/collection'))}>Buy Now</button>
        </div>
       </div>
       {/*-------------------------*/}
       <div className="images-container-center">
        <img src={assets.flex2} alt="" />
        <div className="images-center-text">
            <button onClick={()=>(navigate('/collection'))}>Shop Now</button>
            <h1>Latest Sneakers</h1>  
        </div>
       </div>
       {/*-------------------------*/}
       <div className="images-container-right">
        <div className="images-container-right-1">
            <img src={assets.flex3} alt="" />
        </div>
       </div>
    </div>
    </>
  )
}

export default ImagesComponent