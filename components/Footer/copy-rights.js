import Facebook from "../Icons/facebook";
import Instegram from "../Icons/instegram";
import Twitter from "../Icons/twitter";

export default function CopyRights() {
  return (
    <div className="copy-right">
      <div className="social-media-icons">
        <Twitter />
        <Instegram />
        <Facebook />
      </div>
      <div className="copy-right-text">
        <p>&copy; 2020 Tripma incorporated</p>
      </div>
    </div>
  );
}
