import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DateInput({ changeDate, date }) {
  return (
    <div className="date">
      Select a Date:
      <br />
      <DatePicker
        selected={date}
        onChange={changeDate}
        maxDate={new Date()}
        className="datepicker"
      />
    </div>
  );
}

export default DateInput;