import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import chatIcon from "../../assets/icons/chat.png";
import viewProfileIcon from "../../assets/icons/view-profile.png";
import "./friends.css";
// import "../profiles-page/paginate.css";
import { getMyFriends } from "../../services/friends";
import { IMAGE_BASE_URL } from "../../config/systemConfigs";

const FriendsListing = () => {
  const navigate = useNavigate();

  const [friends, setMyFriends] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchFriends = async (page = 1) => {
    setLoading(true);
    try {
      const userId = localStorage.getItem("userId");
      const response = await getMyFriends(userId, page, 7);

      console.log("data================", response);
      const { data, totalPages, currentPage } = response.data;

      console.log("data outside----------------1", data?.data);
      console.log("page size------------", data?.totalPages);
      setMyFriends(data?.data);
      setPageCount(data?.totalPages);
      setCurrentPage(currentPage - 1); // ReactPaginate uses 0-based index

      if (!data?.data?.length) {
        toast.info("No friends found");
      }
    } catch (error) {
      console.log("erro=============", error);
      toast.error("Something went wrong, please try again!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFriends(currentPage + 1);
  }, [currentPage]);

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
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
            {friends.map((friend, index) => (
              <div key={index} className="connection-con">
                <div className="connection-img">
                  <img src={`${IMAGE_BASE_URL}/${friend.image}`} alt="" />
                </div>
                <div className="connection-info">
                  <p>Name: {`${friend.firstName} ${friend.lastName}`}</p>
                  <p>Nickname: {friend.nickName}</p>
                  <div className="lastseen-con"></div>
                  <div className="border-1"></div>
                  <div className="desc-con-wrapper">
                    <div className="info-con">
                      <p>
                        {convertAgeToYearsAndMonths(friend.age)},{" "}
                        {`${friend.height.feet} feet, ${friend.height.inches} inches`}
                      </p>
                    </div>
                    <div className="info-con">
                      <p>{friend.tongue}</p>
                      <p>{friend.address}</p>
                    </div>
                    <div className="info-con">
                      <p>
                        {friend.religion}, {friend.cast}
                      </p>
                    </div>
                    <p>{friend.education ? friend.education : ""}</p>
                  </div>
                  <div className="desc-con"></div>
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
            ))}
          </div>
        </div>
      </div>
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
      <ToastContainer />
    </>
  );
};

export default FriendsListing;
