import React, { useState } from "react";
import "./chat.css";

const Chat = () => {
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [messages, setMessages] = useState([
    { fromMe: true, text: "hahah" },
    { fromMe: false, text: "hehehe" },
  ]);

  // Dummy data for friends and messages
  const friends = [
    { id: 1, name: "Friend 1" },
    { id: 2, name: "Friend 2" },
    { id: 3, name: "Friend 3" },
  ];

  const handleSelectFriend = (friendId) => {
    setSelectedFriend(friendId);
    // Fetch messages for the selected friend
    // Example: setMessages(fetchMessagesForFriend(friendId));
  };

  return (
    <div className="chat-container">
      <div className="friend-list">
        <h2>Friends</h2>
        <ul>
          {friends.map((friend) => (
            <li key={friend.id} onClick={() => handleSelectFriend(friend.id)}>
              {friend.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="chat-window">
        <h2>Chat</h2>
        <div className="messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.fromMe ? "sent" : "received"}`}
            >
              {message.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chat;
