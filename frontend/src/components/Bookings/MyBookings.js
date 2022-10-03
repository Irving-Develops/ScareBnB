import {useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import  {thunkGetBooking, getMyBookingsThunk} from '../../store/bookings'

export default function MyBookings() {
    const dispatch = useDispatch();
    const bookings = useSelector(state => state.bookingReducer)
    const sessionUser = useSelector(state => state.session.user)

    // let mybookings =  bookings?.filter()
    console.log(sessionUser.id, "sessionUser")

    useEffect(() => {
        dispatch(getMyBookingsThunk(sessionUser?.id))
    }, [dispatch])

    if(!bookings) return null
    return (
        "testing"
    )
}