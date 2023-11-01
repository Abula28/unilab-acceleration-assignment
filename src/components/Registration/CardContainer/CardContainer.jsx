import React from "react";
import classes from "./CardContainer.module.scss";
import { Form } from "../Form/Form";
export const CardContainer = () => {
  return (
    <div className={classes.cardContainer}>
      <div className={classes.texts}>
        <h2>Get Started</h2>
        <p>add a photo</p>
      </div>
      <Form />
    </div>
  );
};
