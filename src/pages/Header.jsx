import React from 'react'
import rishtaLogo from "../assets/images/rishtaLogo.png"
import { NavLink } from 'react-router-dom'
import profileIcon from "../assets/icons/profileIcon.png"
const Header = () => {
    return (
        <div className='header-main-con'>

            <img src={rishtaLogo} alt="" />
            <div className='navigation-bar'>
                <NavLink to={"/home"}>Home</NavLink>
                <NavLink to={"/message"}>Message</NavLink>
                <NavLink to={"/search"}>Search</NavLink>
                <NavLink to={"/about"}>About</NavLink>
                <NavLink to={"/contact-us"}>Contact Us</NavLink>
                <NavLink to={"/profile"}>Profile</NavLink>
                <NavLink><img src={profileIcon} alt="" className='profile-icon' /></NavLink>

            </div>
        </div>
    )
}

export default Header