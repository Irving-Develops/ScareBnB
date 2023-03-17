import React, { useState } from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker, SingleDatePicker } from "react-dates";
import moment from "moment";

const ReactDates = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);
  const [date, setDate] = useState(null);
  const [focused, setFocused] = useState(null);

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <DateRangePicker
        startDate={startDate}
        startDateId="start_date"
        endDate={endDate}
        endDateId="end_date"
        onDatesChange={({ startDate, endDate }) => {
          setStartDate(startDate);
          setEndDate(endDate);
          setFocusedInput(null);
        }}
        focusedInput={focusedInput}
        onFocusChange={focusedInput => setFocusedInput(focusedInput)}
        focused={true} // Always display the calendar
      />
      {/* <SingleDatePicker
        date={date}
        onDateChange={date => setDate(date)}
        focused={focused}
        onFocusChange={({ focused }) => setFocused(focused)}
        id="date"
        focused={true} // Always display the calendar
      /> */}
    </div>
  );
};

export default ReactDates;