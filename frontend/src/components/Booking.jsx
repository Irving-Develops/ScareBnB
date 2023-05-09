import React, {useEffect, useState} from "react";
import { Card, Calendar } from "react-rainbow-components";
import { getBookedDates, tomorrow, nextYear } from "../utils";
const Booking = ({bookings}) => {


  const initialState = { date: tomorrow };
  const [state, setState] = useState(initialState);
  const [bookedDates, setBookedDates] = useState([]); //



  useEffect(() => {
    setBookedDates(getBookedDates(bookings))
  }, [bookings])

  console.log(bookedDates, "bookedDays")
  const calendarContainerStyles = {
    width: "28rem",
    height: "27rem",
  };



  return (
    <div>
      <div className="rainbow-align-content_center rainbow-p-vertical_xx-large rainbow-p-horizontal_medium">
        <Card
          style={calendarContainerStyles}
          className="rainbow-p-around_large"
        >
          <Calendar
            id="calendar-5"
            value={state.date}
            selectionType="range"
            onChange={(value) => setState({ date: value })}
            disabledDays={bookedDates}
            minDate={tomorrow}
            maxDate={nextYear}
          />
        </Card>
      </div>
    </div>
  );
};

export default Booking;
