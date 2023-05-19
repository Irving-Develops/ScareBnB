import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { getUserBookings } from "../store/bookings";
import { isAfter } from "../utils";
import Card from "../components/Card";

const MyTrips = () => {
  const user = useSelector((state) => state.session.user);
  const bookings = useSelector((state) => state.bookings);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const upComingTrips = bookings.filter(
    (booking) => !isAfter(booking.startDate)
  );
  const pastTrips = bookings.filter((booking) => isAfter(booking.startDate));

  useEffect(() => {
    if (!user) {
      navigate("/");
    } else {
      try {
        dispatch(getUserBookings(user.id));
      } catch (e) {
        console.log(e);
      }
    }
  }, [user, navigate, dispatch]);

  return (
    <div>
      <h2 className="text-3xl text-center">My Upcoming Trips</h2>
      {upComingTrips ? (
        upComingTrips.map((booking) => (
          <div className="flex items-center justify-center">
            <Card booking={booking} key={booking.id} past={false}/>
          </div>
        ))
      ) : (
        <>Book a Trip</>
      )}
    <h2 className="text-3xl text-center">My Past Trips</h2>
      {pastTrips.map((booking) => (
        <div className="flex justify-center">
            <Card booking={booking} key={booking.id} past={true}/>
        </div>
      ))}
    </div>
  );
};

export default MyTrips;
