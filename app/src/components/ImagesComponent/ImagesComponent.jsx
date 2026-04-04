import React from 'react'
import TitleComponent from '../TitleComponent/TitleComponent'
import { assets } from '../../assets/assets'
import './ImagesComponent.css'

const ImagesComponent = () => {
  return (
    <>
    <div className="ic-header">
            <h1>DRIP TOO HARD</h1>
            <h2>Always Dripping Not Tripping</h2>
            <hr />
    </div>
    <div className="images-container">
       {/*-------------------------*/}
       <div className="images-container-left">
        <img src={assets.flex1} alt="" />
        <div className="images-left-text">
            <h1>Top Boyz Apparel</h1>
            <button>Buy Now</button>
        </div>
       </div>
       {/*-------------------------*/}
       <div className="images-container-center">
        <img src={assets.flex2} alt="" />
        <div className="images-center-text">
            <button>Shop Now</button>
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