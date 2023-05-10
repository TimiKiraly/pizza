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
            <a href="/Home">Home</a>
            <a href="/AboutUs">About us</a>
            <a href="/Menu">Menu</a>
            <a href="/Locations">Locations</a>
            <a href="/Contacts">Contact</a>
            <a href="/Booking">Book Now</a>
            
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
