import {csrfFetch} from './csrf'


//todo 

//define types

//CREATE
const CREATE_BOOKING = 'bookings/createBooking'

//READ
const GET_BOOKING = 'bookings/getBooking';

//UPDATE
const UPDATE_BOOKING = 'bookings/updateBook';

//DELETE
const DELETE_BOOKING = 'bookings/deleteBooking';

//create actions

//CREATE
export const actionCreateBooking = (booking) => {
    return {
        type: CREATE_BOOKING,
        booking
    }
}

//READ
export const actionGetBooking = (booking) => {
    return {
        type: GET_BOOKING,
        booking
    }
}

//UPDATE
export const actionUpdateBooking = (bookingId) => {
    return { 
        type: UPDATE_BOOKING,
        bookingId
    }
}

//DELETE
export const actionDeleteBooking = (booking) => {
    return {
        type: DELETE_BOOKING,
        booking
    }
}
//create thunks

//CREATE
export const thunkCreateBooking = (payload) => async(dispatch) => {
  const response = await csrfFetch(`/api/bookings`, { 
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
    })

    if(response.ok){
        let createBooking = await response.json()
        dispatch(actionCreateBooking(createBooking))
        return response;
    }
}

//READ
export const thunkGetBooking = () => async(dispatch) => {
    const response = await csrfFetch(`/api/bookings`)
    if(response.ok) {
        const data = await response.json()
         dispatch(actionGetBooking(data))
        return response
    }
    return response.json();
}

//DELETE
export const thunkDeleteBooking = (booking, history) => async(dispatch) => {
    console.log("booking Id", booking)
    const response = await csrfFetch(`/api/bookings/${booking.id}`, {
        method: 'DELETE',
    });
    if (response.ok) {
        const deletedBooking = response.json()
        dispatch(actionDeleteBooking(booking.id));
        history.push(`/spots/${booking.spotId}`)
        return deletedBooking;
    }
    return response.json();
}

//create reducer

 const bookingReducer = (state = {}, action ) => {
   let newState;
   switch (action.type) {
       case CREATE_BOOKING:
            newState = {...state}
            return newState;
       case GET_BOOKING:
            newState = {...state}
            action.booking.forEach(booking => {
                newState[booking.id] = booking
            })
        return newState;
       case DELETE_BOOKING:
            newState = { ...state };
            delete newState[action.booking];
            return newState;
       default:
           return state;
   }
}

export default bookingReducer;