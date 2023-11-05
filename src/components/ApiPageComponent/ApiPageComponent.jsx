import React, { useEffect, useState } from "react";
import classes from "./ApiPageComponent.module.scss";
import { Card } from "./Card/Card";
import { useLocation } from "react-router-dom";
export const ApiPageComponent = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 10;
  const lastIndex = currentPage * itemPerPage;
  const firstIndex = lastIndex - itemPerPage;
  const npage = Math.ceil(data.length / itemPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  const location = useLocation();

  const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await res.json();
    setData(json);
    console.log(json);
  };

  useEffect(() => {
    getData();
    console.log(location.pathname);
  }, []);

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < npage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const changePage = (id) => {
    setCurrentPage(id);
  };
  return (
    <section className={classes.section}>
      <div className={classes.cardsContent}>
        {data.slice(firstIndex, lastIndex).map((e) => (
          <Card key={e.id} title={e.title} body={e.body} />
        ))}
      </div>
      <div className={classes.paginationBtns}>
        <div className={classes.pagination}>
          <button onClick={prevPage}>{"<<"}</button>
          {numbers.map((e, i) => (
            <button
              className={classes[currentPage === e ? "active" : ""]}
              key={i}
              onClick={() => changePage(e)}
            >
              {e}
            </button>
          ))}
          <button onClick={nextPage}>{">>"}</button>
        </div>
      </div>
    </section>
  );
};
