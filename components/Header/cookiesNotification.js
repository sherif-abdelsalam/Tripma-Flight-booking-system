"use client";

import { Close } from "../Icons/close";
import classes from "./cookiesNotification.module.css";
import { useEffect, useState } from "react";

export default function CookiesNotification() {
  const [cookieNotify, setCookieNotify] = useState(false);

  useEffect(() => {
    function showCookieNotify() {
      setTimeout(() => {
        setCookieNotify(true);
      }, 1500);
    }
    showCookieNotify();
  }, []);

  if (!cookieNotify) {
    return null;
  }

  const handleClose = () => {
    setCookieNotify(false);
  };
  return (
    <div className={classes.cookie}>
      <div className={classes.cookieContent}>
        <p className={classes.cookieText}>
          By using our site, you agree to eat our cookies.{" "}
        </p>

        <button className={classes.closeCookie} onClick={handleClose}>
          <Close color={"#605dec"} />
        </button>
      </div>

      <div className={classes.cookieAction}>
        <button className={`${classes.repBtn} ${classes.accept}`}>
          Accept Cookeis
        </button>
        <button className={classes.repBtn}>Go to settings</button>
      </div>
    </div>
  );
}
