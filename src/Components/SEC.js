import React, { useState } from 'react';
import './CSS/SEC.css';
import upload_icon from './images/upload icon.png';
import axios from 'axios';

const SEC = () => {
    const [file, setFile] = useState(null);
    const [fileUrl, setFileUrl] = useState(null);
    const [enhancedImage, setEnhancedImage] = useState(null);

    const handleChange = (e) => {
        const uploadedFile = e.target.files[0];
        if (uploadedFile) {
            setFile(uploadedFile);
            setFileUrl(URL.createObjectURL(uploadedFile));
        }
    };

    const handleReset = () => {
        setFile(null);
        setFileUrl(null);
        setEnhancedImage(null);
    };

    const handleEnhance = async () => {
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('http://localhost:5000/upload', formData, {
                responseType: 'blob',
            });
            const url = URL.createObjectURL(new Blob([response.data]));
            setEnhancedImage(url);
        } catch (error) {
            console.error('There was an error uploading the file!', error);
        }
    };

    return (
        <div className='sec'>
            <div>
                <p className='secHead'>Enhance QR code</p>
               < br/>
                {/* <p className='secIntro'>Use our QR code generator to create your free QR code.</p> */}
            </div>
            {/* <h3 style={{ marginBottom: "20px" }}>{file ? "Uploaded File" : "Select File"}</h3> */}
            {!fileUrl && (
                <div className='file-upload-container'>
                    <img style={{ height: "100px" }} src={upload_icon} alt="Upload Icon" />
                    <label className="custom-file-upload">
                        <input type="file" onChange={handleChange} />
                        Choose File
                    </label>
                   
                </div>
            )}
            {fileUrl && (
                <div className='uploadedContainer'>
                    <img className='uploadedQrCode' src={fileUrl} alt='Uploaded QR Code' />
                    <button className='chooseAnotherbtn' onClick={handleReset}>Choose another file</button>
                </div>
            )}
            <div className='EnCbtn'>
                <button onClick={handleEnhance} disabled={!file}>Enhance</button>
            </div>
            {enhancedImage && (
                <div className='uploadedContainer'>
                    <h2>Enhanced Image</h2>
                    <img className='uploadedQrCode' src={enhancedImage} alt='Enhanced QR Code' />
                    <a href={enhancedImage} download="enhanced_qr_code.jpg">
                        <button>Download Enhanced Image</button>
                    </a>
                </div>
            )}
        </div>
    );
};

export default SEC;
