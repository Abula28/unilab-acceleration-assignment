import React from "react";
import classes from "./Logout.module.scss";
import { useNavigate } from "react-router-dom";
export const Logout = () => {
  const image = localStorage.getItem("imageValue");
  const username = localStorage.getItem("username");
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div className={classes.logoutCard}>
      <div className={classes.logoutContent}>
        <h2>Manage Your Account</h2>
        <div className={classes.imageDiv}>
          <img src={image} alt="profile-image" />
        </div>
        <h3>{username}</h3>
        <button onClick={logOut}>Log Out</button>
      </div>
    </div>
  );
};
