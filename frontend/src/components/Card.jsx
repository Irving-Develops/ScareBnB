import React, { useMemo } from 'react'
import { formatDateRange } from '../utils/formatDateRange'

const Card = ({booking, past}) => {
    console.log(booking, "here")
    const formattedRange = useMemo(() => formatDateRange(booking.startDate, booking.endDate), [booking])
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
        <h2 className="card-title">{booking.Van.name}</h2>
        <p>{formattedRange}</p>
        <div className="card-actions justify-end">
          <button onClick={() => console.log("hi")}className="btn btn-primary">{past ? "Book again" : "Cancel"}</button>
        </div>
      </div>
    </div>
  );
}

export default Card