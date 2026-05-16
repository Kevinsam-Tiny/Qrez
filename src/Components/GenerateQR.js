import React, { useState } from 'react';
import axios from 'axios';
import './CSS/GenerateQR.css';
import empty_qr_preview from './images/empty_qr_preview.svg';

const GenerateQR = () => {
  const [url, setUrl] = useState('');
  const [qrCode, setQrCode] = useState(null);

  const handleGenerateQR = async () => {
    if (!url) return;

    try {
      const response = await axios.post('http://localhost:5000/generate_qr', { url }, { responseType: 'blob' });
      const qrBlob = response.data;
      const qrUrl = URL.createObjectURL(qrBlob);
      setQrCode(qrUrl);
    } catch (error) {
      console.error('Error generating QR code:', error);
    }
  };

  const handleDownload = () => {
    if (!qrCode) return;
    const link = document.createElement('a');
    link.href = qrCode;
    link.download = 'qr_code.png';
    link.click();
  };

  return (
    <div className='GQR'>
      <div>
        <h1 className='GQR_head'>Generate QR Code</h1>
        <p className='GQR_Intro'>Generate QR Code for your link</p>
      </div>

      <div className='GQR_container'>
        <div className='gqrContainerLeftPart'>
          <div>
            <div>
              <h4>Enter your link here</h4>
              <br />
              <input
                className='link_input'
                type='text'
                placeholder='https://'
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div>
              <button className='generate_btn' onClick={handleGenerateQR}><span>Generate</span></button>
            </div>
          </div>
        </div>

        <div className='gqrContainerRightPart'>
          <div>
            <img className='qr_preview' src={qrCode || empty_qr_preview} alt="QR Code Preview" />
          </div>
          <button className='download_btn' onClick={handleDownload}><span>Download</span></button>
        </div>
      </div>
    </div>
  );
};

export default GenerateQR;
