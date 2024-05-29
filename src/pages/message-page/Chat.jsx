import React, { useEffect, useRef, useState } from "react";
import searchIcon from "../../assets/icons/searchIcon.png";
import archieveIcon from "../../assets/icons/archieveIcon.png";
import messageSeenIcon from "../../assets/icons/messageSeenIcon.png";
import messageDeliverIcon from "../../assets/icons/messageDeliverIcon.png";
import chatUserImg from "../../assets/images/chatUserImg.png";
import { toast, ToastContainer } from "react-toastify";
import { getMyFriends } from "../../services/friends";
import { getMessages, sendMessage } from "../../services/chat";
import { IMAGE_BASE_URL } from "../../config/systemConfigs";
import "./chat.css";

const Message = () => {
  const [loggedInUserId, setLoggedInUserId] = useState(
    localStorage.getItem("userId")
  );
  const [intervalId, setIntervalId] = useState(null);
  const [searchKey, setSearchKey] = useState("");
  const [friends, setFriends] = useState([]);
  const [filteredFriends, setFilteredFriends] = useState(friends);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [selectedFriend, setSelectedFriend] = useState(null);
  const chatEndRef = useRef(null);

  const fetchAllFriends = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const response = await getMyFriends(userId);
      setFriends(response?.data?.data?.data);

      if (!response?.data?.data?.data?.length) {
        toast.info("Make some friends!");
      } else {
        // Set first friend as initial friend as selected value
        setSelectedFriend(response?.data?.data?.data[0]);
        toast.success("Chat loaded successfully!");
      }
    } catch (error) {
      toast.error("Something went wrong please try again");
    }
  };

  useEffect(() => {
    fetchAllFriends();
  }, []);

  useEffect(() => {
    if (selectedFriend) {
      const fetchMessages = async () => {
        try {
          const response = await getMessages(
            selectedFriend._id,
            loggedInUserId
          );
          setMessages(response?.data?.data);
        } catch (error) {
          toast.error("Error while getting messages, please try again later");
        }
      };

      fetchMessages();

      // Set up polling to fetch messages every 5 seconds
      const id = setInterval(fetchMessages, 2000);
      setIntervalId(id);

      // Cleanup interval on component unmount or when selectedFriend changes
      return () => clearInterval(id);
    }
  }, [selectedFriend]);

  useEffect(() => {
    if (searchKey === "") {
      setFilteredFriends(friends);
    } else {
      const lowerCaseSearchKey = searchKey.toLowerCase();
      const filtered = friends.filter((friend) => {
        const fullName = `${friend.firstName} ${friend.lastName}`.toLowerCase();
        return fullName.includes(lowerCaseSearchKey);
      });
      setFilteredFriends(filtered);
    }
  }, [searchKey, friends]);

  const handleFriendClick = (friendId) => {
    const selected = friends.find((friend) => friend._id === friendId);
    setSelectedFriend(selected);
  };

  const handleSendMessage = async () => {
    try {
      const data = {
        from: loggedInUserId,
        to: selectedFriend._id,
        message: message,
      };

      // Send message
      await sendMessage(data);
      setMessage("");
      await getMessages(selectedFriend._id, loggedInUserId); // Fetch updated messages
    } catch (error) {
      toast.error("Error while sending message, please try again later");
    }
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const formatLastActiveTime = (dateString) => {
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", options);
  };

  const handleSearchChange = (e) => {
    setSearchKey(e.target.value);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="message-main-con">
      <div className="contact-list-con">
        <span>Chat</span>
        <div className="search-con">
          <img src={searchIcon} alt="" />
          <input
            type="text"
            onChange={handleSearchChange}
            placeholder="Search"
          />
        </div>

        <h2>Friends</h2>
        <div className="friends-list-con">
          {filteredFriends.map((obj) => (
            <div
              key={obj._id}
              className="user-con"
              onClick={() => handleFriendClick(obj._id)}
            >
              <div className="user-img">
                <img
                  className="chat-image"
                  src={`${IMAGE_BASE_URL}/${obj.image}`}
                  alt=""
                />
              </div>
              <div className="user-details-con">
                <div className="user-name-div">
                  <div className="name">
                    {obj.isPinChat && <img src={archieveIcon} alt="" />}
                    <p>{`${obj.firstName} ${obj.lastName}`}</p>
                  </div>
                  <p className="time">{formatLastActiveTime(obj.lastActive)}</p>
                </div>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
      {selectedFriend ? (
        <div className="chat-section">
          <div className="chat-header">
            <img src={`${IMAGE_BASE_URL}/${selectedFriend.image}`} alt="" />
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
              {messages.map((msg) => (
                <div
                  key={msg._id}
                  className="chat-message"
                  style={{
                    alignSelf:
                      msg.from === loggedInUserId ? "flex-end" : "flex-start",
                  }}
                >
                  <div className="message">
                    <p>{msg.message}</p>
                    <div
                      className="message-time"
                      style={{
                        justifyContent:
                          msg.from === loggedInUserId
                            ? "flex-end"
                            : "flex-start",
                      }}
                    >
                      {msg.from === loggedInUserId && (
                        <>
                          {msg.isSeen && <img src={messageSeenIcon} alt="" />}
                          {msg.isDelivered && (
                            <img src={messageDeliverIcon} alt="" />
                          )}
                        </>
                      )}
                      <p>{formatLastActiveTime(msg.createdAt)}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
            <div className="message-input-con">
              <input
                type="text"
                className="message-input"
                value={message}
                placeholder="Type your message here..."
                onChange={handleMessageChange}
                autoFocus
              />
              <button onClick={handleSendMessage} className="send-message-btn">
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
