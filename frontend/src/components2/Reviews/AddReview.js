import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { addReviewThunk, getReviewsThunk } from '../../store/reviews'

export default function AddReview({spotId}) {
    const dispatch = useDispatch()
    const [review, setReview] = useState("")
    const [rating, setRating] = useState(1)
    const userId = useSelector(state => state.session.user.id)

    
    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(rating, review)

        let newReview = {
            review,
            rating,
            userId,
            spotId
        }

        let addedReview = await dispatch(addReviewThunk(newReview))
        if(addedReview){
            setReview("")
            setRating(1)

            await dispatch(getReviewsThunk(spotId))

        }

    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label for="review">Review</label>
                <input 
                    type="text"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                />
            </div>
            <div>
                <label for="rating">Rating</label>
                <select onChange={(e) => setRating(parseInt(e.target.value))}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    
                </select>
            </div>
            <button>Add Review</button>
        </form>
    )
}