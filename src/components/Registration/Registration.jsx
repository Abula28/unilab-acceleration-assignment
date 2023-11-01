import React from "react";
import classes from "./Registration.module.scss";
import { CardContainer } from "./CardContainer/CardContainer";

export const Registration = () => {
  return (
    <section className={classes.regSection}>
      <CardContainer />
    </section>
  );
};
