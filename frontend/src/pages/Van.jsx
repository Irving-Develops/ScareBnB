import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { getSingleVan } from "../store/vans";
import Gallery from "../components/Gallery";
import AboutVan from "../components/vanDetails/AboutVan";
import CreateBookingCalendar from "../components/Booking/CreateBookingCalendar";
import BookingCard from "../components/Cards/BookingCard";
import { StickyContainer } from "react-sticky";
const Van = ({ history }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const van = useSelector((state) => state.vans);

  useEffect(() => {
    dispatch(getSingleVan(id));
  }, [dispatch, id]);

  return (
    <>
      {van && van.Images && van.Images.length > 0 && (
        <div className="flex flex-col md:w-4/5 md:mx-auto">
          <Gallery images={van.Images} van={van} />
          <div className="flex gap-[3vw]">
            <div className="flex flex-col w-[65%]">
              <AboutVan van={van} />
              <CreateBookingCalendar
                history={history}
                bookings={van.Bookings}
              />
              <div className="h-[800px] w-[800px] bg-red-800">
                Placeholder for review
              </div>
            </div>
            <StickyContainer>
              <BookingCard van={van}/>
            </StickyContainer>
          </div>
        </div>
      )}
    </>
  );
};

export default Van;
