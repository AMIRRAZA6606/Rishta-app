import React from "react";
import { useLocation } from "react-router-dom";
import connectSticker from "../../assets/images/connectSticker.png";
import paginationIcon from "../../assets/icons/paginationIcon.png";

// const profiles = [
//   {
//     id: 1,
//     img: connectionImg,
//     language: "Urdu",
//     name: "Hifsa R",
//     address: "Lahore,Punjab",
//     status: "Online",
//     lastSeen: "1h",
//     age: "23",
//     height: "5'3",
//     marriedStatus: "Never Married",
//     education: "Bachelor's Degree in Software Enineering",
//     occupation: "Software Engineer",
//     religion: "Muslim",
//     caste: "Sunni",
//     desc: "I am here to marry a financially stable man. Who directly asks for marriage and do efforts. Gives princess treatment. A man who communicate... more",
//   },
//   {
//     id: 2,
//     img: connectionImg2,
//     name: "Hifsa R",
//     language: "Urdu",

//     address: "Lahore,Punjab",
//     status: "Online",
//     lastSeen: "12h",
//     age: "23",
//     height: "5'3",
//     marriedStatus: "Never Married",
//     education: "Bachelor's Degree in Software Enineering",
//     occupation: "Not Working",
//     religion: "Muslim",
//     caste: "Sunni",
//     desc: "I am here to marry a financially stable man. Who directly asks for marriage and do efforts. Gives princess treatment. A man who communicate... more",
//   },
//   {
//     id: 3,
//     img: connectionImg2,
//     name: "Hifsa R",
//     language: "Urdu",

//     address: "Lahore,Punjab",
//     status: "Online",
//     lastSeen: "12h",
//     age: "23",
//     height: "5'3",
//     marriedStatus: "Never Married",
//     education: "Bachelor's Degree in Software Enineering",
//     occupation: "Not Working",
//     religion: "Muslim",
//     caste: "Sunni",
//     desc: "I am here to marry a financially stable man. Who directly asks for marriage and do efforts. Gives princess treatment. A man who communicate... more",
//   },
//   {
//     id: 4,
//     img: connectionImg2,
//     name: "Hifsa R",
//     language: "Urdu",

//     address: "Lahore,Punjab",
//     status: "Online",
//     lastSeen: "12h",
//     age: "23",
//     height: "5'3",
//     marriedStatus: "Never Married",
//     education: "Bachelor's Degree in Software Enineering",
//     occupation: "Not Working",
//     religion: "Muslim",
//     caste: "Sunni",
//     desc: "I am here to marry a financially stable man. Who directly asks for marriage and do efforts. Gives princess treatment. A man who communicate... more",
//   },
// ];

const ProfilesListing = () => {
  const location = useLocation();
  const { profiles } = location.state || { profiles: [] };

  console.log("inside profiles listing componets", profiles);

  const convertAgeToYearsAndMonths = (age) => {
    // Step 1: Round the age to two decimal places
    const roundedAge = Math.round(age * 100) / 100;

    // Step 2: Extract the integer part as years
    const years = Math.floor(roundedAge);

    // Step 3: Extract the fractional part, convert it to months, and round it
    const months = Math.round((roundedAge - years) * 12);

    return `${years} yrs, ${months} months`;
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
                  <p>Like this profile?</p>
                  <img src={connectSticker} alt="" />
                  <p>Connect Now</p>
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
