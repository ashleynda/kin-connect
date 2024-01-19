import React from 'react'
import './Token.css'

const Token = () => {
  return (
    <div className='token-cont'>
      <div className='tok1'>
        <input className='tok' type='text' placeholder='Enter token: ' />
        
        <button className='track1'>Track</button>
      </div>
    </div>
  )
}

export default Token

