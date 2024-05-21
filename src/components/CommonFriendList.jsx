// FriendList.js
import React from "react";

const FriendList = ({ friends, onSelectFriend }) => {
  return (
    <div className="friend-list">
      <h2>Friends</h2>
      <ul>
        {friends.map((friend) => (
          <li key={friend.id} onClick={() => onSelectFriend(friend.id)}>
            {friend.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
