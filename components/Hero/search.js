"use client";

import "./search.css";
import { useState } from "react";
import PlaneIcon from "../Icons/plane";
import Calender from "./calender";
import From from "./from";
import To from "./to";
// import Travellers from "./travelers";

export default function Search() {
  const [fromOption, setFromOption] = useState("");
  const [toOption, setToOption] = useState("");
  console.log(fromOption);
  console.log(toOption);

  return (
    <div className="search-bar">
      <From
        fromOption={fromOption}
        setFromOption={setFromOption}
        placeHolder="From Where ?"
      >
        <PlaneIcon />
      </From>

      <To
        toOption={toOption}
        setToOption={setToOption}
        placeHolder="To Where ?"
      >
        <PlaneIcon />
      </To>
      <Calender />
      {/* <Travellers /> */}
    </div>
  );
}
