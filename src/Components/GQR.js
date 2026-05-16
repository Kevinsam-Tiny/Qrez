import React from 'react'

const GQR = () => {

/*   <style>
    
.qrTypes{
    display: grid;
    gap: 5px;
    padding: 24px;
    background: #F7F7F7;
    border-bottom: 1px solid #EAEAEC;
    grid-template-columns: repeat(4, 1fr);
    text-align: center;
    margin: auto;
}

.qrTypebtn{
    color: #220E27;
    width: 170px;
    border: 2px solid #EAEAEC;
    height: 52px;
    display: flex;
    padding: 10px;
    font-size: 13px;
    font-family: Lato, sans-serif;
    background: #FFFFFF;
    text-align: left;
    transition: all 0.2s ease-in-out;
    align-items: center;
    font-weight: 700;
    border-radius: 8px;
    padding-right: 5px;
    cursor: pointer;
}

.qrTypebtn:active{
    border-color: #1D59F9;
}

.qrTypebtn:hover{
    border-color: #1D59F9;
}

.qrTypebtn img{
    width: 30px;
    height: 30px;
   aspect-ratio: auto 30 / 30; 
    background-color: #edeaea;
    padding: 4px;
    margin-right: 15px;
}
  </style> */

    
  return (
    <div className='GQR'>
    <div>
      <h1 className='GQR_head'>Generate QR Code</h1>
      <p className='GQR_Intro'>Generate QR Code Page</p>
    </div>

    <div>


      <div className='GQR_container'>
        <div className='gqrContainerLeftPart'>
          {/* <ul>
              <li>
                <img src="" alt="link" />
                URL</li>
              <li>Text</li>
              <li>Email</li>
              <li>Whatsapp</li>
              <li>Image</li>
              <li>Pdf</li>

            </ul> */}

          <div className='qrTypes'>
            <button className='qrTypebtn'>
              <div>
                <img src={webImg} alt="link" />
              </div>
              <span>URL</span>
            </button>

            <button className='qrTypebtn'>
              <div>
                <img src={webImg} alt="link" />
              </div>
              <span>URL</span>
            </button>

          </div>
        </div>
        <div className='gqrContainerRightPart'>
          <div>
            <div><img src={empty_qr_preview} alt="" /></div>
          </div>
          <div>
            <div>
              <button><span>Download</span></button>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
  )
}

export default GQR