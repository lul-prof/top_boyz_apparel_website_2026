import React from 'react'
import './TitleComponent.css'
import { assets } from '../../assets/assets'

const TitleComponent = (props) => {
  return (
    <>
    <div style={{justifySelf:`${props.pos}`,textAlign:"center"}} className="title-container">
        <h1 style={{color:`${props.color}`,fontWeight:"bold"}}>{props.text1} <img src={assets.dashIcon} alt="" /> </h1>
        <h3 style={{color:`${props.color}`}}>{props.text2}</h3>
        <p style={{color:`${props.color}`}}>{props.text3}</p> 
    </div>
    </>
  )
}

export default TitleComponent