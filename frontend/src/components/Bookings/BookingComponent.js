import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom'
import {thunkGetBooking, thunkDeleteBooking} from '../../store/bookings';

export default function BookingComponent({spotId}) {
    let id = spotId;
    const selectorBookings = useSelector(state => state?.bookingReducer);
    const bookingsArr = Object.values(selectorBookings)
    const history = useHistory();
    const dispatch = useDispatch();


    //create a booking variables
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("")


    const bookingForCurrentSpot = bookingsArr.find(booking => booking.spotId === id) 

    useEffect(() => {
        dispatch(thunkGetBooking())
    }, [dispatch])




    async function onDelete(bookingId) {
        console.log("booking id", bookingForCurrentSpot)
        dispatch(thunkDeleteBooking(bookingId, history))
        
    }


    return (
        <>

                {bookingForCurrentSpot && (
                    <>
                        <p >Booking for user {bookingForCurrentSpot?.userId} at spot {bookingForCurrentSpot?.spotId} from {bookingForCurrentSpot?.startDate} to {bookingForCurrentSpot?.endDate}</p>
                        <button type="button" onClick={() => onDelete(bookingForCurrentSpot.id)}> Delete Booking</button>
                        <button>edit</button>
                    </>
                )}

            <div>
                {/* <button>create booking</button> */}
                <form>
                    <label>Start</label>
                    <input type="date" />
                    <input type="date" />
                </form>
            </div>
        </>
    )
}