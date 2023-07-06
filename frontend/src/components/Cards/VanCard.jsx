import React, { useMemo, useContext } from "react";
import { formatDateRange } from "../../utils/formatDateRange";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { ToggleModalContext } from "../../context/Modal";
import ModalComponent from "../ModalComponent";

const VanCard = ({ booking, past }) => {
  const { updateShowModal } = useContext(ToggleModalContext);
  const navigate = useNavigate();
  const formattedRange = useMemo(
    () => formatDateRange(booking.startDate, booking.endDate),
    [booking]
  );
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl w-[60vw] m-8">
      <figure className="h-52 lg:h-64 lg:w-64">
        <img
          className="h-full w-full object-cover object-center "
          src={booking?.Van?.Images[4]?.url}
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{booking?.Van?.name}</h2>
        <p>{formattedRange}</p>
        
        <div className="card-actions justify-end">
          {past ? (
            <Link to={`/vans/${booking.vanId}`} className="btn btn-primary">
              Book again
            </Link>
          ) : (
            <button
              onClick={() => { 
                updateShowModal(true)
              }}
              className="btn btn-primary"
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default VanCard;
