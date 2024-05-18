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
                    <h1>About us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed illum tempora placeat voluptas porro eaque totam unde quisquam ad aperiam, facilis id, necessitatibus blanditiis dicta quas excepturi quam? Minima, iure.</p>
                </div>
            </div>
        </div>
    )
}

export default About