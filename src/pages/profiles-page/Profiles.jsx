import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import connectSticker from "../../assets/images/connectSticker.png";
import paginationIcon from "../../assets/icons/paginationIcon.png";

const ProfilesListing = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { profiles } = location.state || { profiles: [] };

  const convertAgeToYearsAndMonths = (age) => {
    const roundedAge = Math.round(age * 100) / 100;
    const years = Math.floor(roundedAge);
    const months = Math.round((roundedAge - years) * 12);
    return `${years} yrs, ${months} months`;
  };

  const handleClick = (profileId) => {
    navigate(`/profile/${profileId}`);
  };

  return (
    <>
      <div className="connection-main-con">
        <div className="connection-list-con">
          {profiles?.map((profile, index) => {
            return (
              <div key={index} className="connection-con">
                <div className="connection-img">
                  <img src={profile.image} alt="" />
                </div>
                <div className="connection-info">
                  <p>Name: {`${profile?.firstName} ${profile?.lastName}`}</p>
                  <p>Nickname: {`${profile?.nickName}`}</p>
                  <div className="lastseen-con">
                    {/* <p>Online {connection.lastSeen} ago</p> */}
                    {/* <p>You & Her</p> */}
                  </div>
                  <div className="border-1"></div>
                  <div className="desc-con-wrapper">
                    <div className="info-con">
                      <p>
                        {convertAgeToYearsAndMonths(profile.age)},{" "}
                        {`${profile.height.feet} feet, ${profile.height.inches} inches`}
                      </p>
                      {/* <p>{connection.marriedStatus}</p> */}
                    </div>
                    <div className="info-con">
                      <p>{profile.tongue}</p>
                      <p>{profile.address}</p>
                    </div>
                    <div className="info-con">
                      <p>
                        {profile.religion}, {profile.cast}
                      </p>
                      {/* <p>{connection.occupation}</p> */}
                    </div>
                    <p>{profile.education ? profile.education : ""}</p>
                  </div>
                  <div className="desc-con">
                    {/* <p>{connection.desc}</p> */}
                  </div>
                </div>
                <div className="connection-status-con">
                  <p onClick={() => handleClick(profile._id)}>
                    Like this profile?
                  </p>
                  <img src={connectSticker} alt="" />
                  <p onClick={() => handleClick(profile._id)}>Connect Now</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="pagination">
        <div className="active">1</div>
        <div>2</div>
        <div>3</div>
        <div>
          <img src={paginationIcon} alt="" />
        </div>
      </div>
    </>
  );
};

export default ProfilesListing;
