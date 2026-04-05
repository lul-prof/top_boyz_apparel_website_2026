import React from 'react'
import './ContactPage.css'
import {Link} from 'react-router-dom'
import MapComponent from '../../components/MapComponent/MapComponent'
import { assets } from '../../assets/assets'

const ContactPage = () => {
  return (
    <>
    <div className="contact-container">
      {/*---------------------------*/}
      <div className="contact-left">
        <div className="contact-left-header">
          <h1>CONTACT US FOR ASSISTANCE</h1>
        </div>
        <div className="contact-form">
          <form>
          <div className="contact-form-class">
            <label htmlFor="phone">Phone</label>
            <br />
            <input type="text"/>
          </div>
          <div className="contact-form-class">
            <label htmlFor="email">Email Address</label>
            <br />
            <input type="text"/>
          </div>
          <div className="contact-form-class">
            <label htmlFor="message">Message</label>
            <br />
            <textarea rows={5}></textarea>
          </div>
          <div className="contact-form-btn">
            <button>SUBMIT</button>
          </div>
          </form>
        </div>
      </div>
      {/*---------------------------*/}
      <div className="contact-right">
        <div className="contact-right-header">
          <h1>OUR LOCATION</h1>
        </div>
        <div className="contact-right-map">
          <MapComponent/>
        </div>
      </div>
    </div>
    <div className="contact-bottom">
      <div className="contact-bottom-header">
        <h1>OUR STORE</h1>
      </div>
      <div className="contact-bottom-content">
        <div className="contact-bottom-content-1">
          <h3>50504-00100, Nairobi</h3>
        </div>
        <div className="contact-bottom-content-2">
          <p>+254-(700)-000000</p>
          <p>topboyzrecords1@gmail.com</p>
        </div>
        <div className="contact-bottom-content-3">
          <h2>SOCIAL MEDIA</h2>
          <div className="contact-bottom-content-3-links">
             <Link to="https://www.instagram.com/top_boyz_records/" target='_blank'><img src={assets.instaIcon} alt="Insta" /></Link>
            <Link to="https://music.apple.com/us/artist/top-boyz-records/1724668826" target='_blank'> <img src={assets.itunesIcon} alt="Itunes" /></Link>
            <Link to="https://open.spotify.com/artist/0S8vFC9pbO3EuxtmaWdsf4" target='_blank'><img src={assets.spotifyIcon} alt="Spotify" /></Link>
            <Link to="https://www.youtube.com/@TOPCALIBA" target='_blank'><img src={assets.youtubeIcon} alt="Youtube" /></Link>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ContactPage