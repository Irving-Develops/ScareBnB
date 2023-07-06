import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getReviews, createReview } from "../store/reviews";

const Test = () => {
  const reviews = useSelector((state) => state.reviews);
  const user = useSelector((state) => state.session.user);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviews(1));
  }, [dispatch]);

  const handleReview = (e) => {
    e.preventDefault();

    const payload = {
        review,
        rating,
        userId: user.id,
        vanId: 1, //hardcoded for now
  };

  const res = dispatch(createReview(payload));

  if(res.ok) {
    setRating(5);
    setReview("");
  }
}

const handleEdit = (e) => {
    e.preventDefault();
    console.log("edit");
}


  console.log(user, "user");
  return (
    <div>
      {reviews &&
        reviews.map((review, idx) => (
          <div key={idx}>
            <h1>{review.review}</h1>
            <h1>{review.rating}</h1>
            <h1>{review.userId}</h1>
            <button
            className="btn"
            onClick={handleEdit}
            >edit</button>
            
          </div>
        ))}

      <form onSubmit={handleReview}>
        <input type="text" placeholder="review"
        value={review}
        onChange={(e) => setReview(e.target.value)}
        />
        <div className="rating">
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star"
            value={1}
            onClick={(e) => setRating(e.target.value)}
          />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star"
            value={2}
            onClick={(e) => setRating(e.target.value)}
          />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star"
            value={3}
            onClick={(e) => setRating(e.target.value)}
          />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star"
            value={4}
            onClick={(e) => setRating(e.target.value)}
          />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star"
            value={5}
            onClick={(e) => setRating(e.target.value)}
          />
        </div>
        <button>submit</button>
      </form>
    </div>
  );
};

export default Test;
