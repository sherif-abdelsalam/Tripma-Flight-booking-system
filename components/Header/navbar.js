import classes from "./header.module.css";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <Image src={logo} alt="logo" priority />
      </Link>

      <nav className={classes.navbar}>
        <div className={classes.list}>
          <li>
            <Link href="/" className={classes.anchor}>
              Flights
            </Link>
          </li>
          <li>
            <Link href="/" className={classes.anchor}>
              Hotels
            </Link>
          </li>
          <li>
            <Link href="/" className={classes.anchor}>
              Packages
            </Link>
          </li>
          <li>
            <Link href="/signin" className={classes.anchor}>
              Sign in
            </Link>
          </li>
        </div>

        <Link href="/signup" className={classes.signUpBtn}>
          Sign up
        </Link>
      </nav>
    </header>
  );
}

{
  /* <nav className={styles.navbar}>
  

  <ul className={styles.links}>
    <li>
      <Link href="/flights">Flights</Link>
    </li>
    <li>
      <Link href="/hotels">Hotels</Link>
    </li>
    <li>
      <Link href="/packages">Packages</Link>
    </li>
    <li>
      <Link href="/signin">Sign in</Link>
    </li>
    <li className={styles.signup_btn}>
      <Link href="/signup">Sign up</Link>
    </li>
  </ul>
</nav>; */
}
