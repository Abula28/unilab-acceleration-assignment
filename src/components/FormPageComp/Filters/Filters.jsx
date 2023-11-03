import React from "react";
import classes from "./Filters.module.scss";

const Filters = ({ active, setActive }) => {
  return (
    <div className={classes.filters}>
      <button onClick={() => setActive(!active)}>
        <img src={"/images/formPage/filter.png"} alt="filter-image" />
        Filter
      </button>

      <label className={classes.search}>
        <img src={"/images/formPage/search.png"} alt="search" />
        <input type="text" />
      </label>
    </div>
  );
};

export default Filters;
