import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getReviewsThunk} from '../../store/reviews'

import DeleteReview from './DeleteReview';
import EditReview from './EditReview';

export default function GetReviews({spotId}) {

    const dispatch = useDispatch();
    const reviews = Object.values(useSelector( state => state.reviews)).filter(review => review.spotId === spotId);
    const [updated, setUpdated] = useState(true)
    let avgRating = 0;

    if(reviews) {
        reviews?.forEach(review => {
            avgRating += review.rating
            return avgRating 
        })
        avgRating /= reviews?.length
    }

    
    useEffect(() => {
        console.log(reviews, "reviews before dispatch")
        dispatch(getReviewsThunk(spotId))
        console.log(updated, "updated")
        console.log(reviews, "reviews after dispatch")
        setUpdated(true)
        console.log("sending dispatch")
    }, [dispatch, spotId, updated]);

    if(!updated || reviews.length === 0  || !spotId) return null
    return (
        <div className="reviewsContainer">
            {avgRating ? 
            <p>{avgRating.toFixed(2)}</p>
            :
            <p>Leave a review</p>
            }
            {updated && reviews && reviews.map(review => 
            <>  
                <p>{review?.User?.username}</p>
                <p>{review?.review}</p>
                <p>{review?.rating}</p>
                <EditReview review={review} />
                <DeleteReview reviewId={review.id} setUpdated={setUpdated}/>
            </>
            )}
        </div>
    )
}
