import React, { useEffect, useState } from "react";
import dummyData from "../../../assets/data/dummy_data.json";
import classes from "./Table.module.scss";

export const Table = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 7;
  const lastIndex = currentPage * itemPerPage;
  const firstIndex = lastIndex - itemPerPage;
  const records = dummyData.slice(firstIndex, lastIndex);
  const npage = Math.ceil(dummyData.length / itemPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const prevPage = () => {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
    if (currentPage <= 1) {
      setCurrentPage(1);
    }
  };

  const nextPage = () => {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
    if (currentPage >= npage) {
      setCurrentPage(npage);
    }
  };

  const changePage = (id) => {
    setCurrentPage(id);
  };

  return (
    <>
      <table className={classes.table}>
        <thead className={classes.thead}>
          <tr className={classes.tr}>
            <td>სტუდენტის სახელი გვარი</td>
            <td>სტატუსი</td>
            <td>სქესი</td>
            <td>ქულები</td>
            <td>პირადი ნომერი</td>
            <td>კურსი</td>
            <td>სემესტრი</td>
            <td>ლექციები</td>
            <td>გადასახადი</td>
          </tr>
        </thead>

        <tbody className={classes.tbody}>
          {records.map((e, i) => (
            <tr key={i} style={{ background: i % 2 == 0 ? "#F6F6F6" : "#fff" }}>
              <td>{e.name}</td>
              <td>{e.status}</td>
              <td>{e.gender}</td>
              <td>{e.points}</td>
              <td>{e.personalID}</td>
              <td>{e.course}</td>
              <td>{e.semester}</td>
              <td>{e.lectures}</td>
              <td>{e.fee}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
    </>
  );
};
