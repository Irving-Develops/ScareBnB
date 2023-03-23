import React, { useState } from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker } from "react-dates";
import moment from "moment";

export default function ReactDates({startDate, setStartDate, endDate, setEndDate}) {
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);
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
        }}
        startDatePlaceholderText="Check In"
        endDatePlaceholderText="Check Out"
        focusedInput={focusedInput}
        onFocusChange={focusedInput => setFocusedInput(focusedInput)}
        focused={true} // Always display the calendar
        displayFormat={() => "MM/DD/YYYY"}
        numberOfMonths={1}
        keepOpenOnDateSelect={true}
        showClearDates={true}
        small={true}
        readOnly={false}
        noBorder={false}
        block={false}
        minimumNights={0}
        isOutsideRange={() => false}
        anchorDirection="left"
        hideKeyboardShortcutsPanel={true}
        show={true}
        // appendToBody={true}
        // isRTL={true}
        // withFullScreenPortal={true}
        // withPortal={true}
      />
    </div>
  );
}