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

    const [error, setError] = useState(null);


  const isOutsideRange = (day) => day.isBefore(moment(), 'day');

  console.log(startDate, "===asdfasdf")

    const handleClose = () => {
    if (startDate && endDate) {
      const days = endDate.diff(startDate, 'days');
      if (days > 30) {
        setError('Booking duration cannot exceed 30 days.');
      } else {
        setError(null);
      }
    }
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
         {error && <div className="error">{error}</div>}
      <DateRangePicker
      startDate={startDate}
        startDateId="start_date"
        endDate={endDate}
        endDateId="end_date"
        onDatesChange={({ startDate, endDate }) => {
          setStartDate(startDate);
          setEndDate(endDate);
        }}
        onClose={handleClose}
        // onDatesChange={handleDatesChange}
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
        minimumNights={1}
        anchorDirection="left"
        hideKeyboardShortcutsPanel={true}
        show={true}
        isOutsideRange={isOutsideRange}
        error={error}

        // appendToBody={true}
        // isRTL={true}
        // withFullScreenPortal={true}
        // withPortal={true}
      />
    </div>
  );
}