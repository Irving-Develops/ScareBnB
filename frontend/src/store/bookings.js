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
    console.log("in action", booking)
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
export const actionDeleteBooking = (bookingId) => {
    return {
        type: DELETE_BOOKING,
        bookingId
    }
}
//create thunks

//CREATE
export const thunkCreateBooking = (payload) => async(dispatch) => {
    console.log("payload in thunk===> ", payload)
  const response = await csrfFetch(`/api/spots/${payload.spotId}/bookings`, { 
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
export const thunkGetBooking = (spotId) => async(dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}/bookings`)
    if(response.ok) {
        const data = await response.json()
         dispatch(actionGetBooking(data))
        return response
    }
    return response.json();
}

//UPDATE
export const thunkUpdateBooking = (bookingId) => async(dispatch) => {
  const response = await csrfFetch('/api/spots')

    dispatch(actionUpdateBooking(bookingId))
}

//DELETE
export const thunkDeleteBooking = (bookingId, history) => async(dispatch) => {
    console.log(bookingId, history)
    const response = await csrfFetch(`/api/spots/1/bookings/${bookingId}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        const deletedBooking = response.json()
        dispatch(actionDeleteBooking(bookingId));
        history.push('/test')
        return deletedBooking;
    }
    return await response.json();
}

//create reducer

 const bookingReducer = (state = {}, action ) => {
   let newState;
   switch (action.type) {
       case CREATE_BOOKING:
            newState = {...state}
            return newState;
       case GET_BOOKING:
        //    console.log("action booking", action.booking)
            newState = {...state, ...action.booking}
        return newState;
    //    case UPDATE_BOOKING:
    //         newState = {...state}
    //         return newState;
       case DELETE_BOOKING:
            newState = { ...state };
            delete newState[action.spotId];
            return newState;
       default:
           return state;
   }
}

export default bookingReducer;