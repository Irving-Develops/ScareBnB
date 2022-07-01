import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom'
import {thunkGetBooking, thunkDeleteBooking, thunkCreateBooking} from '../../store/bookings';

export default function BookingComponent({spotId}) {
    const selectorBookings = useSelector(state => state?.bookingReducer);
    const userId = useSelector(state => state.session.user.id);
    const user = useSelector(state => state.session.user);

    const bookingsArr = Object.values(selectorBookings)
    const history = useHistory();
    const dispatch = useDispatch();
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("")
    const [upToDate, setUpToDate] = useState(true)

    
    
    let bookingsForSpot = bookingsArr.filter(booking=> booking.spotId === spotId)
    
    const  onSubmit = async(e) =>{
        e.preventDefault();

        const payload = {
            spotId,
            userId,
            startDate,
            endDate,
        }

        await dispatch(thunkCreateBooking(payload))
        await dispatch(thunkGetBooking(spotId))
        await setUpToDate(true)
    }

    console.log("test", bookingsForSpot)

    useEffect(() => {
        dispatch(thunkGetBooking(spotId))
    }, [dispatch, spotId])


    async function onDelete(booking) {
        await dispatch(thunkDeleteBooking(booking, history))
        await setUpToDate(false)
    }

    // if(upToDate === false) return null;
    return (
        <>

                {bookingsForSpot && upToDate && bookingsForSpot.map(booking => (
                    <div key={booking.id}>
                        <p >Booking for user {booking?.userId} at spot {booking?.spotId} from {booking?.startDate} to {booking?.endDate}</p>
                        <button type="button" onClick={() => onDelete(booking)}> Delete Booking</button>
                    </div>

                ))}

            <div>
                <h2>create booking</h2>
                <form onSubmit={onSubmit}>
                    <label>Start</label>
                    <input type="date" value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    />
                    <input type="date"  value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    
                    />
                <button>Submit</button>
                </form>
            </div>
        </>
    )
}