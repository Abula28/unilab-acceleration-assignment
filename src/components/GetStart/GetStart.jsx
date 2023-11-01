import React from "react";
import classes from "./GetStart.module.scss";
import { Container } from "./Container/Container";

export const GetStart = () => {
  return (
    <section className={classes.startSection}>
      <img className={classes.bgImage} src={"/images/start/stars.png"} />
      <Container />
    </section>
  );
};
