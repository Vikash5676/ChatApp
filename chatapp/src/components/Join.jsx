import React, { useState } from "react";
import "./Join.css";
import { Link } from "react-router-dom";

let User

const Join = () => {
  const [user, setUser] = useState("");

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  const handleClick = () => {
    User = document.getElementById("joininput").value;
    document.getElementById("joininput").value = "";
  };

  const handleLink = (event) => !user?event.preventDefault() : null;
  
  return (
    <div className="join-page">
      <div className="join-container">
        <img
          src="https://i.pinimg.com/originals/48/eb/07/48eb070754b6acbfcad8817fdb912f39.jpg"
          alt="Logo"
        />
        <h1>Chat Meow</h1>
        <input
          type="text"
          id="joininput"
          placeholder="Enter username"
          onChange={handleChange}
        />
        <Link onClick={handleLink} to="/chat" >
          <button className="joinbutton" onClick={handleClick}>
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
export { User };
