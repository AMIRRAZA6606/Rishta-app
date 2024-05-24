import React from "react";
import rishtaLogo from "../assets/images/rishtaLogo.png";
import { NavLink } from "react-router-dom";
import profileIcon from "../assets/icons/profileIcon.png";
import downArrowIcon from "../assets/icons/downArrowIcon.png";
import notificationIcon from "../assets/icons/notificationIcon.png";
import notifImg from "../assets/images/notifImg.png";
const Header = ({ bgColor }) => {
  const logout = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("userId");
    window.dispatchEvent(new Event("storage"));
    window.location.href = "/";
  };

  return (
    <div className="header-main-con" style={{ background: bgColor }}>
      <div className="header-main-con">
        <img src={rishtaLogo} alt="" />
        <div className="navigation-bar">
          <NavLink to={"/home"}>Home</NavLink>
          <NavLink to={"/chat"}>Chat</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/friends"}>Friends</NavLink>
          <div className="header-connection-con">
            <NavLink to={"/connections"}>connection</NavLink>
            <span className="connection-dropdownIcon">
              <img src={downArrowIcon} alt="" />
            </span>
            <div className="connection-dropdown-con">
              <ul>
                <li>
                  <img src={profileIcon} alt="" className="profile-icon" />
                  <p>Salman</p>
                </li>
                <li>
                  <img src={profileIcon} alt="" className="profile-icon" />
                  <p>Salman</p>
                </li>
                <li>
                  <img src={profileIcon} alt="" className="profile-icon" />
                  <p>Salman</p>
                </li>
              </ul>
            </div>
          </div>

          <NavLink to={"/contact-us"}>Contact Us</NavLink>
          <NavLink to={"/profile"}>Profile</NavLink>
          <div className="header-notification-con">
            <NavLink to={"/contact-us"}>Notification</NavLink>
            <span>
              <img src={notificationIcon} alt="" />
            </span>
            <div className="header-notif-dropdown">
              <img src={notifImg} alt="" />
              <div className="notif-content-con">
                <p className="name">Jenny Wilson</p>
                <p className="time">1min ago</p>
                <p className="info">
                  Guy Hawkins, Robert Fox and 3 other mutual friend
                </p>
                <div className="accept-btn-con">
                  <button className="accept-btn">Accept</button>
                  <button className="reject-btn">Reject</button>
                </div>
              </div>
            </div>
          </div>
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
    </div>
  );
};

export default Header;
