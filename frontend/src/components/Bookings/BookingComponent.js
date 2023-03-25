import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom'
import {thunkGetBooking, thunkDeleteBooking, thunkCreateBooking} from '../../store/bookings';
import ReactDates from '../../react-dates'
import './Booking.css'

export default function BookingComponent({spotId, price}) {
    const yourBooking = useSelector(state => state?.bookingReducer.booking);
    const userId = useSelector(state => state.session.user.id);
    const history = useHistory();
    const dispatch = useDispatch();
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null)
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [bookingExist, setBookingExist] = useState(false)
    let today = new Date()
    today = today.toISOString().split('T')[0]

    console.log("========= startDate", yourBooking?.startDate)
    function formatDate(string){
    let options = { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC'  };
    return new Date(string).toLocaleDateString([],options);
    }



    
    const  onSubmit = async(e) =>{
        e.preventDefault();

        setHasSubmitted(true);
        // if (errors.length) return alert('cannot submit')
        
        const payload = {
            spotId,
            userId,
            startDate,
            endDate,
        }

        await dispatch(thunkCreateBooking(payload))
        await  dispatch(thunkGetBooking(spotId))
         setHasSubmitted(false)
         setBookingExist(true)
    }


    useEffect(() => {
        dispatch(thunkGetBooking(spotId))
    }, [dispatch, spotId])


     function onDelete(booking) {
        dispatch(thunkDeleteBooking(booking, history))
        dispatch(thunkGetBooking(spotId))
        setHasSubmitted(false)
        setBookingExist(false)
    }



        return (
            <>
                <div className="booking-container">
                    <p id="price"><span>${price}</span> /night</p>
                    <form onSubmit={onSubmit}>
                    {/* {hasSubmitted && errors.length > 0 && (
                    <div>
                        The following errors were found:
                        <ul>
                            {errors.map(error => (
                            <li key={error.id}>{error}</li>
                            ))}
                        </ul>
                     </div>
                    )} */}
                    {yourBooking && (
                        <>
                            <p>You have a booking from {formatDate(yourBooking.startDate)} to {formatDate(yourBooking.endDate)}</p>
                            <button id="delete-btn" type="button" onClick={() => onDelete(yourBooking)}> Delete Booking</button>
                        </>

                    )}
                    {!bookingExist && !yourBooking &&(
                        <div className="calendar-container">
                            <div className="dates">
                                <div className="start-date">
                                    <ReactDates startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate}/>
                                </div>
                            </div>
                             <button id="reserve-btn">Reserve</button>
                        </div>
                        
                        )}
                    </form>
                </div>
            </>
        )

    // }
}