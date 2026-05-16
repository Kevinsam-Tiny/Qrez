import React from "react";
import "./CSS/Header.css";

const Header = () => {
  return (
    <div className="navbar">
                <ul>
                    <li> <h1>QR-ez</h1></li>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    
                   
                </ul>
    </div>
  )
}

export default Header