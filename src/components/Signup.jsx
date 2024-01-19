import React from 'react'
import './Signup.css'
import gg_profile from '../assets/gg_profile.png'
import icons8 from '../assets/icons8-email-50.png' 
import carbon_password from '../assets/carbon_password.png'
// import { useNavigate } from 'react-router-dom';

const Signup = () => {
    // const navigate = useNavigate();
    // const [signup, setSignUp] = useState('');
    // onClick={handleCancel}
  
    // const handleCancel = () => {
    //   navigate('/')
    // }
  return (
    <div className='container'>
        <div className="header">
        <div className="cancel"><button id="cancel-login" >X</button></div>
          <div className="text">Sign Up</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
            <form className="field" id="register-part">
                {/* <h3 id="signup-response">{signup}</h3> */}
                <div className="input">
                <img src={gg_profile} alt="" />
                <input
                    type="text"
                    placeholder="Username"
                    id="username"
                />
                </div>
                <div className="input">
                    <img src={icons8} alt="" />
                    <input
                        type="email"
                        placeholder="Email"
                        id="email"
                    />
                </div>
                <div className="input">
                    <img src={carbon_password} alt="" />
                    <input
                        type="password"
                        placeholder="Password"
                        id="password"
                    />
                </div>
                <div className="submit-container">
                    <button className="sign-button" type="submit">
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    </div>     
  );
};

export default Signup
