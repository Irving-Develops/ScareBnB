// import {csrfFetch} from './csrf'

// //todo

// //define types

// //CREATE
// const CREATE_BOOKING = 'bookings/createBooking'

// //READ
// const GET_BOOKING = 'bookings/getBooking';
// const MY_BOOKINGS = 'bookings/myBookings'

// //UPDATE
// const UPDATE_BOOKING = 'bookings/updateBook';

// //DELETE
// const DELETE_BOOKING = 'bookings/deleteBooking';

// //create actions

// //CREATE
// export const actionCreateBooking = (booking) => {
//     return {
//         type: CREATE_BOOKING,
//         booking
//     }
// }

// //READ
// export const actionGetBooking = (booking) => {
//     return {
//         type: GET_BOOKING,
//         booking
//     }
// }

// export const getMyBookings = (booking) => {
//     return {
//         type: MY_BOOKINGS,
//         booking
//     }
// }

// //UPDATE
// export const actionUpdateBooking = (bookingId) => {
//     return {
//         type: UPDATE_BOOKING,
//         bookingId
//     }
// }

// //DELETE
// export const actionDeleteBooking = (booking) => {
//     return {
//         type: DELETE_BOOKING,
//         booking
//     }
// }
// //create thunks

// //CREATE
// export const thunkCreateBooking = (payload) => async(dispatch) => {
//   const response = await csrfFetch(`/api/bookings`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(payload)
//     })

//     if(response.ok){
//         let createBooking = await response.json()
//         dispatch(actionCreateBooking(createBooking))
//         return createBooking;
//     }
// }

// //READ
// export const thunkGetBooking = () => async(dispatch) => {
//     const response = await csrfFetch(`/api/bookings`)
//     if(response.ok) {
//         const data = await response.json()
//          dispatch(actionGetBooking(data))
//         return response
//     }
//     return response.json();
// }

// export const getMyBookingsThunk = (id) => async(dispatch) => {
//     console.log("testing")
//     const response = await csrfFetch(`/api/bookings/mybookings/${id}`)
//     console.log(response, "response in thunk")
//         if (response.ok) {
//             const data = await response.json()
//             console.log(data, "data in my bookings")
//             dispatch(getMyBookings(data))
//             return response
//         }
//         return response.json();
// }

// //DELETE
// export const thunkDeleteBooking = (booking, history) => async(dispatch) => {
//     const response = await csrfFetch(`/api/bookings/${booking.id}`, {
//         method: 'DELETE',
//     });
//     if (response.ok) {
//         const deletedBooking = await response.json()
//         dispatch(actionDeleteBooking(booking.id));
//         history.push(`/spots/${booking.spotId}`)
//         return deletedBooking;
//     }
//     return response.json();
// }

// //create reducer

//  const bookingReducer = (state = {}, action ) => {
//    let newState;
//    switch (action.type) {
//        case CREATE_BOOKING:
//             newState = {...state}
//             return newState;
//        case GET_BOOKING:
//             newState = {...state}
//             action.booking.forEach(booking => {
//                 newState[booking.id] = booking
//             })
//         return newState;
//         case MY_BOOKINGS:
//             newState = {...state}
//             action.booking.forEach(booking => {
//                 newState[booking.id] = booking
//             })
//             return newState;
//         case DELETE_BOOKING:
//                 newState = { ...state };
//                 delete newState[action.booking];
//                 return newState;
//         default:
//             return state;
//    }
// }

// export default bookingReducer;

import { csrfFetch } from "./csrf";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export const addBooking = createAsyncThunk(
  "bookings/addBooking",
  async (payload) => {
    console.log(payload, "payload");
    const response = await csrfFetch("/api/bookings", {
      method: "POST",
      body: JSON.stringify(payload),
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to create booking");
    }
    return data;
  }
);

export const getVanBookings = createAsyncThunk(
  "bookings/getBookings",
  async (id) => {
    const response = await csrfFetch(`/api/bookings/${id}`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to get bookings");
    }
    return data;
  }
);

export const bookingSlice = createSlice({
  name: "bookings",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addBooking.fulfilled, (state, action) => {
        return [...state, action.payload];
      })
      .addCase(addBooking.rejected, (state, action) => {
       return state.error = action.error.message;
      })
      .addCase(getVanBookings.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(getVanBookings.rejected, (state, action) => {
       return state.error = action.error.message;
      });
  },
});
