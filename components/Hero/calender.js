import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "./calender.css";
import "react-datepicker/dist/react-datepicker.css";

const DepartureCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);

  const formatDate = (date) =>
    date
      ? date.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })
      : "Departure Time";

  return (
    <div className="calendar-container">
      <button
        className="calendar-toggle"
        onClick={() => setShowCalendar((prev) => !prev)}
      >
        {selectedDate ? formatDate(selectedDate) : "Departure Time"}
      </button>

      {/* DatePicker Component */}
      {showCalendar && (
        <div className="calendar-popup">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => {
              setSelectedDate(date);
              setShowCalendar(false);
            }}
            inline
            calendarClassName="custom-calendar" // Custom calendar styling
            dayClassName={(date) =>
              date.getDay() === 0 || date.getDay() === 6
                ? "highlight-weekend"
                : ""
            } // Highlight weekends
          />
        </div>
      )}
    </div>
  );
};

export default DepartureCalendar;
