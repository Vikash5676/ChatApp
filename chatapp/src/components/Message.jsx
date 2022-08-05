import React from "react";
import "./Message.css";

const Message = ({ user, message, classs }) => {
    console.log(user)
  if (user) {
    return (
      <div className={`message-box ${classs}`}>
        {`${user}: ${message}`}</div>
    );
  } else {
    return <div className={`message-box ${classs}`}>{`You: ${message}`}</div>;
  }
};

export default Message;
