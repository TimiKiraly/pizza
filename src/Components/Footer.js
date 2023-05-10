import React from 'react'
import Logo from "../Images/logo.jpeg";
import {BsTwitter} from "react-icons/bs";
import {SiLinkedin} from "react-icons/si";
import {BsYoutube} from "react-icons/bs";
import {FaFacebookF} from "react-icons/fa";


const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <div className='footer-ssection-one'>
        <div className='footer-logo-container'>
          <img src={Logo} />
        </div>
        <div className='footer-icons'>
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className='footer-section-two'>
        <div className='footer-section-columns'>
          <span>Address</span>
          <span>55 King Street</span>
          <span>M2 2BY</span>
          <span>Manchester</span>
          
        </div>
        <div className='footer-section-columns'>
          <span>0333 577 7777</span>
          <span>contact@cfgsfinest.com</span>
          
        </div>
        <div className='footer-section-columns'>
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>

        </div>

      </div>
      
    </div>
  )
}

export default Footer
