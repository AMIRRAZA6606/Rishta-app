import React, { useEffect, useState } from "react";
import searchIcon from "../../assets/icons/searchIcon.png";
import archieveIcon from "../../assets/icons/archieveIcon.png";
import messageSeenIcon from "../../assets/icons/messageSeenIcon.png";
import messageDeliverIcon from "../../assets/icons/messageDeliverIcon.png";
import chatUserImg from "../../assets/images/chatUserImg.png";
import { toast, ToastContainer } from "react-toastify";
import { getMyFriends } from "../../services/friends";
import { getMessages, sendMessage } from "../../services/chat";

const contactsList = [
  {
    id: 1,
    userName: "John Doe",
    firstName: "John",
    lastName: "Doe",
    image: "https://hamariweb.com/profiles/images/profile/8045-624.jpg",
    isOnline: true,
    lastMessage: "hi how are you?",
    isTyping: false,
    lastActive: "2024-05-27T11:07:30.948+00:00",
    isPinChat: true,
    messageStatus: "Seen",
  },
  {
    id: 1,
    userName: "Travis Barker",
    firstName: "Amir",
    lastName: "Raza",
    image: "https://hamariweb.com/profiles/images/profile/8045-624.jpg",
    isOnline: true,
    lastMessage: "hi how are you?",
    isTyping: true,
    lastActive: "2024-05-27T11:07:30.948+00:00",
    isPinChat: false,
    messageStatus: "delivered",
  },
];

const chatMessages = [
  {
    id: 1,
    profileImg: chatUserImg,
    message: "Hello! Have you seen my backpack anywhere in office?",
    time: "16:45",
    isSeen: true,
    isDelivered: true,
    sender: false,
    receiver: true,
  },
  {
    id: 2,
    profileImg: chatUserImg,
    message: "hi how are you?",
    time: "16:45",
    isSeen: true,
    isDelivered: true,
    sender: true,
    receiver: false,
  },
  {
    id: 1,
    profileImg: chatUserImg,
    message: "Thank you for work, see you!",
    time: "16:45",
    isSeen: true,
    isDelivered: true,
    sender: false,
    receiver: true,
  },
  {
    id: 2,
    profileImg: chatUserImg,
    message: "Hi, yes, David have found it, ask our concierge 👀 ",
    time: "16:45",
    isSeen: true,
    isDelivered: true,
    sender: true,
    receiver: false,
  },
];

const Message = () => {
  const [loggedInUserId, setLoggedInUserId] = useState(
    localStorage.getItem("userId")
  );
  const [intervalId, setIntervalId] = useState(null);
  const [friends, setFriends] = useState([]);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [selectedFriend, setSelectedFriend] = useState(null);

  const fetchAllFriends = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const response = await getMyFriends(userId);
      setFriends(response?.data?.data?.data);

      if (!response?.data?.data?.data?.length) {
        toast.info("Make some friends!");
      } else {
        // set first friend as initial friend as selected value
        setSelectedFriend(response?.data?.data?.data[0]);
        toast.success("Chat loaded successfully!");
      }
    } catch (error) {
      toast.error("Something went wrong please try again");
    }
  };

  useEffect(() => {
    console.log("useEffect running");
    fetchAllFriends();

    const id = setInterval(() => {
      getChatMessages();
    }, 1000);
    setIntervalId(id);
  }, []);

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  });

  const formatLastActiveTime = (dateString) => {
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", options);
  };

  const getChatMessages = async () => {
    const response = await getMessages(selectedFriend._id);
    setMessages(response?.data?.data);
  };

  const handleFriendClick = async (friendId) => {
    const selectedFriend = friends.find((friend) => friend._id === friendId);
    setSelectedFriend(selectedFriend);

    try {
      await getChatMessages();

      // set auto fetch script after each second
      // setInterval(() => {
      //   getChatMessages();
      // }, 1000);
    } catch (error) {
      toast.error("Error while getting messages, please try again later");
    }
  };

  const handleSendMessage = async () => {
    try {
      const loggedInUserId = localStorage.getItem("userId");
      const data = {
        from: loggedInUserId,
        to: selectedFriend._id,
        message: message,
      };

      // send message
      await sendMessage(data);
      setMessage("");
      await getChatMessages();
    } catch (error) {
      toast.error("Error while sending message, please try again later");
    }
    //
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  return (
    <div className="message-main-con">
      <div className="contact-list-con">
        <span>Messages</span>
        <div className="search-con">
          <img src={searchIcon} alt="" />
          <input type="text" placeholder="Search" name="" id="" />
        </div>

        <h2>Friends</h2>
        {friends?.map((obj) => {
          return (
            <>
              <div
                className="user-con"
                onClick={() => {
                  handleFriendClick(obj._id);
                }}
              >
                <div className="user-img">
                  <img
                    className="chat-image"
                    src={obj.image ?? chatUserImg}
                    alt=""
                  />
                  {/* {obj.isOnline && <span className="isOnine"></span>} */}
                </div>
                <div className="user-details-con">
                  <div className="user-name-div">
                    <div className="name">
                      {obj?.isPinChat && <img src={archieveIcon} alt="" />}
                      <p className="">{`${obj?.firstName} ${obj?.lastName}`}</p>
                    </div>
                    <p className="time">
                      {formatLastActiveTime(obj?.lastActive)}
                    </p>
                  </div>
                  {/* <div className="last-message">
                    {obj?.isTyping ? (
                      <p className="typing">typing...</p>
                    ) : (
                      <>
                        <p>...</p>
                        {obj?.messageStatus === "delivered" ? (
                          <img src={messageDeliverIcon} alt="" />
                        ) : (
                          <img src={messageSeenIcon} alt="" />
                        )}
                      </>
                    )}
                  </div> */}
                </div>
              </div>
              <hr />
            </>
          );
        })}
      </div>
      {selectedFriend ? (
        <div className="chat-section">
          <div className="chat-header">
            <img src={chatUserImg} alt="" />
            <div>
              <p className="name">{`${selectedFriend.firstName} ${selectedFriend.lastName}`}</p>
              <p className="online">
                Last active{" "}
                {`${formatLastActiveTime(selectedFriend.lastActive)}`}
              </p>
            </div>
          </div>
          <div className="chat-con">
            <div className="chat">
              {messages.map((msg) => {
                return (
                  <>
                    <div
                      className="chat-message"
                      style={{
                        alignSelf: `${
                          msg?.from === loggedInUserId
                            ? "flex-end"
                            : "flex-start"
                        }`,
                      }}
                    >
                      {msg?.to && <img src={selectedFriend.image} alt="" />}
                      <div className="message">
                        <p>{msg?.message}</p>
                        <div
                          className="message-time"
                          style={{
                            justifyContent: `${
                              msg?.from === loggedInUserId
                                ? "flex-end"
                                : "flex-start"
                            }`,
                          }}
                        >
                          {msg?.from === loggedInUserId && (
                            <>
                              {msg?.isSeen && (
                                <img src={messageSeenIcon} alt="" />
                              )}
                              {msg?.isDelivered && (
                                <img src={messageDeliverIcon} alt="" />
                              )}
                            </>
                          )}
                          <p>{formatLastActiveTime(msg.createdAt)}</p>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="message-input-con">
              <input
                type="text"
                className="message-input"
                value={message}
                placeholder="Type your message here..."
                onChange={handleMessageChange}
              />
              <button
                onClick={() => handleSendMessage()}
                className="send-message-btn"
              >
                Send message
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>Select friend from friend list</p>
      )}
      <ToastContainer />
    </div>
  );
};

export default Message;
