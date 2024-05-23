import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { ToastContainer, toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import connectSticker from "../../assets/images/connectSticker.png";
import "./paginate.css";
import { searchProfiles } from "../../services/profiles";

const ProfilesListing = () => {
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  // const location = useLocation();
  // const { profiles } = location.state || { profiles: [] };

  const perPage =5
  const fetchProfiles = async () => {
    try {
      const data = JSON.parse(localStorage.getItem("filters"));
      const response = await searchProfiles(data);
      if (!response?.data?.data?.length) {
        toast.info("No matching records found, try different filters");
      } else {
        setProfiles(response?.data?.data);
        setPageCount(Math.ceil(data.totalItems / perPage));
        setCurrentPage(data.currentPage - 1);
        setItemsPerPage(data.itemsPerPage);
        toast.success("Profiles fetched successfully!");
      }
    } catch (error) {
      toast.error("Something went wrong please try again!");
    }
  };
  useEffect(async () => {
    const response = await fetchProfiles();
  }, []);

  // const items = profiles;
  // const itemsPerPage = 1;

  // const [currentItems, setCurrentItems] = useState(items.slice(0, itemsPerPage));
  // const [pageCount, setPageCount] = useState(Math.ceil(items.length / itemsPerPage));
  // const [itemOffset, setItemOffset] = useState(0);

  const handlePageClick = (event) => {
    console.log("event", event);
    // const newOffset = (event.selected * itemsPerPage) % items.length;
    // setItemOffset(newOffset);
    // setCurrentItems(items.slice(newOffset, newOffset + itemsPerPage));
  };

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
      <ToastContainer />
      <div className="pagination">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          activeClassName="active"
        />
      </div>
    </>
  );
};

export default ProfilesListing;
