import {useDispatch} from 'react-redux'
import {useState} from 'react'

import {editReviewThunk} from '../../store/reviews'


export default function EditReview ({review}) {
    const [newReview, setReview] = useState(review.review)
    const [rating, setRating] = useState(review.rating)


    const dispatch = useDispatch()
    const handleEdit = async(e) => {
        e.preventDefault()

        let editedReview =  {
            review: newReview,
            rating: rating
        }

        await dispatch(editReviewThunk(editedReview, review.id))
    }
    return (
        <form> 
            <label for="review"/>
            <input 
            type="text"
            name='review'
            value={newReview}
            onChange={(e) => setReview(e.target.value)}
            />
            <label for='rating' />
            <select 
            type="text" 
            name='rating' 
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            </select>
            <button onClick={handleEdit}>Edit</button>
        </form>
    )
}