import { useState } from "react";
import PersonIcon from "../Icons/person";
import "./travelers.css";
export default function Travellers() {
  const [optionsVisible, setOptionsVisible] = useState(false);
  const [travelersNumber, setTravelersNumber] = useState(1);

  const toggleOptions = () => {
    setOptionsVisible(!optionsVisible);
  };
  const addTraveler = () => {
    if (travelersNumber >= 9) return;

    setTravelersNumber(travelersNumber + 1);
  };
  const removeTraveler = () => {
    if (travelersNumber <= 1) return;
    setTravelersNumber(travelersNumber - 1);
  };

  return (
    <div className="travelers-num">
      <div>
        <PersonIcon />
      </div>
      <div>
        <button type="button" className="traveller-btn" onClick={toggleOptions}>
          Number of Travellers
        </button>
        {optionsVisible && (
          <div className="traveler-adder">
            {travelersNumber}
            <button onClick={addTraveler}>+</button>
            <button onClick={removeTraveler}>-</button>
          </div>
        )}
      </div>
      <div className="divider"></div>
    </div>
  );
}
