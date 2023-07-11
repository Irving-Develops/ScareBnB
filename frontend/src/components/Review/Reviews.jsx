import React from 'react'

const Reviews = ({reviews}) => {
  return (
    <>
    {reviews && reviews.map((review) => (
        <div className="flex flex-col gap-2">
            <p>{review.rating}</p>
            <p>{review.review}</p>
        </div>
    ))}
    </>
  )
}

export default Reviews