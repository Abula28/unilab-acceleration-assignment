import React, { useEffect, useState } from "react";
import classes from "./ApiPageComponent.module.scss";
import { Card } from "./Card/Card";
export const ApiPageComponent = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await res.json();
    setData(json);
    console.log(json);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <section className={classes.section}>
      <div className={classes.cardsContent}>
        {data.map((e) => (
          <Card key={e.id} title={e.title} body={e.body} />
        ))}
      </div>
    </section>
  );
};
