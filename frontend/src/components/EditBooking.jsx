import React, { useEffect, useMemo, useState } from "react";
import { daysBetweenDates } from "../utils";
import { formatDateRange } from "../utils/formatDateRange";
import ModalComponent from "./ModalComponent";
import CalendarComponent from "./CalendarComponent";
import SelectDateInput from "./SelectDateInput";
const EditBooking = ({ booking, setBooking }) => {
  const [upToDate, setUpToDate] = useState(true);

  // const nights = useMemo(
  //   () => daysBetweenDates(booking.startDate, booking.endDate),
  //   [booking]
  // );
  const formattedRange = useMemo(
    () => formatDateRange(booking.startDate, booking.endDate),
    [booking]
  );

  useEffect(() => {
  }, [booking]);

  return (
    <div>
      <h3>Your Trip</h3>
      <div className="flex justify-around">
        <div>
          <p>Dates</p>
          <p>{formattedRange}</p>
        </div>

        <ModalComponent text="Edit">
          <SelectDateInput booking={booking} setBooking={setBooking} setUpToDate={setUpToDate} upToDate={upToDate}/>
          <CalendarComponent booking={booking} setBooking={setBooking} upToDate={upToDate} setUpToDate={setUpToDate} />
        </ModalComponent>
      </div>
    </div>
  );
};

export default EditBooking;
