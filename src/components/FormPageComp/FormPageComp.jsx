import React, { useState } from "react";
import classes from "./FormPageComp.module.scss";

export const FormPageComp = () => {
  const [active, setActive] = useState(false);
  return (
    <section className={classes.pageSection}>
      <div className={classes.formContent}>
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
      </div>
    </section>
  );
};
