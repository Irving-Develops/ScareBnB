import {csrfFetch} from './csrf'

//todo define types

//CREATE
const CREATE_SPOT = 'spots/createSpot'

//READ
const GET_SPOTS = 'spots/getSpot'

//UPDATED
const UPDATE_SPOT = 'spots/updateSpot'

//DELETE
const DELETE_SPOT = 'spots/deleteSpot'

//todo action creators
const actionCreateSpot = (spot) => {
    return {
        type: CREATE_SPOT,
        spot
    }
}
const actionGetAllSpots = (spots) => {
    
    // console.log("inside action ==>", spots)
    return {
        type: GET_SPOTS,
        spots
    }
}

// const actionGetSpot = (spot) => {
//     return {
//         type: GET_SPOT,
//         spot
//     }
// }

const actionUpdateSpot = (data) => {
    return {
        type: UPDATE_SPOT,
        data
    }
}
const actionDeleteSpot = (spotId) => {
    return {
        type: DELETE_SPOT,
        spotId
    }
}

//todo thunks

export const thunkGetAllSpots = () => async (dispatch) => {
  const response = await csrfFetch('/api/spots')
  if(response.ok) {
      const data = await response.json();
    //   console.log("data ===> ", data)
    dispatch(actionGetAllSpots(data));
    return response
  }
  return await response.json();
};


export const thunkUpdateSpot = (data) => async (dispatch) => {
    console.log("response inside thunk", data)
  const response = await csrfFetch('/api/spots', {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
  })
  console.log("response => ", response)
  if(response.ok) {
    const data = await response.json();
      console.log("data ===> ", data)
    dispatch(actionUpdateSpot(data));
    return response
  }
  return await response.json();
};
// export const thunkGetSpot = (spotId) => async (dispatch) => {
//   const response = await csrfFetch(`/api/spots/${spotId}`)
//   console.log("inside Thunk", response)
//   if(response.ok) {
//       const data = await response.json();
//     //   console.log("data ===> ", data)
//     dispatch(actionGetSpot(data));
//     return response
//   }
//   return await response.json();
// };


//todo reducer

const spotReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        // case CREATE_SPOT:
        //     newState = Object.assign({}, state);
        //     newState.user = action.payload;
        //     return newState;
        case GET_SPOTS:
            newState = {...state}
            action.spots.forEach(spot => {
                newState[spot.id] = spot
            })
            // console.log("inside reducer", newState)
            return newState;
        // case GET_SPOT:
            // newState = {...state, ...action.spot}
            // console.log("inside reducer", newState)
            // return  newState;
        case UPDATE_SPOT:
            console.log(action.data)
            // newState = Object.assign({}, state);
            // newState.user = action.payload;
            return newState;
        // case DELETE_SPOT:
        //     newState = Object.assign({}, state);
        //     newState.user = null;
        //     return newState;
        default:
            return state;
    }
};

export default spotReducer;