import React, { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { Sticky } from "react-sticky";
import { daysBetweenDates } from "../../utils";

const BookingCard = ({ van }) => {
  const bookingDates = useSelector((state) => state.bookingDates);
  const totalNights = useMemo(()=> daysBetweenDates(bookingDates.startDate, bookingDates.endDate), [bookingDates])

  console.log(totalNights, "totalNights")
  return (
    <Sticky topOffset={0}>
      {({ style, isSticky }) => {
        return (
          <div
            className="!shadow-xl !w-[25vw] !h-96 mt-12 border-2 rounded-xl !bg-white"
            style={{ ...style, position: isSticky ? "fixed" : "static" }}
          >
            <div className="card-body">
              <div className="flex gap-2">
                <p className="flex-none card-title">${van.price} </p>
                <p className="flex-none">night</p>
              </div>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        );
      }}
    </Sticky>
  );
};

export default BookingCard;
