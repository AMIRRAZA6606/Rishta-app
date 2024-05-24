import React from "react";
import footerLogo from "../assets/images/footerLogo.png";
import call from "../assets/icons/call.png";
import email from "../assets/icons/email.png";
const Footer = () => {
  return (
    <div className="footer-main-con">
      <div className="footerlogo">
        <img src={footerLogo} alt="" />
      </div>

      <hr className="row" />
      <div className="footer-details">
        <div className="reach-us-con">
          <span className="f-title">Reach Us</span>
          <div className="desc">
            <img src={call} alt="" className="call" />

            <span>+92 0000000000</span>
          </div>
          <div className="desc">
            <img src={email} alt="" />

            <span>demo@gmail.com</span>
          </div>
        </div>
        <div className="company-con">
          <span>Company</span>

          <div className="f-details-2">
            <span>About</span>

            <span>Contact Us</span>
          </div>
        </div>
      </div>
      <div className="rights-con">
        <p className="footerpar">
          All rights reserved 2024 © <span>Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
