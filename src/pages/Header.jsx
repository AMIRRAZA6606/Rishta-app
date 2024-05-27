import React from "react";
import rishtaLogo from "../assets/images/rishtaLogo.png";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import profileIcon from "../assets/icons/profileIcon.png";
import downArrowIcon from "../assets/icons/downArrowIcon.png";
import notificationIcon from "../assets/icons/notificationIcon.png";
import { useAuth } from "../context/AuthContext";
import { IMAGE_BASE_URL } from "../config/systemConfigs";
import { acceptRequest } from "../services/request";

const Header = ({ bgColor }) => {
  const { notifications: requests } = useAuth();

  console.log("noti-----------", requests);
  console.log("length-----------", requests.length);
  const logout = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("userId");
    window.dispatchEvent(new Event("storage"));
    window.location.href = "/";
  };

  const acceptFriendRequest = async (requestId) => {
    try {
      const data = {
        requestId,
        status: "accepted",
      };
      await acceptRequest(data);

      toast.success("Friend request accepted successfully");
    } catch (error) {
      toast.error("Something went wrong, please try again later");
    }
  };
  const rejectFriendRequest = (requestId) => {
    alert(requestId);
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
            <NavLink>Notifications</NavLink>
            <span>
              <img src={notificationIcon} alt="" />
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
        <ToastContainer />
      </div>
    </div>
  );
};

export default Header;
