import React from 'react'
import './Tracking.css'
import Menu from './Menu.jsx'

const Tracking = () => {
  return (
    <div>
        <div className='track-container'>
            <div>
                <p>Share with: </p>
                <textarea type='numbers' placeholder='phone number' rows={4} cols={40}></textarea>
            </div>
            <div>
                <button>Generate Token</button>
                <p>Token: </p>
            </div>
            <Menu />
        </div>
      
    </div>
  )
}

export default Tracking
