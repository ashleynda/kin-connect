import React from 'react'
import './Signin.css'
import gg_profile from '../assets/gg_profile.png'
import carbon_password from '../assets/carbon_password.png'
import Vector from '../assets/Vector.png'
import Checkbox from './Checkbox.jsx'
import akar from '../assets/akar-icons_google-fill.png'
import cib_facebook from '../assets/cib_facebook-f.png'

const Signin = () => {
  return (
    <div className='login-page'>
      <header>
        <p className='signin'>Login</p>
      </header>

      <form className='login-form' action="">
        <div className="wrapper">
          <img className='icon' src={gg_profile} alt="" />
          <input className='username'
          type="text" 
          placeholder='Username' 
          />
        </div>
        <div className="wrapper">
          <img className='icon' src={carbon_password} alt="" />
          <input className='password'
          type="password" 
          placeholder='Password' 
          />
          <img className='private' src={Vector} alt="" />
        </div>

        <div className="remember">
          <Checkbox />
          <div className='for'>
            <p>Remember me</p>
            <p>Forgot password ?</p>
          </div>
        </div>
        <div>
          <button className='log-button'>Login</button>
        </div>
      </form>

    
        <p className='option'>or login with</p>
        <div className="icon-link">
          <img className='link' src={akar} alt="" />
          <img className='link' src={cib_facebook} alt="" />
        </div>
        <p className='yet' >Don't have an account yet?<span className='reg' >Register</span></p>
    </div>
  );
};
// onClick={handleRegister}

export default Signin
