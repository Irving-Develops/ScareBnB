import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom'
import {thunkGetBooking, thunkDeleteBooking, thunkCreateBooking} from '../../store/bookings';

export default function BookingComponent({spotId}) {
    // let id = spotId;
    const selectorBookings = useSelector(state => state?.bookingReducer);
    const userId = useSelector(state => state.session.user.id);
    // console.log(userId)
    const bookingsArr = Object.values(selectorBookings)
    const history = useHistory();
    const dispatch = useDispatch();
    
    //create a booking variables
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
        console.log("payload", payload)

        await dispatch(thunkCreateBooking(payload))
        setUpToDate(false)
    }

    useEffect(() => {
    dispatch(thunkGetBooking(spotId))
    setUpToDate(true)
    }, [dispatch, spotId, upToDate])

    // useEffect(() => {
    //     setUpToDate(true)
    // },[bookingsForSpot])

    async function onDelete(bookingId) {

        dispatch(thunkDeleteBooking(bookingId, history))
        
    }


    // if(upToDate === false) return null;
    return (
        <>

                {bookingsForSpot && upToDate && bookingsForSpot.map(booking => (
                    <div key={booking.id}>
                        <p >Booking for user {booking.userId} at spot {booking.spotId} from {booking.startDate} to {booking.endDate}</p>
                        <button type="button" onClick={() => onDelete(booking.id)}> Delete Booking</button>
                        <button>edit</button>
                    </div>

                ))}

            <div>
                {/* <button>create booking</button> */}
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