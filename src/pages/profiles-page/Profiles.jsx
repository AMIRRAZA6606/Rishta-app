import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import connectSticker from "../../assets/images/connectSticker.png";
import "./paginate.css";
import { searchProfiles } from "../../services/profiles";
import { IMAGE_BASE_URL } from "../../config/systemConfigs";

const ProfilesListing = () => {
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchProfiles = async (page = 1) => {
    setLoading(true);
    let data = JSON.parse(localStorage.getItem("filters")) || {};
    data.page = page;
    data.pageSize = 7; // Set the page size here or retrieve from local storage if needed

    try {
      const response = await searchProfiles(data);
      if (!response?.data?.data?.profiles?.length) {
        toast.info("No matching records found, try different filters");
      } else {
        const { profiles, totalPages, currentPage } = response.data.data;
        setProfiles(profiles);
        setPageCount(totalPages);
        setCurrentPage(currentPage - 1);
        toast.success("Profiles fetched successfully!");
        // Update the current page in local storage
        data.page = currentPage;
        localStorage.setItem("filters", JSON.stringify(data));
      }
    } catch (error) {
      toast.error("Something went wrong, please try again!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  const handlePageClick = (event) => {
    const selectedPage = event.selected + 1; // ReactPaginate is zero-based, but our API is one-based
    fetchProfiles(selectedPage);
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
        {loading ? (
          <div className="loader">
            <Oval
              height={80}
              width={80}
              color="#4fa94d"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#4fa94d"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          </div>
        ) : (
          <div className="connection-list-con">
            {profiles?.map((profile, index) => (
              <div key={index} className="connection-con">
                <div className="connection-img">
                  <img src={`${IMAGE_BASE_URL}/${profile.image}`} alt="" />
                </div>
                <div className="connection-info">
                  <p>
                    <strong>Name :</strong>{" "}
                    {`${profile?.firstName} ${profile?.lastName}`}
                  </p>
                  <p>
                    <strong>Nickname :</strong> {`${profile?.nickName}`}
                  </p>
                  <div className="lastseen-con">
                    {/* <p>Online {connection.lastSeen} ago</p> */}
                    {/* <p>You & Her</p> */}
                  </div>
                  <div className="border-1"></div>
                  <div className="desc-con-wrapper">
                    <div className="info-con">
                      <p>
                        <strong>Age :</strong>
                        {convertAgeToYearsAndMonths(profile.age)},{" "}
                      </p>
                      <p>
                        <strong>Height :</strong>
                        {`${profile.height.feet}' ${profile.height.inches}"`}
                      </p>
                      {/* <p>{connection.marriedStatus}</p> */}
                    </div>
                    <div className="info-con">
                      <p>
                        <strong>Tongue :</strong>
                        {profile.tongue}
                      </p>
                      <p>
                        <strong>Address :</strong>
                        {profile.address}
                      </p>
                    </div>
                    <div className="info-con">
                      <p>
                        <strong>Religion :</strong>
                        {profile.religion},
                      </p>
                      <p>
                        <strong>Cast :</strong>
                        {profile.cast}
                      </p>
                      {/* <p>{connection.occupation}</p> */}
                    </div>
                    <p>
                      <strong>Education :</strong>
                      {profile.education ? profile.education : ""}
                    </p>
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
            ))}
          </div>
        )}
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
