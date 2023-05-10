import React, { useState } from 'react'
import {Link} from "react-router-dom"
import Logo from "../Images/logo.jpeg";


const Navbar = () => {
   
  return (
    <nav>
        <div className='nav-logo-container'>
            <img className="logocfg" src = {Logo} />
        </div>
        <div className='navbar-links-container'>
            <a to="/Home">Home</a>
            <a to="/About">About us</a>
            <a to="/Menu">Menu</a>
            <a to="/Locations">Locations</a>
            <a href="#contact">Contact</a>
            
            <button className='primary-button'>Book Now</button>
            
        </div>

    </nav>
  )
}


 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventLister("click", function(e) {
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behaviour: "smooth"
         });
    });
})
            
export default Navbar;
