"use client";

import classes from "./headerup.module.css";
import { Close } from "../Icons/close";
import { useState } from "react";

export default function HeaderUp() {
  const [isClosed, setIsClosed] = useState(false);
  if (isClosed) {
    return null;
  }

  const handleClose = () => {
    setIsClosed(true);
  };

  return (
    <div className={classes.headerup}>
      <p className={classes.content}>
        Join Tripma today and save up to 20% on your flight using code TRAVEL at
        checkout. Promotion valid for new users only.
      </p>

      <div className={classes.icon}>
        <button className={classes.btn} onClick={handleClose}>
          <Close color={"#fff"} />
        </button>
      </div>
    </div>
  );
}
