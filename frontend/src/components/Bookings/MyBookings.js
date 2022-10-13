import {useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import  {thunkGetBooking, getMyBookingsThunk} from '../../store/bookings'
import { getMySpotsThunk } from "../../store/spots";
import classes from './MyBookings.module.css'

export default function MyBookings() {
    const dispatch = useDispatch();
    const bookings = useSelector(state => state.bookingReducer)
    const sessionUser = useSelector(state => state.session.user)
    const spots = useSelector(state => state.spotReducer)
    // const bookedSpots = Object.values(spots).filter(spot => bookingsId.includes(spot.id))

    console.log(spots, "spots")
    console.log(bookings, "bookings")


    useEffect(() => {
        dispatch(getMyBookingsThunk(sessionUser?.id))
    }, [dispatch])



    if(!bookings) return null
    return (
        <div>
            {/* <h1>Your Bookings</h1>
            {spots && Object.values(bookings)?.map(booking => (
                <div key={booking.id} className={classes.bookingCardContainer} >
                    <div className={classes.imgWrapper} >
                        <img src={`${booking.Spot}`} alt=""/>
                    </div>
                    <div className={classes.bookingInfo}>
                        <p></p>
                    </div>
                </div>
            ))} */}

        </div>
    )
}