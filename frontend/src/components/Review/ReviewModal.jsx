import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ToggleModalContext } from "../../context/Modal";
import ModalComponent from "../ModalComponent";
import Reviews from "./Reviews";

const Review = ({reviews}) => {
  const [rating, setRating] = useState(0);
  const {updateShowModal} = useContext(ToggleModalContext);

  const avgRating = (Reviews) => {
    let sum = 0;
    for (let i = 0; i < Reviews.length; i++) {
      sum += Reviews[i].rating;
    }
    setRating((sum / Reviews.length).toFixed(2));
  };

  useEffect(() => {
    if (reviews.length === 0) return setRating(0);
    avgRating(reviews);
  }, [reviews]);

  console.log(reviews, "reviews")

  return (
    <>
      <p className="flex items-center"> {rating}</p>
      <span className="flex items-center">&middot; </span>
      <ModalComponent
        text={
          reviews.length > 1 ? (
            <p className="flex items-center">{reviews.length} reviews</p>
          ) : (
            <p className="flex items-center">{reviews.length} review</p>
          )
        }
        styles="link flex items-center cursor-pointer"
      >
        <Reviews reviews={reviews} />
      </ModalComponent>
    </>
  );
};

export default Review;
