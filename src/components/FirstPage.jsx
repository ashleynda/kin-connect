import React from 'react'
import './FirstPage.css'
import Group from '../assets/Group 1780.png';
const image = require('../assets/bg_image.png');



const FirstPage = () => {
  return (
    <div className='first-container'>
      <div className='comapny-name'>
        <img id='bg-image' src={image} />
        <h1 className='logo'>Kin <span className='logo1'>connect</span></h1>
        
      </div>
       
        <div className='button-box'>
          <p className='always'>Always keep track<br></br>
            <span className='people'>of your people.</span></p>

          <p className='devi'>Devices can detect Bluetooth signals<br></br>
            from a lost Airtag and relay the<br></br>
            location back to its owner.
          </p>

            <div className='skip'>
            <p>Skip Now</p>
            <img src={Group}  alt=''/>
        </div>

        
        </div>   
      
    </div>
  )
}

export default FirstPage



