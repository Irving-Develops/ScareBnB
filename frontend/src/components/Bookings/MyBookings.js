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

    console.log(new Date(), "date")
    console.log(bookings, "bookings")

    function formatDate(string){
    let options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(string).toLocaleDateString([],options);
    }


    useEffect(() => {
        dispatch(getMyBookingsThunk(sessionUser?.id))
    }, [dispatch])



    if(!bookings) return null
    return (
        <div>
            <h1>Your Trips</h1>
            <div className={classes.bookingContainer}>
                {bookings && Object.values(bookings)?.map(booking => (
                    <div key={booking.id} className={classes.bookingCardContainer} >
                        {booking.endDate > new Date() ? 
                        <div> 
                            <p> Upcoming </p>
                            <div className={classes.bookingInfo}>
                                <div className={classes.bookingHeader}>
                                    <h2>{booking.Spot.name}</h2>
                                    <p>Hosted by {booking.Spot.User.username}</p>
                                </div>
                                <div className={classes.bookingBody}>
                                    <div className={classes.bookingDate}>
                                        <p>{formatDate(booking.startDate)} - {formatDate(booking.endDate)}</p>
                                    </div>
                                    <div className={classes.bookingLocation}>
                                        <p>{booking.Spot.address}</p>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.imgWrapper} >
                                <img src={`${booking.Spot?.Images[4].url}`} alt=""/>
                            </div>
                        </div>

                        :
                        <div> 
                            <p> Previous </p>
                            <div className={classes.bookingInfo}>
                                <div className={classes.bookingHeader}>
                                    <h2>{booking.Spot.name}</h2>
                                    <p>Hosted by {booking.Spot.User.username}</p>
                                </div>
                                <div className={classes.bookingBody}>
                                    <div className={classes.bookingDate}>
                                        <p>{formatDate(booking.startDate)} - {formatDate(booking.endDate)}</p>
                                    </div>
                                    <div className={classes.bookingLocation}>
                                        <p>{booking.Spot.address}</p>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.imgWrapper} >
                                <img src={`${booking.Spot?.Images[4].url}`} alt=""/>
                            </div>
                        </div>

                    }
                    </div>
                ))}
            </div>

        </div>
    )
}