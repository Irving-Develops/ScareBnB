import React, { useEffect, useMemo, useState, useContext } from "react";
import { daysBetweenDates } from "../utils";
import { formatDateRange } from "../utils/formatDateRange";
import ModalComponent from "./ModalComponent";
import CalendarComponent from "./CalendarComponent";
import SelectDateInput from "./SelectDateInput";
import { moment } from "../utils";
import { ToggleModalContext } from "../context/Modal";
import XiconSvg from "./SVGS/XiconSvg";

const EditBooking = ({ booking, setBooking }) => {
  const [state, setState] = useState({
    dateRange: [moment(booking.startDate)._d, moment(booking.endDate)._d], // Set the initial range value to the booking range
  });
  const { showModal } = useContext(ToggleModalContext);

  const nights = useMemo(
    () => daysBetweenDates(state.dateRange[0], state.dateRange[1]),
    [state]
  );
  const formattedRange = useMemo(
    () => formatDateRange(booking.startDate, booking.endDate),
    [booking]
  );

  useEffect(() => {
    if (!showModal) {
      setState({
        dateRange: [moment(booking.startDate)._d, moment(booking.endDate)._d],
      });
    }
  }, [booking, showModal]);

  const svgStyles = {
    height: "1rem",
    width: "1rem",
    position: "absolute",
    top: "1.5rem",
    left: "1.5rem",
    strokeWidth: "3",
  };
  return (
    <div>
      <h3>Your Trip</h3>
      <div className="flex justify-around">
        <div>
          <p>Dates</p>
          <p>{formattedRange}</p>
        </div>

        <ModalComponent text="Edit">
          <XiconSvg styles={svgStyles}/>
          {state && state.dateRange && (
            <div className="flex pb-4 justify-between h-[86px] align-top">
              <p>{nights} Night</p>


              <SelectDateInput
                booking={booking}
                setBooking={setBooking}
                state={state}
              />
            </div>
          )}
          <CalendarComponent
            booking={booking}
            setBooking={setBooking}
            state={state}
            setState={setState}
          />
        </ModalComponent>
      </div>
    </div>
  );
};

export default EditBooking;
