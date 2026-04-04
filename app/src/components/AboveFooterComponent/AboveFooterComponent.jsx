import React from 'react'
import './AboveFooterComponent.css'
import { assets } from '../../assets/assets'

const AboveFooterComponent = () => {
  return (
    <>
    <div className="above-footer-container">
        <div className="left-img">
            <img src={assets.customerSupport} alt="image" />
        </div>

        <div className="center-img">
            <img src={assets.exchangePolicy} alt="image" />
        </div>

        <div className="right-img">
            <img src={assets.returnPolicy} alt="image" />
        </div>

    </div>
    </>
  )
}

export default AboveFooterComponent