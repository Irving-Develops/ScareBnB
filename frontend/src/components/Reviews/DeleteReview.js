import {useDispatch} from 'react-redux'
import {deleteReviewThunk, getReviewsThunk} from '../../store/reviews'

export default function DeleteReview({reviewId, setUpdated}) {
    const dispatch = useDispatch();

    const handleDelete = async() => {
        await dispatch(deleteReviewThunk(reviewId))
        await setUpdated(false)
    }

    return (
        <button onClick={handleDelete}>Delete </button>
    )
}