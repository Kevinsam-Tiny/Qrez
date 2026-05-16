import React, { useState } from 'eact';

const Try = () => {
  const [url, setUrl] = useState('');
  const [qrCode, setQrCode] = useState(null);

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const generateQrCode = async () => {
    try {
      const response = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`);
      const blob = await response.blob();
      const qrCodeUrl = URL.createObjectURL(blob);
      setQrCode(qrCodeUrl);
    } catch (error) {
      console.error('Error generating QR code:', error);
    }
  };

  return (
    <div>
      <div className="input-group">
        <label htmlFor="url">Enter URL:</label>
        <input type="text" id="url" value={url} onChange={handleUrlChange} />
        <button onClick={generateQrCode}>Generate</button>
      </div>
      {qrCode && (
        <div className="qr-code-container">
          <img src={qrCode} alt="QR Code" />
          <button onClick={() => setQrCode(null)}>Clear</button>
        </div>
      )}
    </div>
  );
};

export default Try;