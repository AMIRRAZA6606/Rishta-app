import React from 'react'
import aboutimg from '../../assets/images/aboutimg.png'
import "./about.css"
const About = () => {
    return (
        <div className='about-main-con'>
            <div className="about-main-img">
                <div className="image">
                    <img src={aboutimg} alt="" />

                </div>
                <div className="about-content">
                    <span>About us</span>
                    <p>Welcome to Rishta.Com! We're dedicated to helping you find love that lasts. Our platform combines advanced technology with personalized matchmaking to connect you with compatible partners. Join us today and start your journey to a meaningful relationship.</p>
                </div>
            </div>
            {/* banner2 */}
            <div className="banner2">
                    <div className="banner-card">
                        card
                    </div>
                    <div className="banner-text">
                        <p>Matrimony Service with <span>Million</span>  of Success stories</p>
                    </div>
                </div>
            {/*  */}
        </div>
    )
}

export default About