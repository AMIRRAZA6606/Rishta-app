import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import profileIcon from "../assets/icons/profileIcon.png";
import rishtaLogo from "../assets/images/rishtaLogo.png";

const Header = ({ bgColor }) => {
  const popoverRef = useRef();
  const navigate = useNavigate();
  const [logoutPopover, setLogoutPopover] = useState(false);

  const logout = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("userId");
    localStorage.removeItem("email");
    localStorage.removeItem("filters");
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

  const handleLogoClick = () => {
    navigate("/home");
  };

  return (
    <div className="header-main-con" style={{ background: bgColor }}>
      <div className="header-main-con">
        <img
          style={{ cursor: "pointer" }}
          onClick={handleLogoClick}
          src={rishtaLogo}
          alt=""
        />
        <div className="navigation-bar">
          <NavLink to={"/home"}>Home</NavLink>
          <NavLink to={"/chat"}>Chat</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/friends"}>Friends</NavLink>
          <NavLink to={"/contact-us"}>Contact Us</NavLink>
          <NavLink to={"/requests"}>Requests</NavLink>
          <div className="profile-icon-con">
            <img
              src={profileIcon}
              alt=""
              onClick={(e) => {
                e.stopPropagation();
                setLogoutPopover(!logoutPopover);
              }}
              className="profile-icon"
            />
            {logoutPopover && (
              <div className="logout-popover" onClick={logout} ref={popoverRef}>
                <p>Logout</p>
              </div>
            )}
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Header;
