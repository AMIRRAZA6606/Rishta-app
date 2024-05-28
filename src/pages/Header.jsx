import React, { useEffect, useRef, useState } from "react";
import rishtaLogo from "../assets/images/rishtaLogo.png";
import { NavLink } from "react-router-dom";
import profileIcon from "../assets/icons/profileIcon.png";
import downArrowIcon from "../assets/icons/downArrowIcon.png";
import notificationIcon from "../assets/icons/notificationIcon.png";
import notifImg from "../assets/images/notifImg.png";
const Header = ({ bgColor }) => {

  const [logoutPopover, setLogoutPopover] = useState(false)

  const popoverRef = useRef()

  const logout = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("userId");
    window.dispatchEvent(new Event("storage"));
    window.location.href = "/";
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setLogoutPopover(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);


  return (
    <div className="header-main-con" style={{ background: bgColor }}>
      <div className="header-main-con">
        <img src={rishtaLogo} alt="" />
        <div className="navigation-bar">
          <NavLink to={"/home"}>Home</NavLink>
          <NavLink to={"/message"}>Message</NavLink>
          <NavLink to={"/search"}>Search</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/friends"}>Friends</NavLink>
          <NavLink to={"/connections"}>Connections</NavLink>
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
          <div className="profile-icon-con">

            <img
              src={profileIcon}
              alt=""
              onClick={(e) => {
                e.stopPropagation()
                setLogoutPopover(!logoutPopover)
              }}
              className="profile-icon"
            />
            {logoutPopover &&
              <div className="logout-popover"
                onClick={logout}
                ref={popoverRef}
              >
                <p>Logout</p>
              </div>
            }

          </div>

        </div>
      </div>
    </div>
  );
};

export default Header;
