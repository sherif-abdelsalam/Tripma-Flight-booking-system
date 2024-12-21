import LeftArrow from "@/components/Icons/left-arrow";
import RightArrow from "@/components/Icons/right-arrow";
import React from "react";
const CalendarHeader = ({ date, decreaseMonth, increaseMonth }) => {
  return (
    <>
      <div className="calender_header">
        <button onClick={decreaseMonth} className="calendar_arrow_left">
          <LeftArrow />
        </button>
        <button onClick={increaseMonth} className="calendar_arrow-right">
          <RightArrow />
        </button>

        <span className="calendar_month">
          {date.toLocaleString("default", { month: "long" })} &nbsp;
          {date.getFullYear()}
        </span>
      </div>
    </>
  );
};

export default CalendarHeader;
