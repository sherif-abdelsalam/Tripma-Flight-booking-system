import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DateIcon from "../Icons/date";

function Calender() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDateChange = (dates) => {
    const [start, end] = dates; // Destructure start and end dates
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <>
      <DateIcon />

      <DatePicker
        selected={(startDate, endDate)}
        onChange={handleDateChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange // Enables range selection
        monthsShown={2} // Display two months side by side
        placeholderText="Departure - Return" // Placeholder when no dates are selected
      />
      <div className="divider"></div>
    </>
  );
}

export default Calender;
