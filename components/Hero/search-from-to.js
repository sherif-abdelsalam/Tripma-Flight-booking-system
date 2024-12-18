"use client";
import { useState } from "react";
import "./search.css";
export default function FromTo({ placeHolder, children }) {
  const options = ["SFO", "ATL", "LAX", "STL", "PVG", "MSP", "NRT"];

  const [selectedOption, setSelectedOption] = useState(placeHolder);

  const handelFromWHereOtion = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="from-to">
      <div className="plane-icon">{children}</div>

      <div className="from-to-selector">
        <select
          value={selectedOption || placeHolder}
          onChange={handelFromWHereOtion}
          className="options"
        >
          <option disabled>{placeHolder}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="divider"></div>
    </div>
  );
}
