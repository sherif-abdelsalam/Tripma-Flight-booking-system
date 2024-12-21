import DateIcon from "../../Icons/date";
import "./calender.css";
import "./style.css";

function Calender({
  tripType,
  showPicker,
  setShowPicker,
  departureDate,
  startDate,
  endDate,
  children,
}) {
  const formatDate = (date) =>
    date
      ? date.toLocaleDateString("en-US", { month: "short", day: "2-digit" })
      : null;

  const formattedDepDate = formatDate(departureDate);
  const formattedStartDate = formatDate(startDate);
  const formattedEndDate = formatDate(endDate);

  const inputValue =
    tripType === "one-way"
      ? formattedDepDate || "Departure"
      : formattedStartDate && formattedEndDate
      ? `${formattedStartDate} - ${formattedEndDate}`
      : "Departure - Return";

  return (
    <div className="calendar-container">
      <div className="calender-input">
        <div>
          <DateIcon />
        </div>
        <div className="input-group">
          <input
            type="text"
            onClick={() => setShowPicker(true)}
            value={inputValue}
            readOnly
          />
        </div>
      </div>
      <div className="divider"></div>
      {showPicker && children}
    </div>
  );
}

export default Calender;
