import React, { useEffect, useState, useMemo } from "react";
import { Card, Calendar } from "react-rainbow-components";
import { getBookedDates, tomorrow, nextYear } from "../utils";
import { addBooking, getVanBookings } from "../store/bookings";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
// ...

const Booking = ({history}) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const bookings = useSelector((state) => state.bookings);
  const initialState = { date: null };
  const [state, setState] = useState(initialState);
  const user = useSelector((state) => state.session.user);
  const bookedDates = useMemo(() => getBookedDates(bookings), [bookings]);
  const [uuid, setUuid] = useState(uuidv4());
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
      localStorage.setItem(`van-${uuid}-${id}-booking`, JSON.stringify(booking));
    }
  };

  const calendarContainerStyles = {
    width: "27rem",
    height: "25rem",
    border: "none",
    boxShadow: "none",
    padding: "0",
  };

  return (
    <div className="w-4/5 mx-auto">
      <div
        className="rainbow-align-content_center rainbow-p-vertical_xx-large rainbow-p-horizontal_medium"
        style={{ padding: "0", justifyContent: "start" }}
      >
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
      <div className="justify-end" style={{ width: "27rem" }}>
        <button className="btn" onClick={() => setState(initialState)}>
          Clear Dates
        </button>
        <Link
          to={`/book/${uuid}-${id}`}
          className="btn btn-primary"
          onClick={handleBooking}
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default Booking;
