import React from "react";
import rishtaLogo from "../assets/images/rishtaLogo.png";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import profileIcon from "../assets/icons/profileIcon.png";
import downArrowIcon from "../assets/icons/downArrowIcon.png";
import notificationIcon from "../assets/icons/notificationIcon.png";
import { AuthProvider, useAuth } from "../context/AuthContext";
import { IMAGE_BASE_URL } from "../config/systemConfigs";
import { acceptRequest } from "../services/request";

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
          <NavLink to={"/contact-us"}>Contact Us</NavLink>
          <NavLink to={"/requests"}>Requests</NavLink>

          <div className="header-notification-con">
            <NavLink>Notifications</NavLink>
            {/* <span>
              <img src={requests.length ?? notificationIcon} alt="" />
            </span>
            <div className="header-notif-dropdown">
              {requests.length > 0 ? (
                requests.map((request, index) => (
                  <div key={index} className="notif-item">
                    <img
                      className="image-con"
                      src={`${IMAGE_BASE_URL}/${request?.from?.image}`}
                      alt=""
                    />
                    <div className="notif-content-con">
                      <p className="name">{`${request?.from?.firstName} ${request?.from?.lastName} sent you a friend request`}</p>
                      <div className="accept-btn-con">
                        <button
                          className="accept-btn"
                          onClick={() => acceptFriendRequest(request.id)}
                        >
                          Accept
                        </button>
                        <button
                          className="reject-btn"
                          onClick={() => rejectFriendRequest(request.id)}
                        >
                          Reject
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No notifications</p>
              )}
            </div> */}
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
        <ToastContainer />
      </div>
    </div>
  );
};

export default Header;
