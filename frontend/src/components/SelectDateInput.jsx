import React, { useEffect, useMemo, useState } from "react";
import { formatDate } from "../utils/formatDate";
import XiconSvg from "./SVGS/XiconSvg";

const SelectDateInput = ({ booking, upToDate }) => {
  // const formattedStartDate = useMemo(() => formatDate(booking.startDate), [booking])
  // const formattedEndDate = useMemo(() => formatDate(booking.endDate), [booking])
  const [startDate, setStartDate] = useState(formatDate(booking.startDate));
  const [endDate, setEndDate] = useState(formatDate(booking.endDate));

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  useEffect(() => {
    setStartDate(formatDate(booking.startDate));
    setEndDate(formatDate(booking.endDate));
  }, [booking]);

  console.log(startDate, endDate, "booking ====")

  console.log(booking, "booking ====");
  return (
    <div className="flex w-min h-[58px] border border-gray-300 rounded-md">
      {upToDate && (
        <>
          <div className="relative">
            <label htmlFor="date-input" className="absolute top-0 left-[12px]">
              Check-In Date
            </label>
            <input
              name="date-input"
              type="text"
              value={startDate}
              readOnly
              onChange={handleStartDateChange}
              placeholder="MM/DD/YYYY"
              autoFocus
              className="peer h-[56px] pt-[26px] px-3 pb-2 block min-h-[auto] w-[144px] rounded bg-transparent leading-[1.6] focus:outline-black  border-r-0 "
            />
            <XiconSvg />
          </div>
          <div className="relative">
            <label htmlFor="date-input" className="absolute top-0 left-[12px]">
              Check-Out Date
            </label>
            <input
              name="date-input"
              type="text"
              value={endDate}
              placeholder="MM/DD/YYYY"
              className="peer h-[56px] pt-[26px] px-3 pb-2  block min-h-[auto] w-[144px] rounded bg-transparent leading-[1.6] focus:outline-black  "
            />
            <XiconSvg />
          </div>
        </>
      )}
    </div>
  );
};

export default SelectDateInput;
