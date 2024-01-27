import React from 'react'
import './HomePage.css'
import magGlass from '../assets/magGlass.png'
import phone_image from '../assets/phone-image-removebg-preview.png'
import location_image from '../assets/location_image.png'
import Menu from './Menu.jsx'
import {FaPhone} from 'react-icons/fa'

const HomePage = () => {
  return (

    <div className='container5'> 
      <header className='head'>
        <p className='welcome'>Welcome Back</p>
        <img src={magGlass} alt='' />
      </header>
      <div>
        <p className='track'><span className='keep'>Keep</span> track of people</p>
      </div>
      <div className='share-div'>

        <div className='share'>
          <img src={phone_image} alt=''/>
          <p>Share your location</p>
        </div>

        <div className='track-pic'>
          <img src={location_image} />
          <p>Track a kin</p>
        </div>

      </div>

      <footer className='menu'>
        <Menu />    

      </footer>
      
    </div>
  )
}

export default HomePage
