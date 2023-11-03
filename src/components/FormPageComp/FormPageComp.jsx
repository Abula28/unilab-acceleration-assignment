import React, { useEffect, useState } from "react";
import classes from "./FormPageComp.module.scss";
import Filters from "./Filters/Filters";
import { Table } from "./Table/Table";

export const FormPageComp = () => {
  const [active, setActive] = useState(false);

  return (
    <section className={classes.pageSection}>
      <div className={classes.formContent}>
        <Filters active={active} setActive={setActive} />
        <Table />
      </div>
    </section>
  );
};
