import React, {useEffect, useState, useMemo, useContext} from "react";
import { Calendar } from "react-rainbow-components";
import { tomorrow, nextYear} from "../../utils";
import { useSelector } from "react-redux";
import { getBookedDates } from "../../utils";
import { moment } from "../../utils";
import { useParams } from "react-router";
import { ToggleModalContext } from "../../context/Modal";

const EditBookingCalendar = ({booking, setBooking, setUpToDate, state, setState}) => {
  const {updateShowModal} = useContext(ToggleModalContext);
  const bookings = useSelector((state) => state.bookings);
  const bookedDates = useMemo(() => getBookedDates(bookings), [bookings]);
  const calendarContainerStyles = {
    maxWidth: "820px",
    padding: 0,
  };


  // const [state, setState] = useState({
  //   dateRange: [moment(booking.startDate)._d, moment(booking.endDate)._d], // Set the initial range value to the booking range
  // });


  const handleClick = () => {

      if (state.dateRange && state.dateRange.length === 2) {
      const newBooking = {
        startDate: state.dateRange[0],
        endDate: state.dateRange[1],
        vanId: booking.vanId,
        bookerId: booking.bookerId,
      };
      setBooking(newBooking)
      updateShowModal(false)
      }
  }

  const handleChange = (value) => {
    setState({ dateRange: value });
    setUpToDate(false)
  };


  return (
    <div>
      <div
        className="rainbow-m_auto rainbow-align-content_center rainbow-p-vertical_xx-large "
        style={calendarContainerStyles}
      >
        <Calendar
          id="calendar-11"
          variant="double"
          value={state?.dateRange}
          selectionType="range"
          onChange={(value) => handleChange(value)}
          disabledDays={bookedDates}
          minDate={tomorrow}
          maxDate={nextYear}
        />
      </div>
      <div className="flex justify-end mb-8 gap-2">
      <button className="px-2 py-1 border border-transparent rounded-lg bg-transparent underline hover:bg-gray-100 font-bold text-sm" onClick={() => setState({dateRange: []})}>Clear dates</button>
      <button className="btn btn-sm " disabled={state.dateRange.length === 2 ? false: true} onClick={handleClick}>
        Save
      </button>
      </div>
    </div>
  );
}

export default EditBookingCalendar

