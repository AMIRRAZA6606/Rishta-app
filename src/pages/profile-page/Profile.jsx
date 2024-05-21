import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import profilePicture from "../../assets/images/profile-picture.png";
import { getProfileDetails } from "../../services/profileDetails";

const Profile = () => {
  const { profileId } = useParams();
  const [profile, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await getProfileDetails(profileId);
        console.log("API response:", response);
        setProfileData(response?.data?.data);
        toast.success("Profile details fetched successfully!");
      } catch (err) {
        console.error("Error fetching profile data:", err);
        setError(err);
        toast.error("Something went wrong, try again later");
      } finally {
        setLoading(false); // Set loading to false after fetch is complete
      }
    };

    fetchProfileData();
  }, [profileId]);

  useEffect(() => {
    if (profile) {
      console.log("Profile data updated:", profile);
    }
  }, [profile]);

  const convertAgeToYearsAndMonths = (age) => {
    if (!age) {
      return `18 yrs, 6 months`;
    }

    const roundedAge = Math.round(age * 100) / 100;
    const years = Math.floor(roundedAge);
    const months = Math.round((roundedAge - years) * 12);
    return `${years} yrs, ${months} months`;
  };

  if (loading) return <div>Loading...</div>; // Display a loading message while data is being fetched
  if (error) return <div>Error: {error.message}</div>; // Display an error message if there is an error

  return (
    <div className="profile-main-con">
      <div className="profile-bg"></div>
      <div className="profile-info">
        <div className="profile-img">
          <img src={profile?.image} alt="Profile" />
        </div>
        <div className="info-con">
          <div className="profile-name">
            <div className="name">{`${profile?.firstName} ${profile?.lastName}`}</div>
            <div className="age">
              {convertAgeToYearsAndMonths(profile?.age)}
            </div>
          </div>
          <button>Request +</button>
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
            <span>{profile?.education}</span>
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
