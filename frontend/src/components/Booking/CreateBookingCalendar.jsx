import React, { useEffect, useState, useMemo } from "react";
import { Card, Calendar } from "react-rainbow-components";
import { getBookedDates, tomorrow, nextYear } from "../../utils";
import { addBooking, getVanBookings } from "../../store/bookings";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Header from "../Header";
import {setStartDate, setEndDate} from '../../store/bookingDates'
// ...

const CreateBookingCalendar = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const bookings = useSelector((state) => state.bookings);
  const bookingDates = useSelector((state) => state.bookingDates);
  const initialState = { date: null };
  const [state, setState] = useState(initialState);
  const user = useSelector((state) => state.session.user);
  const bookedDates = useMemo(() => getBookedDates(bookings), [bookings]);
  const [uuid, setUuid] = useState(uuidv4());

  console.log(bookingDates, "important")
  useEffect(() => {
    dispatch(getVanBookings(id));
  }, [dispatch, id]);

  const handleBooking = () => {
    if (state.date && state.date.length === 2) {
      const booking = {
        startDate: state.date[0],
        endDate: state.date[1],
        vanId: id,
        bookerId: user.id,
      };
      localStorage.setItem(
        `van-${uuid}-${id}-booking`,
        JSON.stringify(booking)
      );
    }
  };

  const handleChange = async(value) => {
    setState({ date: value });
    if(!state.date || state.date.length ===2){
    dispatch(setStartDate(value[0]))
    dispatch(setEndDate(null))
    }else if(state.date.length === 1){
    dispatch(setEndDate(value[1]))
    }
  }

  const calendarContainerStyles = {
    width: "27rem",
    height: "25rem",
    border: "none",
    boxShadow: "none",
    padding: "0",
  };


  return (
    <section className="w-3/5 py-12 border-b-[1px] border-[#dddddd] mb-4">
      <div>
        <Header>Select check-in date</Header>
        <p className="text-sm text-[#717171] pt-2">
          Add your travel date for exact pricing
        </p>
      </div>
      <div
        className="rainbow-align-content_center rainbow-p-vertical_xx-large rainbow-p-horizontal_medium !px-0 justify-start"
      >
        <Calendar
          id="calendar-11"
          value={state.date}
          variant="double"
          selectionType="range"
          onChange={(value) => handleChange(value)}
          disabledDays={bookedDates}
          minDate={tomorrow}
          maxDate={nextYear}
        />
      </div>
      <div className="flex justify-end">
        <button
          className="px-2 py-1 border border-transparent rounded-lg bg-transparent underline hover:bg-gray-100 font-bold text-sm"
          onClick={() => setState(initialState)}
        >
          Clear dates
        </button>

        <Link
          to={`/book/${uuid}-${id}`}
          style={{ transition: "none", color: "white" }}
          className="btn bg-rose !no-underline"
          onClick={handleBooking}
        >
          Book Now
        </Link>
      </div>
    </section>
  );
};

export default CreateBookingCalendar;
