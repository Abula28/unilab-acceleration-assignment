import React, { useEffect, useState } from "react";
import dummyData from "../../../assets/data/dummy_data.json";
import classes from "./Table.module.scss";

export const Table = ({ active }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 7;
  const lastIndex = currentPage * itemPerPage;
  const firstIndex = lastIndex - itemPerPage;
  const npage = Math.ceil(dummyData.length / itemPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  const [statusActive, setStatusActive] = useState(false);
  const [statusInactive, setStatusInactive] = useState(false);
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  const [statusDrop, setStatusDrop] = useState(false);
  const [genderDrop, setGenderDrop] = useState(false);

  // Define the filterData function to filter the data based on your criteria
  const filterData = () => {
    let filteredData = dummyData;

    // Apply statusActive filter
    if (statusActive) {
      filteredData = filteredData.filter(
        (e) => e.status.toLowerCase() === "active"
      );
    }

    // Apply statusInactive filter
    if (statusInactive) {
      filteredData = filteredData.filter(
        (e) => e.status.toLowerCase() === "inactive"
      );
    }

    // Apply gender filter
    if (male) {
      filteredData = filteredData.filter(
        (e) => e.gender.toLowerCase() === "male"
      );
    } else if (female) {
      filteredData = filteredData.filter(
        (e) => e.gender.toLowerCase() === "female"
      );
    }

    return filteredData;
  };

  const records = filterData().slice(firstIndex, lastIndex);

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
    <>
      {active && (
        <div className={classes.filters}>
          <div className={classes.filtersContent}>
            <div className={classes["dropDown"]}>
              <div
                className={classes["studentsStatus"]}
                style={{ height: statusDrop ? "auto" : "20px" }}
              >
                <button onClick={() => setStatusDrop(!statusDrop)}>
                  <img
                    src={"/images/formPage/chevron-right.png"}
                    alt="chevron-right"
                    style={{
                      transform: statusDrop ? "rotate(90deg)" : "rotate(0deg)",
                    }}
                  />
                  სტუდენტის სტატუსი
                </button>
                <div className={classes.checkboxes}>
                  <label>
                    <input
                      type="checkbox"
                      onChange={() => setStatusActive(!statusActive)}
                    />{" "}
                    ACTIVE
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      onChange={() => setStatusInactive(!statusInactive)}
                    />{" "}
                    INACTIVE
                  </label>
                </div>
              </div>
              <div
                className={classes["studentsStatus"]}
                style={{ height: genderDrop ? "auto" : "20px" }}
              >
                <button onClick={() => setGenderDrop(!genderDrop)}>
                  <img
                    src={"/images/formPage/chevron-right.png"}
                    alt="chevron-right"
                    style={{
                      transform: genderDrop ? "rotate(90deg)" : "rotate(0deg)",
                    }}
                  />
                  სქესი
                </button>
                <div className={classes.checkboxes}>
                  <label>
                    <input type="checkbox" onChange={() => setMale(!male)} />{" "}
                    MALE
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      onChange={() => setFemale(!female)}
                    />{" "}
                    FEMALE
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
            <tr
              key={i}
              style={{ background: i % 2 === 0 ? "#F6F6F6" : "#fff" }}
            >
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
