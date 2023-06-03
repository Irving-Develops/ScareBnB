import React, { useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { getUserBookings } from "../store/bookings";
import { isAfter } from "../utils";
import Card from "../components/Cards/VanCard";
import { ToggleModalContext } from "../context/Modal";
import ModalComponent from "../components/ModalComponent";
import DeleteButton from "../components/DeleteButton";
import { deleteBooking } from "../store/bookings";
import { Link } from "react-router-dom";
const MyTrips = () => {
  const user = useSelector((state) => state.session.user);
  const bookings = useSelector((state) => state.bookings);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const pastTrips = bookings.filter((booking) => !isAfter(booking.startDate));
  const upComingTrips = bookings.filter((booking) =>
    isAfter(booking.startDate)
  );

  const { updateShowModal } = useContext(ToggleModalContext);
  useEffect(() => {
    if (!user) {
      navigate("/");
    } else {
      try {
        dispatch(getUserBookings(user.id));
      } catch (e) {
      }
    }
  }, [user, navigate, dispatch]);

  return (
    <div className="px-10">
      <h2 className="text-3xl text-left">My Upcoming Trips</h2>
      {!upComingTrips.length && (
        <div className="flex flex-col items-start justify-center border-t border-b pt-8 pb-12  m-2">
          <h2 className="text-3xl text-center">No trips booked...yet</h2>
          <p className="text-center mt-2">
            Time to dust off your bags and start planning your next adventure
          </p>
          <Link to="/" className="btn btn-outline mt-4">
            Book a Trip
          </Link>
        </div>
      )}
      {upComingTrips ? (
        upComingTrips.reverse().map((booking) => (
          <div key={booking.id} className="flex items-center justify-center">
            <Card booking={booking} key={booking.id} past={false} />
            <ModalComponent>
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-3xl text-center">Are you sure?</h2>
                <div className="flex">
                  <button
                    onClick={() => updateShowModal(false)}
                    className="btn btn-primary"
                  >
                    No
                  </button>
                  <DeleteButton id={booking.id} action={deleteBooking} />
                </div>
              </div>
            </ModalComponent>
          </div>
        ))
      ) : (
        <>Book a Trip</>
      )}
      {pastTrips.length > 0 && (
        <h2 className="text-3xl text-center">My Past Trips</h2>
      )}
      {pastTrips.reverse().map((booking) => (
        <div key={booking.id} className="flex justify-center">
          <Card booking={booking} key={booking.id} past={true} />
        </div>
      ))}
    </div>
  );
};

export default MyTrips;
