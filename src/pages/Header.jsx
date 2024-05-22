import React from "react";
import rishtaLogo from "../assets/images/rishtaLogo.png";
import { NavLink, useNavigate } from "react-router-dom";
import profileIcon from "../assets/icons/profileIcon.png";
const Header = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("userId");
    window.dispatchEvent(new Event("storage"));
    navigate("/");
  };

  return (
    <div className="header-main-con">
      <img src={rishtaLogo} alt="" />
      <div className="navigation-bar">
        <NavLink to={"/home"}>Home</NavLink>
        <NavLink to={"/message"}>Message</NavLink>
        <NavLink to={"/search"}>Search</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/connections"}>Connections</NavLink>
        <NavLink to={"/contact-us"}>Contact Us</NavLink>
        <NavLink to={"/profile"}>Profile</NavLink>
        <NavLink>Notifications</NavLink>
        <NavLink>
          <img
            src={profileIcon}
            alt=""
            onClick={logout}
            className="profile-icon"
          />
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
