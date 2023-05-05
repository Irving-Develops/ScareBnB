import {csrfFetch} from './csrf'
import { createAsyncThunk } from '@reduxjs/toolkit';

// //todo define types

// //CREATE
// const CREATE_SPOT = 'spots/createSpot'

// //READ
// const GET_SPOTS = 'spots/getSpot'

// const GET_SPOT = 'spots/getSpot'

// //UPDATED
// const UPDATE_SPOT = 'spots/updateSpot'

// //DELETE
// const DELETE_SPOT = 'spots/deleteSpot'

// //todo action creators
// const actionCreateSpot = (spot, image) => {
//     return {
//         type: CREATE_SPOT,
//         spot,
//         image
//     }
// }
// const actionGetAllSpots = (spots) => {
    
//     return {
//         type: GET_SPOTS,
//         spots
//     }
// }

// const getSpot = (spot) => {

//     return {
//         type: GET_SPOT,
//         spot
//     }
// }


// const actionUpdateSpot = (spot) => {
//     return {
//         type: UPDATE_SPOT,
//         spot
//     }
// }


// const actionDeleteSpot = (spotId) => {
//     return {
//         type: DELETE_SPOT,
//         spotId
//     }
// }

// //todo thunks

// //POST thunk
// export const thunkCreateSpot = (spot, hist) => async (dispatch) => {
//   const response = await csrfFetch(`/api/spots/`, {
//       method: "POST",
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(spot)
//   })
//   if(response.ok) {
//     const createdSpot = await response.json();
//      dispatch(actionCreateSpot(createdSpot));
//     hist.push(`/spots/${createdSpot.id}`)
//     return response;
//   }
// };


// //GET thunk

// export const thunkGetAllSpots = () => async (dispatch) => {
//   const response = await csrfFetch('/api/spots')
//   if(response.ok) {
//       const data = await response.json();
//     dispatch(actionGetAllSpots(data));

//     return response
//   }
//   return response.json();
// };


// export const getSpotThunk = (spotId) => async(dispatch) => {
//     console.log(typeof spotId,"spots in thunk")
//     const response = await csrfFetch(`/api/spots/${spotId}`)

//     if(response.ok) {
//         const data = await response.json()
//         dispatch(getSpot(data))
//         return response
//     }
// }
 
// //UPDATE thunk


// export const thunkUpdateSpot = (spot, id) => async (dispatch) => {
//   const response = await csrfFetch(`/api/spots/${id}`, {
//       method: "PUT",
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(spot)
//   })
//   if(response.ok) {
//     const updatedSpot = await response.json();
//     dispatch(actionUpdateSpot(updatedSpot));
//     return updatedSpot
//   }
//   return await response.json();
// };


// //DELETE thunk

// export const thunkDeleteSpot = (spotId, history) => async (dispatch) => {
//     const response = await csrfFetch(`/api/spots/${spotId}`, {
//         method: 'DELETE',
//     });
//     console.log(response, "in delete")
//     console.log(spotId, "in delete")

//     if (response.ok) {
//         const deletedSpot = response.json()
//         dispatch(actionDeleteSpot(spotId));
//         history.push('/')
//         return deletedSpot;
//     }
//     return response.json();
// };


// //todo reducer

// const spotReducer = (state = [], action) => {
//     let newState = [...state];
//     switch (action.type) {
//         case CREATE_SPOT:
//                 newState[action.spot.id]= action.spot
//             return newState;
//         case GET_SPOTS:
//             // if(action.spots) {
//                 action.spots.forEach(spot => {
//                     newState[spot.id] = spot
//                 })
//             // }else {
//             //     console.log("in else", action.spot)
//             //     newState[action.spot.id] = action.spot
//             // }
//             return newState;
//         case GET_SPOT:
//                 newState[action.spot.id] = action.spot
//             return newState;
//         case UPDATE_SPOT:
//                 newState[action.spot.id] = action.spot
//             return newState;
//         case DELETE_SPOT:
//             delete newState[action.spotId];
//             return newState;
//         default:
//             return state;
//     }
// };

// export default spotReducer;


// import { createSlice } from "@reduxjs/toolkit";

// export const getAllSpots = createAsyncThunk("spots/getAllSpots", async () => {
//   const response = await csrfFetch("/api/spots");
//   const data = await response.json();
//   if (!response.ok) {
//     throw new Error(data.message || "Failed to get spots");
//   }
//   return data;
// });

// export const spotSlice = createSlice({
//   name: "spots",
//   initialState: {},
//   reducers: {
//       getAllSpots: (state, action) => {
//         action.payload.forEach((spot) => {
//           state[spot.id] = spot;
//         });
//       },

//   },
// });


// const { createSpot } = spotSlice.actions;

import {createSlice } from "@reduxjs/toolkit";

export const getAllSpots = createAsyncThunk("spots/getAllSpots", async () => {
  const response = await csrfFetch("/api/spots");
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to get spots");
  }
  return data;
});

export const spotSlice = createSlice({
  name: "spots",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllSpots.fulfilled, (state, action) => {
        return action.payload
      })
    //   .addCase(getAllSpots.rejected, (state, action) => {
    //     state.error = action.error.message;
    //   });
  },
});

