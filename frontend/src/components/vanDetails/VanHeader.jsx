import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Review from "../Review/Review";

const VanHeader = ({ van }) => {
  const { name, location, price, Reviews, make, model, year } = van;
  console.log(name, "van");
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
    <header className=" md:w-full mx-auto py-6 px-8 md:px-0">
      <h1 className="text-2xl bold pb-2">
        {name} - {year} {make} {model}
      </h1>
      <div className="rating flex gap-2">
        <input type="radio" name="rating-1" className="mask mask-star" />
        {rating ? (
          <>
            <Review reviews={Reviews} />
          </>
        ) : (
          <Link to="#" className="link link-neutral">
            <p>Be the first to leave a review!</p>
          </Link>
        )}
        <p className="hidden  md:flex md:items-center">&middot; {location}</p>
      </div>
      <p className="md:hidden">{location}</p>
    </header>
  );
};

export default VanHeader;
