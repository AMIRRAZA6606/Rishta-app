import React from 'react'
import loginBgImg from '../../assets/images/loginBgImg.png'
import rightFormImg from "../../assets/images/rightFormImg.png"
import leftImgIcon from "../../assets/images/leftImgIcon.png"
import './LoginForm.css'
export const Loginform = () => {
  return (
    <>
  
  <div className='main-container'>
    <div className='left-image-container'>
<img src={loginBgImg} alt='' className='bgImg'/>
<img src={leftImgIcon} alt='' className='leftImgIcon'/>


    </div>
    <div className='main-login-container'>
      <img src={rightFormImg} className='rightFormImg'/>
   <div className="login-container">
    
        <h1>Welcome Back</h1>
        <span className="welcome-text">Welcome back! Enter your details below.</span>

        <form className="login-form">
          <div className='email'>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" placeholder='Enter your email' />
          </div>
          <div className='password'>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder='Enter your password' />
          </div>
          <div className='form-options'>
            <div className='remember-me'>
              <input type="checkbox" id="rememberMe" name="rememberMe" />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>
            <a href="abc" className='forgot-password'>Forgot Password?</a>
          </div>
          <button type="submit" className="sign-in-button">Sign In</button>
        </form>
        <div className="signup-link">
          <span>Don't have an account? <a href="abc">Sign up for free </a></span>
        </div>
      </div>
      </div>
      </div>
  
    </>
  )
}
