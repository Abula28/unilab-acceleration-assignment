import React, { useState } from "react";
import classes from "./Header.module.scss";
import { Link, useLocation } from "react-router-dom";
import { Logout } from "./Logout/Logout";

export const Header = () => {
  const location = useLocation();
  const username = localStorage.getItem("username");
  const profilePicture = localStorage.getItem("imageValue");
  const [active, setActive] = useState(false);
  console.log(profilePicture);
  if (location.pathname !== "/form-page") {
    return;
  }
  return (
    <header className={classes.header}>
      <nav className={classes.navbar}>
        <h1 className={classes.logo}>From</h1>
        <div className={classes.links}>
          <Link to={"/api-page"}>API</Link>
          <div onClick={() => setActive(!active)} className={classes.profile}>
            <p>{username}</p>
            <div className={classes.profilePicture}>
              <img src={profilePicture} alt="profile-picture" />
            </div>
            {active && <Logout />}
          </div>
        </div>
      </nav>
    </header>
  );
};
