import classes from "./header.module.css";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import HeaderUp from "./headerup";
import CookiesNotification from "./cookiesNotification";
export default function Header() {
  return (
    <>
      <HeaderUp />
      <header className={classes.header}>
        <Image src={logo} alt="logo" priority />
        <nav className={classes.navbar}>
          <ul className={classes.list}>
            <li>
              <a className={classes.anchor} href="#">
                Flights
              </a>
            </li>
            <li>
              <a className={classes.anchor} href="#">
                Hotels
              </a>
            </li>
            <li>
              <a className={classes.anchor} href="#">
                Packages
              </a>
            </li>
            <li>
              <a className={classes.anchor} href="#">
                Sign in
              </a>
            </li>
          </ul>

          <button className={classes.signUpBtn}>Sign up</button>
        </nav>
      </header>
      <CookiesNotification />
    </>
  );
}
