import React from "react";
import aboutimg from "../../assets/images/aboutimg.png";
import "./about.css";
import logo from "../../assets/images/logo.png";
import playStore from "../../assets/images/play-store.png";

import banner3Img from "../../assets/images/banner3-img.png";
import cofounder0border from "../../assets/images/cofounder0border.png";
import mSiddiqueImg from "../../assets/images/mSiddiqueImg.png";
import salmanYsfImg from "../../assets/images/salmanYsfImg.png";
import ranaMubeenimg from "../../assets/images/ranaMubeenimg.png";

const About = () => {
  return (
    <div className="about-main-con">
      <div className="about-main-img">
        <div className="image">
          <img src={aboutimg} alt="" />
        </div>

        <div className="about-content">
          <div className="content">
            <span>About us</span>
            <p>
              Welcome to Rishta.Com! We're dedicated to helping you find love
              that lasts. Our platform combines advanced technology with
              personalized matchmaking to connect you with compatible partners.
              Join us today and start your journey to a meaningful relationship.
            </p>
          </div>
        </div>
      </div>

      <div className="banner3-main">
        <div className="banner3-text">
          <span>100% Verified Rishta Profiles in a Secure App</span>
          <p className="benner3-para">
            Your trust is our top priority! All matrimonial profiles on Dil Ka
            Rishta are 100% verified via phone and in person verification.
          </p>
        </div>
        <div className="banner3-image">
          <img src={banner3Img} alt="banner3-img" />
        </div>
      </div>

      <div className="cofounder-main-con">
        <div className="heading">
          <h1>Founder and Co Founder’s </h1>
          <img src={cofounder0border} alt="" />
        </div>

        <div className="cofounder-img-con">
          <img src={mSiddiqueImg} alt="" className="img1" />
          <img src={salmanYsfImg} alt="" className="img2" />
          <img src={ranaMubeenimg} alt="" className="img3" />
        </div>
      </div>

      <div className="banner5-main">
        <div className="logo-img">
          <img src={logo} alt="logo img" />
        </div>
        <div className="banner5-text">
          <p className="para1">
            In today's world, finding a partner can be difficult. There are so
            many options for singles to choose from and they all seem alike!
            That is why Rishta.com was founded with the goal of making your
            search easier we want you to find happiness.
          </p>
          <p className="para2">
            Rishta.com is Pakistan's No.1 Matchmaking Service, founded with a
            simple objective - to help people find happiness and love in their
            lives. Rishta.com has helped more than a million Pakistani couples
            marry each other
          </p>
        </div>
      </div>

      <div className="banner6-main">
        <div className="content">
          <p>Download the Rishta.com App</p>
          <img src={playStore} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
