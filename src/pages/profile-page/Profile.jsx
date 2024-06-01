import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import {
  getProfileDetails,
  sendFriendRequest,
} from "../../services/profileDetails";

const Profile = () => {
  const { profileId } = useParams();
  const [profile, setProfileData] = useState(null);
  const [requestBtnText, setRequestBtnText] = useState("Request +");

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await getProfileDetails(profileId);
        setProfileData(response?.data?.data[0]);
        toast.success("Profile details fetched successfully!");
      } catch (err) {
        toast.error("Something went wrong, try again later");
      }
    };

    fetchProfileData();
  }, [profileId]);

  const sendRequest = async (profileId) => {
    const userId = localStorage.getItem("userId");

    if (profileId === userId) {
      toast.info("You can not send request to yourself");
      return;
    }
    setRequestBtnText("Pending...");
    try {
      const data = {
        from: userId,
        to: profileId,
      };

      const response = await sendFriendRequest(data);
      toast.info(
        response?.data?.message
        // "Friend request sent successfully!"
      );
    } catch (err) {
      if (err?.response?.status === 400 && profileId === userId) {
        toast.info("You can not send request to yourself");
      } else {
        toast.error("Something went wrong, try again later");
      }
    }
  };

  const convertAgeToYearsAndMonths = (age) => {
    if (!age) {
      return `18 yrs, 6 months`;
    }

    const roundedAge = Math.round(age * 100) / 100;
    const years = Math.floor(roundedAge);
    const months = Math.round((roundedAge - years) * 12);
    return `${years} yrs, ${months} months`;
  };

  return (
    <div className="profile-main-con">
      <div className="profile-bg"></div>
      <div className="profile-info">
        <div className="profile-img">
          <img src={`${profile?.image}`} alt="Profile" />
        </div>
        <div className="info-con">
          <div className="profile-name">
            <div className="name">{`${profile?.firstName} ${profile?.lastName}`}</div>
            <div className="age">
              {convertAgeToYearsAndMonths(profile?.age)}
            </div>
          </div>
          <button onClick={() => sendRequest(profile._id)}>
            {requestBtnText}
          </button>
        </div>
      </div>
      <div className="details-con">
        <div className="profile-detail-1">
          <h1>Profile</h1>
          <p>{profile?.about}</p>
        </div>
        <div className="profile-detail-2">
          <div className="detail-list">
            <span className="title">Cast :</span>
            <span>{profile?.cast}</span>
          </div>
          <div className="detail-list">
            <span className="title">Religion :</span>
            <span>
              {profile?.religion}, {profile?.sect}
            </span>
          </div>
          <div className="detail-list">
            <span className="title">Height :</span>
            <span>{`${profile?.height?.feet} feet, ${profile?.height?.inches} inches`}</span>
          </div>
          <div className="detail-list">
            <span className="title">Education :</span>
            <span>{profile?.education || "N/A"}</span>
          </div>
          <div className="detail-list">
            <span className="title">Mother tongue :</span>
            <span>{profile?.tongue}</span>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Profile;
