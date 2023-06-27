import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getReviews } from '../store/reviews'

const Test = () => {
    const review = useSelector(state => state.reviews)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getReviews(1))
    }, [dispatch])

    console.log(review, "reviews")
  return (
    <div>
        {review && review.map((review, idx) => (
            <div key={idx}>
                <h1>{review.review}</h1>
                <h1>{review.rating}</h1>
                <h1>{review.userId}</h1>
            </div>
        ))}
    </div>
  )
}

export default Test