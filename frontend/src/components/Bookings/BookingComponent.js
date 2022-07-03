import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom'
import {thunkGetBooking, thunkDeleteBooking, thunkCreateBooking} from '../../store/bookings';

export default function BookingComponent({spotId}) {
    const selectorBookings = useSelector(state => state?.bookingReducer);
    const userId = useSelector(state => state.session.user.id);
    const history = useHistory();
    const dispatch = useDispatch();
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("")
    const [upToDate, setUpToDate] = useState(true)
    const [errors, setErrors] = useState([])
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [day1, setDay1] = useState(new Date(endDate))
    const [day2, setDay2] = useState(new Date(startDate))
    const [bookingExist, setBookingExist] = useState(false)
    const bookingsArr = Object.values(selectorBookings)
    let bookingsForSpot = bookingsArr.filter(booking=> booking.spotId === spotId)


    // const bookingKeys = Object.keys(selectorBookings)
    console.log('bookings =========>' , bookingsForSpot)
    
    useEffect(() => {
        setDay1(new Date(endDate));
        setDay2(new Date(startDate))

    }, [endDate, startDate])

    
    
    useEffect(() => {
        const err = [];
        
        //checking the number of days between two dates
        const days = (day1, day2) => {
            let difference = day1.getTime() - day2.getTime();
            let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
            return TotalDays;
        }
        
        let amountOfDays = days(day1, day2);
        
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
         setUpToDate(true)
         setHasSubmitted(false)
         setBookingExist(true)
    }

    useEffect(() => {
        if(upToDate === false){
            dispatch(thunkGetBooking(spotId))
            setUpToDate(true)
        }

    }, [dispatch, upToDate, spotId])


    useEffect(() => {
        dispatch(thunkGetBooking())
        setUpToDate(true)
    }, [dispatch, spotId])


     function onDelete(booking) {
         console.log("booking in delete ===> ", booking.id)
        dispatch(thunkDeleteBooking(booking, history))
        dispatch(thunkGetBooking(spotId))
        setUpToDate(false)
        setHasSubmitted(false)
        setBookingExist(false)
    }

    if(upToDate === false) return null;
    // if(upToDate === true){
        return (
            <>
    
                    {bookingsForSpot && upToDate && bookingsForSpot.map(booking => (
                        <div key={booking.id}>

                                    <p >Booking for user {booking.userId} at spot {booking.spotId} from {booking.startDate} to {booking.endDate}</p>
                                    {booking.userId === userId && (
                                        <button type="button" onClick={() => onDelete(booking)}> Delete Booking</button>
                                       )}
                        </div>
    
                    ))}
    
                <div>
                    <h2>create booking</h2>
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
                    {!bookingExist && (
                        <>
                            <label>Start</label>
                            <input type="date" value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            />
                            <input type="date"  value={endDate}
                            onChange={(e) => setEndDate(e.target.value)} 
                            />
                             <button>Submit</button>
                        </>
                        
                        )}
                    </form>
                </div>
            </>
        )

    // }
}