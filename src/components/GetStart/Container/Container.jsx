import React from "react";
import classes from "./Container.module.scss";
import { Link } from "react-router-dom";

export const Container = () => {
  return (
    <div className={classes.container}>
      <img src={"/images/start/notebook.png"} alt="notebook" />
      <h1>Get Started Today</h1>
      <Link to={"/registration"}>Get Started</Link>
    </div>
  );
};
