import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const VanHeader = ({ van }) => {
  const { name, location, price, Reviews, make, model, year } = van;
  const [rating, setRating] = useState(0);

  const avgRating = (Reviews) => {
    let sum = 0;
    for (let i = 0; i < Reviews.length; i++) {
      sum += Reviews[i].rating;
    }
    setRating((sum / Reviews.length).toFixed(2));
  };

  useEffect(() => {
    if (Reviews.length === 0) return setRating(0);
    avgRating(Reviews);
  }, [Reviews]);

  return (
    <header className=" md:w-4/5 mx-auto py-6 px-8 md:px-0">
      <h1 className="text-2xl bold pb-2">
        {name} - {year} {make} {model}
      </h1>
      <div className="rating flex gap-2">
        <input type="radio" name="rating-1" className="mask mask-star" />
        {rating ? (
          <>
            <p> {rating}</p>
            {Reviews.length > 1 ? (
              <>
                <span>&middot; </span>
                <Link to="#" className="link">
                  <p>{Reviews.length} reviews</p>
                </Link>
              </>
            ) : (
              <>
                <span>&middot; </span>
                <Link to="#" className="link">
                  <p>{Reviews.length} review</p>
                </Link>
              </>
            )}
          </>
        ) : (
            <Link to="#" className="link">
              <p>Be the first to leave a review!</p>
            </Link>
        )}
        <p className="hidden md:block">&middot; {location}</p>
      </div>
      <p className="md:hidden">{location}</p>
    </header>
  );
};

export default VanHeader;
