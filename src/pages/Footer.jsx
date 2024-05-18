import React from 'react'
import footerLogo from '../assets/images/footerLogo.png'
import call from '../assets/icons/call.png'
import email from '../assets/icons/email.png'
const Footer = () => {
    return (
        <div className='footer-main-con'>
<div className="footerlogo">
<img src={footerLogo} alt="" />
</div>

<hr className='row'/>

<div className="contact-main">
    <div className="reachus">
        <h3>Reach</h3>
        <h3 className='company'>Company</h3>
    </div>

    <div className="reachus">
        <div className="mobile">
            <img src={call} alt="call" />
            <p>+920000000000</p>  
        </div>
        <h3>About</h3>
    </div>
    <div className="reachus">
        <div className="Email">
            <img className='email' src={email} alt="call" />
            <p>demo@gmail.com</p>  
        </div>
        <h3>Contact-us</h3>
    </div>
   
</div>
<p className='footerpar'>All rights reserved 2024 @ <span>privacy policy</span></p>
</div>

  
    )
}

export default Footer