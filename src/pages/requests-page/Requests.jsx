import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import chatIcon from "../../assets/icons/chat.png";
import viewProfileIcon from "../../assets/icons/view-profile.png";
import "./requests.css";
// import { getMyFriends } from "../../services/friends";
import { IMAGE_BASE_URL } from "../../config/systemConfigs";
import { useAuth } from "../../context/AuthContext";
import { acceptRequest, rejectRequest } from "../../services/request";

const RequestsListing = () => {
  const { notifications } = useAuth();

  console.log("notifications==========", notifications);
  const navigate = useNavigate();

  const [friends, setMyFriends] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (notifications && notifications.length > 0) {
      setLoading(false);
    }
  }, [notifications]);

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const convertAgeToYearsAndMonths = (age) => {
    const roundedAge = Math.round(age * 100) / 100;
    const years = Math.floor(roundedAge);
    const months = Math.round((roundedAge - years) * 12);
    return `${years} yrs, ${months} months`;
  };

  const handleAcceptRequest = async (requestId) => {
    try {
      const data = {
        requestId,
        status: "accepted",
      };
      await acceptRequest(data);
      toast.success("Request accepted successfully!");
    } catch (error) {
      toast.error("Something went wrong, please try again!");
    }
  };

  const handleRejectRequest = async (requestId) => {
    try {
      const data = {
        requestId,
        status: "rejected",
      };
      await rejectRequest(data);
      toast.success("Request rejected successfully!");
    } catch (error) {
      toast.error("Something went wrong, please try again!");
    }
  };

  return (
    <>
      <div className="connection-main-con">
        <div className="my-friend-class">
          <div className="connection-list-con">
           
            {notifications.map((notification, index) => (
              <div key={index} className="connection-con">
                <div className="connection-img">
                  <img
                    src={`${IMAGE_BASE_URL}/${notification?.from?.image}`}
                    alt=""
                  />
                </div>
                <div className="connection-info">
                  <p>
                    Name:{" "}
                    {`${notification?.from?.firstName} ${notification?.from?.lastName}`}
                  </p>
                  <p>Nickname: {notification.nickName}</p>
                  <div className="lastseen-con"></div>
                  <div className="border-1"></div>
                  <div className="desc-con-wrapper">
                    {/* <div className="info-con">
                      <p>
                        {convertAgeToYearsAndMonths(notification.age)},{" "}
                        {`${notification.height.feet} feet, ${notification.height.inches} inches`}
                      </p>
                    </div> */}
                    <div className="info-con">
                      <p>{notification.tongue}</p>
                      <p>{notification.address}</p>
                    </div>
                    <div className="info-con">
                      <p>
                        {notification.religion}, {notification.cast}
                      </p>
                    </div>
                    <p>
                      {notification.education ? notification.education : ""}
                    </p>
                  </div>
                  <div className="desc-con"></div>
                </div>
                <div className="connection-status-con">
                  <button onClick={() => handleAcceptRequest(notification.id)}>
                    Accept
                  </button>
                </div>
                <div className="connection-status-con">
                  <button
                    onClick={() => {
                      handleRejectRequest(notification.id);
                    }}
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
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

export default RequestsListing;
