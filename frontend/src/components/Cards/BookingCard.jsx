import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { StickyContainer, Sticky } from "react-sticky";

const BookingCard = ({van}) => {
  const bookingDates = useSelector((state) => state.bookingDates);
  console.log(bookingDates, "bookingDates");

  return (
    <Sticky topOffset={0}>
      {({ style, isSticky }) => {
        console.log(style, "style");
        return (
          <div className="!shadow-xl !w-[25vw] !h-96 mt-12 border-2 rounded-xl" style={{ ...style, position: isSticky ? "fixed" : "static"}}>
              <div className="card-body">
                <h2 className="card-title">{}</h2>
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
