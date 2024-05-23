import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { ToastContainer, toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import connectSticker from "../../assets/images/connectSticker.png";
import "./friends.css";
import { searchProfiles } from "../../services/profiles";

const FriendsListing = () => {
  const [friends, setFriends] = useState([
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNt6-6B_ZhqBgGp2OQWeCSzUcq3xyHcvTvwqI6zohzsw&s",
      firstName: "saeed",
      lastName: "haider",
      nickName: "saeed",
      age: "37.65555",
      height: {
        feet: 5,
        inches: 4,
      },
      tongue: "urdu",
      address: "lahore",
      religion: "islam",
      cast: "daal",
      education: "BS",
      _id: "123",
    },
  ]);
  const navigate = useNavigate();

  const handleClick = (profileId) => {
    navigate(`/profile/${profileId}`);
  };

  const convertAgeToYearsAndMonths = (age) => {
    const roundedAge = Math.round(age * 100) / 100;
    const years = Math.floor(roundedAge);
    const months = Math.round((roundedAge - years) * 12);
    return `${years} yrs, ${months} months`;
  };

  return (
    <>
      <div className="connection-main-con">
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
                  <p onClick={() => handleClick(friend._id)}>
                    Like this profile?
                  </p>
                  <img src={connectSticker} alt="" />
                  <p onClick={() => handleClick(friend._id)}>Connect Now</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default FriendsListing;
