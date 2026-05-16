import React from 'react'
import './CSS/Footer.css';

import instaImage from './images/insta.png'
import twitterImage from './images/twitter.png'
import linkedinImage from './images/linkedin.png'



function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="links">
                    <a href="/">Home</a>
                    <a href="about">About</a>
                    <a href="services">Services</a>
                    
                   
                    
                </div>
                <div className="social-media">
                    <a href="https://instagram.com"><img src={instaImage} alt="link" className='icon'/></a>
                    <a href="https://linkedin.com"><img src={linkedinImage} alt="link" className='icon'/></a>
                    <a href="https://x.com"><img src={twitterImage} alt="link" className='icon'/></a>
                  
                </div>
            </div>
            <div className="bottom-text">
                <p>Made with <span>&#10084;&#65039;</span> in India</p>
            </div>
        </footer>
    );
}



export default Footer