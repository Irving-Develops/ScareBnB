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


    let upcomingTrips = Object.values(bookings).filter(booking => {
        return new Date(booking.endDate) > new Date() && booking.userId === sessionUser.id
    })
    let previousTrips = Object.values(bookings).filter(booking => {
        return new Date(booking.endDate) < new Date() && booking.userId === sessionUser.id
    })

    console.log(previousTrips, "previous trips")
    // const bookedSpots = Object.values(spots).filter(spot => bookingsId.includes(spot.id))

    console.log(new Date(), "date")
    console.log(bookings, "bookings")

    console.log(new Date(Object.values(bookings)[0]?.endDate) >  new Date(), "testing")

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
            <h2>Your Trips</h2>
            <div className={classes.bookingContainer}>
                {upcomingTrips ? 
                <h3>Upcoming Reservations</h3>
                :
                null    
            }
                {bookings && upcomingTrips.map(booking => (
                        <div key={booking.id} className={classes.bookingCardContainer} >
                                <div className={classes.bookingInfo}>
                                    <div className={classes.bookingHeader}>
                                        <h2 style={{"color": "#1F0000"}}>{booking.Spot?.name}</h2>
                                        <p>Hosted by {booking.Spot?.User?.username}</p>
                                    </div>
                                    <div className={classes.bookingBody}>
                                        <div className={classes.bookingDate}>
                                            <span style={{"fontSize": "14px"}}>{formatDate(booking.startDate)}</span >
                                            <span style={{"fontSize": "14px"}}>{formatDate(booking.endDate)}</span >
                                        </div>
                                        <div className={classes.bookingLocation}>
                                            <p>{booking.Spot?.address}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.imgWrapper} >
                                    <img src={`${booking.Spot?.Images[4]?.url}`} alt=""/>
                                </div>
                            </div>
                ))}
                    {previousTrips ? 
                    <h3>Previous Reservations</h3>
                    :
                    null
                }
                        {bookings && previousTrips?.map(booking => (
                        <div key={booking.id} className={classes.bookingCardContainer} >
                                <div className={classes.bookingInfo}>
                                    <div className={classes.bookingHeader}>
                                        <h2 style={{"color": "#1F0000"}}>{booking.Spot?.name}</h2>
                                        <p>Hosted by {booking.Spot?.User?.username}</p>
                                    </div>
                                    <div className={classes.bookingBody}>
                                        <div className={classes.bookingDate}>
                                            <span style={{"fontSize": "14px"}}>{formatDate(booking.startDate)}</span >
                                            <span style={{"fontSize": "14px"}}>{formatDate(booking.endDate)}</span >
                                        </div>
                                        <div className={classes.bookingLocation}>
                                            <p>{booking.Spot?.address}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.imgWrapper} >
                                    <img src={`${booking.Spot?.Images[4]?.url}`} alt=""/>
                                </div>
                            </div>
                ))}
            </div>

        </div>
    )
}