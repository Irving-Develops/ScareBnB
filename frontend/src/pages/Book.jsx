import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import EditBooking from "../components/Booking/EditBooking";
import { addBooking } from "../store/bookings";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import BookingCard from "../components/Cards/BookingCard";
const Book = () => {
  const [booking, setBooking] = useState();
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setBooking(JSON.parse(localStorage.getItem(`van-${id}-booking`)));
  }, [id]);

  const handleCreateBooking = async () => {
    try {
      const newBooking = await dispatch(addBooking(booking));
      if (newBooking) {
        localStorage.removeItem(`van-${id}-booking`);
        navigate("/");
      }
    } catch (e) {
    }
  };


  return (
    <section>
      {booking && <EditBooking booking={booking} setBooking={setBooking} />}
      <button onClick={handleCreateBooking} className="btn btn-xl">
        Book
      </button>
    </section>
  );
};

export default Book;
