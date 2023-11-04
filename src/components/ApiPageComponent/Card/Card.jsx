import React from "react";
import classes from "./Card.module.scss";
export const Card = ({ title, body }) => {
  return (
    <div className={classes.card}>
      <div className={classes.texts}>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
};
