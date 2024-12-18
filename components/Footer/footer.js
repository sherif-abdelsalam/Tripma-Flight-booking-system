import Image from "next/image";
import logo from "@/public/images/logo.png";
import Details from "./tripma-details";
import "./footer.css";
import CopyRights from "./copy-rights";
export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="log">
          <Image src={logo} alt="logo" />
        </div>
        <div className="detail">
          <Details />
        </div>
      </div>
      <div className="line"></div>
      <div className="copy-rights">
        <CopyRights />
      </div>
    </footer>
  );
}
