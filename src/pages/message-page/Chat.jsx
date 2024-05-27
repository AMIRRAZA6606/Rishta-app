import React from "react";
import searchIcon from "../../assets/icons/searchIcon.png";
import archieveIcon from "../../assets/icons/archieveIcon.png";
import messageSeenIcon from "../../assets/icons/messageSeenIcon.png";
import messageDeliverIcon from "../../assets/icons/messageDeliverIcon.png";
import chatUserImg from "../../assets/images/chatUserImg.png";

const contactsList = [
  {
    id: 1,
    userName: "John Doe",
    profileImg: chatUserImg,
    isOnline: true,
    lastMessage: "hi how are you?",
    isTyping: false,
    lastActiveTime: "16:45",
    isPinChat: true,
    messageStatus: "Seen",
  },
  {
    id: 1,
    userName: "Travis Barker",
    profileImg: chatUserImg,
    isOnline: true,
    lastMessage: "hi how are you?",
    isTyping: true,
    lastActiveTime: "16:45",
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
  return (
    <div className="message-main-con">
      <div className="contact-list-con">
        <span>Messages</span>
        <div className="search-con">
          <img src={searchIcon} alt="" />
          <input type="text" placeholder="Search" name="" id="" />
        </div>

        {contactsList?.map((obj) => {
          return (
            <>
              <div className="user-con">
                <div className="user-img">
                  <img src={obj.profileImg} alt="" />
                  {obj.isOnline && <span className="isOnine"></span>}
                </div>
                <div className="user-details-con">
                  <div className="user-name-div">
                    <div className="name">
                      {obj?.isPinChat && <img src={archieveIcon} alt="" />}
                      <p className="">{obj?.userName}</p>
                    </div>
                    <p className="time">{obj?.lastActiveTime}</p>
                  </div>
                  <div className="last-message">
                    {obj?.isTyping ? (
                      <p className="typing">typing...</p>
                    ) : (
                      <>
                        <p>{obj?.lastMessage}</p>
                        {obj?.messageStatus === "delivered" ? (
                          <img src={messageDeliverIcon} alt="" />
                        ) : (
                          <img src={messageSeenIcon} alt="" />
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="chat-section">
        <div className="chat-header">
          <img src={chatUserImg} alt="" />
          <div>
            <p className="name">Travis Barker</p>
            <p className="online">Online</p>
          </div>
        </div>
        <div className="chat-con">
          <div className="chat">
            {chatMessages.map((msg) => {
              return (
                <>
                  <div
                    className="chat-message"
                    style={{
                      alignSelf: `${msg?.sender ? "flex-end" : "flex-start"}`,
                    }}
                  >
                    {msg?.receiver && <img src={msg?.profileImg} alt="" />}
                    <div className="message">
                      <p>{msg?.message}</p>
                      <div
                        className="message-time"
                        style={{
                          justifyContent: `${
                            msg?.sender ? "flex-end" : "flex-start"
                          }`,
                        }}
                      >
                        {msg?.sender && (
                          <>
                            {msg?.isSeen && (
                              <img src={messageSeenIcon} alt="" />
                            )}
                            {msg?.isDelivered && (
                              <img src={messageDeliverIcon} alt="" />
                            )}
                          </>
                        )}
                        <p>{msg?.time}</p>
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
              placeholder="Type your message here..."
            />
            <button className="send-message-btn">Send message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
