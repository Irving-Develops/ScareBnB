import React from 'react'

const Card = ({booking, past}) => {
    console.log(booking, "here")
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl w-[60vw] m-8">
      <figure className="h-52 lg:h-64 lg:w-64">
        <img
          className="h-full w-full object-cover object-center "
          src={booking?.Van?.Images[0]?.url}
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div className="card-actions justify-end">
          <button onClick={() => console.log("hi")}className="btn btn-primary">{past ? "Book again" : "Cancel"}</button>
        </div>
      </div>
    </div>
  );
}

export default Card