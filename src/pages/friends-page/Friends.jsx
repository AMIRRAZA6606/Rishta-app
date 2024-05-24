import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { ToastContainer, toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import chatIcon from "../../assets/icons/chat.png";
import viewProfileIcon from "../../assets/icons/view-profile.png";
import "./friends.css";
import { searchProfiles } from "../../services/profiles";
import { getMyFriends } from "../../services/friends";

const FriendsListing = () => {
  const navigate = useNavigate();

  const [friends, setFriends] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchFriends = async (page = 1) => {
    setLoading(true);
    try {
      const userId = localStorage.getItem("userId");
      const response = await getMyFriends(userId);

      console.log("response============frieds", response);
      // if (!response?.data?.data?.profiles?.length) {
      //   toast.info("No matching records found, try different filters");
      // } else {
      //   const { profiles, totalPages, currentPage } = response.data.data;
      //   setProfiles(profiles);
      //   setPageCount(totalPages);
      //   setCurrentPage(currentPage - 1);
      //   toast.success("Profiles fetched successfully!");
      //   // Update the current page in local storage
      //   data.page = currentPage;
      //   localStorage.setItem("filters", JSON.stringify(data));
      // }
    } catch (error) {
      toast.error("Something went wrong, please try again!");
    } finally {
      setLoading(false);
    }
  };
  const handleClick = (profileId) => {
    navigate(`/profile/${profileId}`);
  };

  const convertAgeToYearsAndMonths = (age) => {
    const roundedAge = Math.round(age * 100) / 100;
    const years = Math.floor(roundedAge);
    const months = Math.round((roundedAge - years) * 12);
    return `${years} yrs, ${months} months`;
  };

  const openProfileDetails = (profileId) => {
    navigate(`/profile/${profileId}`);
  };
  const openChatWindow = () => {
    navigate("/chat");
  };
  return (
    <>
      <div className="connection-main-con">
        <div className="my-friend-class">
          <div className="connection-list-con">
            {friends?.map((friend, index) => {
              return (
                <div key={index} className="connection-con">
                  <div className="connection-img">
                    <img src={friend.image} alt="" />
                  </div>
                  <div className="connection-info">
                    <p>Name: {`${friend?.firstName} ${friend?.lastName}`}</p>
                    <p>Nickname: {`${friend?.nickName}`}</p>
                    <div className="lastseen-con">
                      {/* <p>Online {connection.lastSeen} ago</p> */}
                      {/* <p>You & Her</p> */}
                    </div>
                    <div className="border-1"></div>
                    <div className="desc-con-wrapper">
                      <div className="info-con">
                        <p>
                          {convertAgeToYearsAndMonths(friend.age)},{" "}
                          {`${friend.height.feet} feet, ${friend.height.inches} inches`}
                        </p>
                        {/* <p>{connection.marriedStatus}</p> */}
                      </div>
                      <div className="info-con">
                        <p>{friend.tongue}</p>
                        <p>{friend.address}</p>
                      </div>
                      <div className="info-con">
                        <p>
                          {friend.religion}, {friend.cast}
                        </p>
                        {/* <p>{connection.occupation}</p> */}
                      </div>
                      <p>{friend.education ? friend.education : ""}</p>
                    </div>
                    <div className="desc-con">
                      {/* <p>{connection.desc}</p> */}
                    </div>
                  </div>
                  <div className="connection-status-con">
                    <img
                      className="chat-icon"
                      onClick={openChatWindow}
                      src={chatIcon}
                      alt=""
                    />
                  </div>
                  <div className="connection-status-con">
                    <img
                      className="chat-icon"
                      onClick={() => openProfileDetails(friend._id)}
                      src={viewProfileIcon}
                      alt=""
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="connection-list-con">
            {friends?.map((friend, index) => {
              return (
                <div key={index} className="connection-con">
                  <div className="connection-img">
                    <img src={friend.image} alt="" />
                  </div>
                  <div className="connection-info">
                    <p>Name: {`${friend?.firstName} ${friend?.lastName}`}</p>
                    <p>Nickname: {`${friend?.nickName}`}</p>
                    <div className="lastseen-con">
                      {/* <p>Online {connection.lastSeen} ago</p> */}
                      {/* <p>You & Her</p> */}
                    </div>
                    <div className="border-1"></div>
                    <div className="desc-con-wrapper">
                      <div className="info-con">
                        <p>
                          {convertAgeToYearsAndMonths(friend.age)},{" "}
                          {`${friend.height.feet} feet, ${friend.height.inches} inches`}
                        </p>
                        {/* <p>{connection.marriedStatus}</p> */}
                      </div>
                      <div className="info-con">
                        <p>{friend.tongue}</p>
                        <p>{friend.address}</p>
                      </div>
                      <div className="info-con">
                        <p>
                          {friend.religion}, {friend.cast}
                        </p>
                        {/* <p>{connection.occupation}</p> */}
                      </div>
                      <p>{friend.education ? friend.education : ""}</p>
                    </div>
                    <div className="desc-con">
                      {/* <p>{connection.desc}</p> */}
                    </div>
                  </div>
                  <div className="connection-status-con">
                    <img
                      className="chat-icon"
                      onClick={openChatWindow}
                      src={chatIcon}
                      alt=""
                    />
                  </div>
                  <div className="connection-status-con">
                    <img
                      className="chat-icon"
                      onClick={() => openProfileDetails(friend._id)}
                      src={viewProfileIcon}
                      alt=""
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default FriendsListing;
