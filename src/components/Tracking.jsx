import React from 'react'
import './Tracking.css'
import Menu from './Menu.jsx'

const Tracking = () => {
  return (
    <div>
        <div className='track-container'>
            <div>
                <p className='share-with'>Share with: </p>
                <textarea type='numbers' placeholder='phone number' rows={4} cols={42}></textarea>
            </div>
            <div className='token-div'>
              <button className='generate'>Generate Token</button>
              <p className='token-response'>Token: </p>
              <Menu />
            </div>
        </div>
      
    </div>
  )
}

export default Tracking
