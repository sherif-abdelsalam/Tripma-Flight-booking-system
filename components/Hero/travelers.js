import { useMemo, useState } from "react";
import PersonIcon from "../Icons/person";
import "./travelers.css";
import { Minus, Plus } from "../Icons/plus-minus-icons";

export default function Travellers() {
  const [optionsVisible, setOptionsVisible] = useState(false);
  const [adultsNumber, setAdultsNumber] = useState(1);
  const [minorsNumber, setMinorsNumber] = useState(0);

  const travelers = useMemo(
    () => adultsNumber + minorsNumber,
    [adultsNumber, minorsNumber]
  );

  console.log(travelers);

  const toggleOptions = () => {
    setOptionsVisible(!optionsVisible);
  };

  const addAddult = () => {
    setAdultsNumber(adultsNumber + 1);
  };
  const removeAddult = () => {
    if (adultsNumber <= 1) return;
    setAdultsNumber(adultsNumber - 1);
  };

  const addMinor = () => {
    setMinorsNumber(minorsNumber + 1);
  };
  const removeMinor = () => {
    if (minorsNumber <= 1) return;
    setMinorsNumber(minorsNumber - 1);
  };

  return (
    <div className="travelers-num">
      <div>
        <PersonIcon />
      </div>

      <div>
        <button type="button" className="traveller-btn" onClick={toggleOptions}>
          Adults: {adultsNumber} - Minors: {minorsNumber}
        </button>

        {optionsVisible && (
          <div className="traveler-adults-minors">
            <div className="traveler-adder">
              <p className="adults-minors">Adults: </p>
              <div className="adults">
                <div onClick={removeAddult} className="adder-removal">
                  <Minus />
                </div>
                <span>{adultsNumber}</span>
                <div onClick={addAddult} className="adder-removal">
                  <Plus />
                </div>
              </div>
            </div>

            <div className="traveler-adder">
              <p className="adults-minors">Minors: </p>
              <div className="adults">
                <div onClick={removeMinor} className="adder-removal">
                  <Minus />
                </div>
                <span>{minorsNumber}</span>
                <div onClick={addMinor} className="adder-removal">
                  <Plus />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
