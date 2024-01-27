import React from 'react'
import './Menu.css'
import Vector1 from '../assets/Vector1.png'
import Home from '../assets/Home.png'
import location from '../assets/location-pin 1.png' 
import user from '../assets/user (8) 1.png'
import Vector2 from '../assets/Vector2.png'

const Menu = () => {
  return ( 
    <div className='menu'>
    <img src={Vector1} />
        <div className='menu-con'>
        <div className='menu1'>
        <img src={Home} />
        <p>Home</p>
        </div>

        <div className='menu1'>
        <img src={location} />
        <p>Map</p>
        </div>


        <div className='menu1'>
        <img src={user} />
        <p>Profile</p>
        </div>

        <div className='menu1'>
        <img src={Vector2} />
        <p>Settings</p>
        </div>
        </div>
      
    </div>
  )
}

export default Menu
