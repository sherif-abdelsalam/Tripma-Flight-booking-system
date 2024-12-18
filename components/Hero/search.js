import PlaneIcon from "../Icons/plane";
import FromTo from "./search-from-to";

export default function Search() {
  return (
    <div className="search-bar">
      <FromTo placeHolder="From Where ?">
        <PlaneIcon />
      </FromTo>
      <FromTo placeHolder="To Where ?">
        <PlaneIcon />
      </FromTo>
    </div>
  );
}
