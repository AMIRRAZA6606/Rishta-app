import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import chatIcon from "../../assets/icons/chat.png";
import viewProfileIcon from "../../assets/icons/view-profile.png";
import fallbackPersonImg from "../../assets/images/fallbackPersonImg.png";
import { getMyFriends } from "../../services/friends";
import "./friends.css";

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
      const response = await getMyFriends(userId, page, 5);

      const { data } = response.data;
      setMyFriends(data?.data);
      setPageCount(data?.totalPages);

      if (!data?.data?.length) {
        toast.info("No friends found");
      }
    } catch (error) {
      toast.error("Something went wrong, please try again!");
    } finally {
      setLoading(false);
    }
  };

  // Fetch friends initially when the component mounts
  useEffect(() => {
    fetchFriends();
  }, []);

  // Fetch friends whenever the current page changes
  useEffect(() => {
    fetchFriends(currentPage + 1);
  }, [currentPage]);

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const openProfileDetails = (profileId) => {
    navigate(`/profile/${profileId}`);
  };

  const openChatWindow = () => {
    navigate("/chat");
  };

  console.log(friends, "friends");

  return (
    <>
      <div className="connection-main-con">
        <div className="my-friend-class">
          <div className="connection-list-con">
            {friends && friends.length > 0
              ? friends.map((friend, index) => (
                  <div key={index} className="connection-con">
                    <div className="connection-img">
                      <img src={`${IMAGE_BASE_URL}/${friend.image}`} alt="" />
                    </div>
                    <div className="connection-info">
                      <p>
                        <strong>Name:</strong>{" "}
                        {`${friend.firstName} ${friend.lastName}`}
                      </p>
                      <p>
                        <strong>Nickname:</strong> {friend.nickName}
                      </p>
                      <div className="lastseen-con"></div>
                      <div className="border-1"></div>
                      <div className="desc-con-wrapper">
                        <div className="info-con">
                          <p>
                            <strong>Tongue:</strong>
                            {friend.tongue}
                          </p>
                          <p>
                            <strong>Address:</strong>
                            {friend.address}
                          </p>
                        </div>
                        <div className="info-con">
                          <p>
                            <strong>Religion:</strong>
                            {friend.religion}, <strong>Cast:</strong>
                            {friend.cast}
                          </p>
                        </div>
                        <p>
                          <strong>Education:</strong>
                          {friend.education ? friend.education : ""}
                        </p>
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
                ))
              : "Make some friends"}
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
