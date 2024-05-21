// ChatWindow.js
import React from "react";

const ChatWindow = ({ messages }) => {
  return (
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
  );
};

export default ChatWindow;
