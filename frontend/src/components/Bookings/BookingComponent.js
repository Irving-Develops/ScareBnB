import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom'
import {thunkGetBooking, thunkDeleteBooking, thunkCreateBooking} from '../../store/bookings';
import './Booking.css'

export default function BookingComponent({spotId, price}) {
    const selectorBookings = useSelector(state => state?.bookingReducer);
    const userId = useSelector(state => state.session.user.id);
    const history = useHistory();
    const dispatch = useDispatch();
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("")
    const [errors, setErrors] = useState([])
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [day1, setDay1] = useState(new Date(endDate))
    const [day2, setDay2] = useState(new Date(startDate))
    const [bookingExist, setBookingExist] = useState(false)
    const [totalDays, setTotalDays] = useState(null)
    const [display, setDisplay] = useState(false)
    const bookingsArr = Object.values(selectorBookings)
    let bookingsForSpot = bookingsArr.filter(booking=> booking.spotId === spotId)
    console.log(bookingsForSpot)
    console.log(spotId, userId)
    let yourBooking;
    bookingsForSpot.forEach(booking => {
        console.log("inside your booking", booking)
        if(booking.userId === userId && booking.spotId === spotId){
            yourBooking= booking;
            return;
        };
    })

    console.log("your booking" , yourBooking)

    useEffect(() => {
        const err = [];
        
        //checking the number of days between two dates
        const days = (day1, day2) => {
            let difference = day1.getTime() - day2.getTime();
            let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
            return TotalDays;
        }

        let amountOfDays = days(day1, day2);
        setTotalDays(amountOfDays);
        
        if(amountOfDays > 28) err.push("Your booking cannot be longer thank 28 days")
        
        
        const startDateArr = startDate.split('-')

        let today = new Date()
        let year = today.getFullYear();
        let month = today.getMonth()
        let day = today.getDate();


        if(startDateArr[0] < year) err.push("Please enter a valid year")
        if(startDateArr[0] <= year && startDateArr[1] < month + 1 ) err.push("Please enter a valid month")
        if(startDateArr[0] <= year && startDateArr[1] <= month + 1 && startDateArr[2] < day) err.push("Please enter a valid day")
        if(startDateArr[0] <= year && startDateArr[1] <= month + 1 && startDateArr[2] <= day) err.push("Cannot make a booking on the same day")
        
        if(startDate > endDate) err.push("Please enter a valid end date");
        if(startDate < today) err.push("Please enter a valid start date");
        if(startDate === endDate) err.push("Start date and end date cannot match");


        return setErrors(err)
    }, [startDate, endDate, day1, day2])
    
    const  onSubmit = async(e) =>{
        e.preventDefault();

        setHasSubmitted(true);
        if (errors.length) return alert('cannot submit')
        
        const payload = {
            spotId,
            userId,
            startDate,
            endDate,
        }

        await dispatch(thunkCreateBooking(payload))
        await  dispatch(thunkGetBooking())
         setHasSubmitted(false)
         setBookingExist(true)
    }


    useEffect(() => {
        dispatch(thunkGetBooking())
    }, [dispatch, spotId])


     function onDelete(booking) {
         console.log("booking in delete ===> ", booking.id)
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
                    {hasSubmitted && errors.length > 0 && (
                    <div>
                        The following errors were found:
                        <ul>
                            {errors.map(error => (
                            <li key={error.id}>{error}</li>
                            ))}
                        </ul>
                     </div>
                    )}
                    {yourBooking && (
                        <>
                            <p>You have a booking from {yourBooking.startDate} to {yourBooking.endDate}</p>
                            <button id="delete-btn" type="button" onClick={() => onDelete(yourBooking)}> Delete Booking</button>
                        </>

                    )}
                    {!bookingExist && !yourBooking &&(
                        <div className="calendar-container">
                            <div className="dates">
                                <div className="start-date">
                                    <label>Check-in</label>
                                    <input type="date" value={startDate}
                                    onChange={(e) => {
                                        setStartDate(e.target.value)
                                        setDay2(new Date(e.target.value))
                                    }}
                                    />  
                                </div>
                                <div className="end-date">
                                    <label>Check-out</label>
                                    <input type="date"  value={endDate}
                                    onChange={(e) => {
                                        setEndDate(e.target.value)
                                        setDay1(new Date(e.target.value))
                                    }} 
                                    />
                                </div>
                            </div>
                             <button id="reserve-btn">Reserve</button>
                        </div>
                        
                        )}
                    </form>
                    {totalDays > 0 && (
                        <div className="pricing-container">
                            <p>${price} x {totalDays} nights</p>
                            <p>Total: ${price * totalDays}</p>
                        </div>
                    )}
                </div>
                    <h2>Current Bookings</h2>
                    {bookingsForSpot && bookingsForSpot.map(booking => (
                    <div key={booking.id}>
                        <p >Booking from {booking.startDate} to {booking.endDate}</p>
                    </div>
    
                ))}
    
            </>
        )

    // }
}