import React, { useMemo } from "react";
import { daysBetweenDates } from "../utils";
import { formatDateRange } from "../utils/formatDateRange";
import ModalComponent from "./ModalComponent";
import CalendarComponent from "./CalendarComponent";
import XiconSvg from "./SVGS/XiconSvg";
const EditBooking = ({ booking }) => {
  const nights = useMemo(
    () => daysBetweenDates(booking.startDate, booking.endDate),
    [booking]
  );
  const formattedRange = useMemo(
    () => formatDateRange(booking.startDate, booking.endDate),
    [booking]
  );

  console.log(formattedRange, "formattedRange");
  console.log(nights, "nights");
  return (
    <div>
      <h3>Your Trip</h3>
      <div className="flex justify-around">
        <div>
          <p>Dates</p>
          <p>{formattedRange}</p>
        </div>

        <ModalComponent text="Edit">
          <div className="flex w-min h-[58px] border border-gray-300 rounded-full">
            <div className="relative">
              <label
                htmlFor="date-input"
                // className="absolute inset-y-0 left-0 pl-2 pt-1 text-gray-500 font-medium transition-all pointer-events-none"
                className="absolute top-0 left-[12px]"
              >
                Check-In Date
              </label>
              <input
                name="date-input"
                type="text"
                placeholder="MM/DD/YYYY"
                // onFocus={}
                autoFocus
                // className="block w-32 px-4 py-2 text-gray-700 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                className="peer h-[56px] pt-[26px] px-3 pb-2 block min-h-[auto] w-[144px] rounded bg-transparent leading-[1.6] focus:outline-black  border-r-0 "
              />
              <XiconSvg />
            </div>
            <div className="relative">
              <label
                htmlFor="date-input"
                // className="absolute inset-y-0 left-0 pl-2 pt-1 text-gray-500 font-medium transition-all pointer-events-none"
                className="absolute top-0 left-[12px]"
              >
                Check-Out Date
              </label>
              <input
                name="date-input"
                type="text"
                placeholder="MM/DD/YYYY"
                className="peer h-[56px] pt-[26px] px-3 pb-2  block min-h-[auto] w-[144px] rounded bg-transparent leading-[1.6] focus:outline-black  "
              />
              <XiconSvg />
            </div>
          </div>
          <CalendarComponent />
        </ModalComponent>
        {/* // <button className="btn btn-xs" onClick={}>Edit</button> */}
      </div>
    </div>
  );
};

export default EditBooking;
