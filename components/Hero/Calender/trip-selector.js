import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./calender.css";
import "./style.css";
import CalendarHeader from "./calenderHeader";
const TripSelector = ({
  tripType,
  setTripType,
  setShowPicker,
  departureDate,
  setDepartureDate,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {
  const handleChangeDepartureDate = (date) => {
    setDepartureDate(date);
  };
  const handleChangeStartDate = (date) => {
    setStartDate(date);
  };
  const handleChangeEndDate = (date) => {
    setEndDate(date);
  };
  const handelSetShowPicker = () => {
    if (tripType === "one-way" && departureDate) setShowPicker(false);
    if (tripType === "round-trip" && startDate && endDate) setShowPicker(false);
  };

  return (
    <div className="calender">
      <div className="calender-header-container">
        <div div className="radio-selectors">
          <div>
            <label className="trip-type-label">
              <input
                type="radio"
                value="round-trip"
                checked={tripType === "round-trip"}
                onChange={() => setTripType("round-trip")}
              />
              Round trip
            </label>
          </div>

          <div>
            <label className="trip-type-label">
              <input
                type="radio"
                value="one-way"
                checked={tripType === "one-way"}
                onChange={() => setTripType("one-way")}
              />
              One way
            </label>
          </div>
        </div>

        <button onClick={handelSetShowPicker} className="done-btn">
          Done
        </button>
      </div>

      <hr />
      <div className="one-way-round-trip-container">
        {tripType === "one-way" && (
          <DatePicker
            selected={departureDate}
            onChange={handleChangeDepartureDate}
            dateFormat={"MMM dd"}
            minDate={new Date()}
            inline
            renderCustomHeader={(props) => <CalendarHeader {...props} />}
            formatWeekDay={(nameOfDay) => nameOfDay.slice(0, 1)}
          />
        )}
        {tripType === "round-trip" && (
          <div className="picker-container">
            <DatePicker
              selected={startDate}
              onChange={handleChangeStartDate}
              dateFormat={"MMM dd"}
              inline
              renderCustomHeader={(props) => <CalendarHeader {...props} />}
              formatWeekDay={(nameOfDay) => nameOfDay.slice(0, 1)}
            />
            <div className="space-margin"></div>
            <DatePicker
              selected={endDate}
              onChange={handleChangeEndDate}
              dateFormat={"MMM dd"}
              inline
              renderCustomHeader={(props) => <CalendarHeader {...props} />}
              formatWeekDay={(nameOfDay) => nameOfDay.slice(0, 1)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TripSelector;
