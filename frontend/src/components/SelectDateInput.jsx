import React, { useEffect, useMemo, useState, useContext } from "react";
import { formatDate } from "../utils/formatDate";
import XiconSvg from "./SVGS/XiconSvg";
import { ToggleModalContext } from "../context/Modal";

const SelectDateInput = ({ booking, state }) => {
  const { showModal } = useContext(ToggleModalContext);
  const [startDate, setStartDate] = useState(formatDate(booking.startDate));
  const [endDate, setEndDate] = useState(formatDate(booking.endDate));
    const [startDateFocus, setStartDateFocus] = useState(true);
    const [endDateFocus, setEndDateFocus] = useState(false);

  useEffect(() => {
    setStartDate(formatDate(state.dateRange[0]));
    setEndDate(formatDate(state.dateRange[1]));

    if(state.dateRange[1]) {
      setStartDateFocus(false)
      setEndDateFocus(true)
    }   
    console.log(endDateFocus, "endDateFocus in select input")
    console.log(startDateFocus, "startDateFocus in select input")
  }, [state, showModal, booking, endDateFocus, startDateFocus]);

  const svgStyles = {
    height: "12px",
    width: "12px",
    position: "absolute",
    top: "44%",
    right: "6px",
    strokeWidth: "4",
  };


  return (
    <div className="flex w-min h-[58px] border border-gray-300 rounded-md">
      <div className="relative">
        <label htmlFor="date-input" className="absolute top-0 left-[12px]">
          Check-In Date
        </label>
        <input
          name="date-input"
          type="text"
          value={startDate}
          readOnly
          placeholder="MM/DD/YYYY"
            autoFocus={startDateFocus}
          className="peer h-[56px] pt-[26px] px-3 pb-2 block min-h-[auto] w-[144px] rounded bg-transparent leading-[1.6] focus:outline-black  border-r-0 "
        />
        <XiconSvg  styles={svgStyles}/>
      </div>

      <div className="relative">
        <label htmlFor="date-input" className="absolute top-0 left-[12px]">
          Check-Out Date
        </label>
        <input
          name="date-input"
          type="text"
          readOnly
          autofocus={endDateFocus}
          value={state.dateRange[1] ? endDate : ""}
          placeholder="MM/DD/YYYY"
          className="peer h-[56px] pt-[26px] px-3 pb-2  block min-h-[auto] w-[144px] rounded bg-transparent leading-[1.6] focus:outline-black  "
        />
        <XiconSvg styles={svgStyles} />
      </div>
    </div>
  );
};

export default SelectDateInput;
