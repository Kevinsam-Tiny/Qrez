import React from 'react'
import './CSS/Home.css'
import scan from './images/scanner.png'
import qricon from './images/qr-code.png'

const Home = () => {
  return (
    <div className='home'>
      
      <p className='headIntro'>Make use of our collection of QR tools to process digital documents and streamline your workflow seamlessly.</p>

      <div className='container'>
      <ul>
        <li className="list">
          <a href="/sec">
            <div className='card'>
              <div><img className='cardImg' src={scan} alt="scan" /></div>
              <div className='right'>
                <h4>Enhance  QR Code</h4>
              </div>
            </div>
          </a>
        </li>
        <li className="list">
          <a href="/generateqrcode">
            <div className='card'>
              <div><img className='cardImg' src={qricon} alt="qr-code" /></div>
              <div  className='right'>
                <h4>Generate QR code</h4>
              </div>
            </div>
          </a>
        </li>
      </ul>

      <br />
      <hr />
      <br />
      <br />
      <br />
      <br />

      </div>
    </div>
  )
}

export default Home