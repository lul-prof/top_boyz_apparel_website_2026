import React from 'react'
import './FrameComponent.css'
import TitleComponent from '../TitleComponent/TitleComponent'

const FrameComponent = () => {
  return (
    <>
    <div className="mf-header">
            <h1>Listen To our Music</h1>
            <h2>Top Boyz Records is an all time charting music group</h2>
            <hr />
    </div>
    <div className="frame-container">
        <iframe 
        width="100%" 
        height="315" 
        src="https://www.youtube.com/embed/7BmgOWhZ0rA?si=icNoadWbPxmrurVs" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; 
        autoplay;
        clipboard-write; 
        encrypted-media; 
        gyroscope; 
        picture-in-picture; 
        web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen>
        </iframe>
        <div className="flex-frame">
            <div className="flex-1">
                <iframe 
                width="100%"
                height="315" 
                src="https://www.youtube.com/embed/UUiK5_s6tM8?si=JJaVNbUknOtlr2wA" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; 
                autoplay;
                clipboard-write; 
                encrypted-media; 
                gyroscope; 
                picture-in-picture; 
                web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen>
                </iframe>
            </div>

            <div className="flex-2">
                <iframe 
                width="100%"
                height="315" 
                src="https://www.youtube.com/embed/QRss4c4tFXM?si=X_cTciED2qeGYtkU" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; 
                autoplay;
                clipboard-write; 
                encrypted-media; 
                gyroscope; 
                picture-in-picture; 
                web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen>
                </iframe>
            </div>
        </div>
    </div>
    </>
  )
}

export default FrameComponent