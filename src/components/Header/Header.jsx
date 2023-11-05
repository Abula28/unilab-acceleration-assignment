import React, { useState } from "react";
import classes from "./Header.module.scss";
import { Link, useLocation } from "react-router-dom";
import { Logout } from "./Logout/Logout";

export const Header = () => {
  const location = useLocation();
  const username = localStorage.getItem("username");
  const profilePicture = localStorage.getItem("imageValue");
  const [active, setActive] = useState(false);

  return (
    <>
      {location.pathname === "/form-page" ||
      location.pathname === "/api-page" ? (
        <header className={classes.header}>
          <nav className={classes.navbar}>
            <Link to={""} className={classes.logo}>
              From
            </Link>
            <div className={classes.links}>
              <Link to={"/api-page"}>API</Link>
              <div
                onClick={() => setActive(!active)}
                className={classes.profile}
              >
                <p>{username}</p>
                <div className={classes.profilePicture}>
                  <img src={profilePicture} alt="profile-picture" />
                </div>
                {active && <Logout />}
              </div>
            </div>
          </nav>
        </header>
      ) : null}
    </>
  );
};
