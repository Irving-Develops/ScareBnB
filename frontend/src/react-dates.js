import React, { useState, useEffect } from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker } from "react-dates";
import moment from "moment";

export default function ReactDates({startDate, setStartDate, endDate, setEndDate}) {

  const [focusedInput, setFocusedInput] = useState(null);
  const [date, setDate] = useState(null);
  const [focused, setFocused] = useState(null);
    const [day1, setDay1] = useState(new Date(endDate))
    const [day2, setDay2] = useState(new Date(startDate))
    const [totalDays, setTotalDays] = useState(null)
    const [errors, setErrors] = useState([])

      useEffect(() => {
        const err = [];
        
        //checking the number of days between two dates
        const days = (day1, day2) => {
            let difference = day1.getTime() - day2.getTime();
            let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
            return TotalDays;
        }

        // let amountOfDays = days(day1, day2);
        // setTotalDays(amountOfDays);
        
        // if(amountOfDays > 28) err.push("Your booking cannot be longer thank 28 days")
        
        
        // const startDateArr = startDate?.split('-')
        // let today = new Date()
        // let year = today.getFullYear();
        // let month = today.getMonth()
        // let day = today.getDate();


        // if(startDateArr[0] < year) err.push("Please enter a valid year")
        // if(startDateArr[0] <= year && startDateArr[1] < month + 1 ) err.push("Please enter a valid month")
        // if(startDateArr[0] <= year && startDateArr[1] <= month + 1 && startDateArr[2] < day) err.push("Please enter a valid day")
        // // if(startDateArr[0] <= year && startDateArr[1] <= month + 1 && startDateArr[2] <= day) err.push("Cannot make a booking on the same day")
        
        // if(startDate > endDate) err.push("Please enter a valid end date");
        // if(startDate < today) err.push("Please enter a valid start date");
        // if(startDate === endDate) err.push("Start date and end date cannot match");

        // console.log(err , "=======++")
        return setErrors(err)
    }, [startDate, endDate, day1, day2])


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