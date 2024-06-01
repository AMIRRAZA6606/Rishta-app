import React, { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import fallbackPersonImg from "../../assets/images/fallbackPersonImg.png";
import { useAuth } from "../../context/AuthContext";
import { acceptRequest, rejectRequest } from "../../services/request";

import "./requests.css";

const RequestsListing = () => {
  const { notifications } = useAuth();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (notifications) {
      setLoading(false);
    }
  }, [notifications]);

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
            {notifications.length === 0 ? (
              <div>
                <p>No requests found!</p>
              </div>
            ) : (
              <>
                {notifications?.map((notification, index) => (
                  <div key={index} className="connection-con">
                    <div className="connection-img">

                      {
                        notification?.from?.image ? (
                          <img
                            style={{ width: "180px", borderRadius: "10px" }}
                            src={`${notification?.from?.image}`}
                            alt=""
                          />
                        ) : (
                          <img
                            style={{ width: "180px", borderRadius: "10px" }}
                            src={fallbackPersonImg}
                            alt=""
                          />
                        )
                      }
                    </div>
                    <div className="connection-info">
                      <p>
                        <strong>Name :</strong>{" "}
                        {`${notification?.from?.firstName} ${notification?.from?.lastName}`}
                      </p>
                      <p>
                        <strong>Nickname :</strong>{" "}
                        {`${notification?.from?.nickName}`}
                      </p>
                      <hr />
                      <div className="desc-con-wrapper">
                        <div className="info-con">
                          <p>
                            <strong>Height :</strong>
                            {`${notification?.from?.height.feet}' ${notification?.from?.height.inches}"`}
                          </p>
                        </div>
                        <div className="info-con">
                          <p>
                            <strong>Tongue :</strong>
                            {notification?.from?.tongue}
                          </p>
                          <p>
                            <strong>Address :</strong>
                            {notification?.from?.address}
                          </p>
                        </div>
                        <div className="info-con">
                          <p>
                            <strong>Religion :</strong>
                            {notification?.from?.religion},
                          </p>
                          <p>
                            <strong>Cast :</strong>
                            {notification?.from?.cast}
                          </p>
                        </div>
                        <p>
                          <strong>Education :</strong>
                          {notification?.from?.education
                            ? notification?.from?.education
                            : ""}
                        </p>
                      </div>
                      <div className="desc-con">
                        {/* <p>{connection.desc}</p> */}
                      </div>
                    </div>
                    <div className="connection-status-con">
                      <button
                        className="request-accept-btn"
                        onClick={() => {
                          handleAcceptRequest(notification.id);
                        }}
                      >
                        Accept
                      </button>
                      <button
                        className="reject-accept-btn"
                        onClick={() => {
                          handleRejectRequest(notification.id);
                        }}
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        )}
      </div>
      <ToastContainer />
    </>
  );
};

export default RequestsListing;
