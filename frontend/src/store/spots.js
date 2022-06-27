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

const actionUpdateSpot = (spot) => {
    return {
        type: UPDATE_SPOT,
        spot
    }
}
const actionDeleteSpot = (spotId) => {
    return {
        type: DELETE_SPOT,
        spotId
    }
}

//todo thunks

//GET thunk

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


//UPDATE thunk


export const thunkUpdateSpot = (spot) => async (dispatch) => {
    console.log("updateThunk", spot)
  const response = await csrfFetch(`/api/spots/${spot.id}`, {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(spot)
  })
  console.log("response => ", response)
  if(response.ok) {
    const updatedSpot = await response.json();
    //   console.log("data ===> ", spot)
    dispatch(actionUpdateSpot(updatedSpot));
    return updatedSpot
  }
  return await response.json();
};


//DELETE thunk

export const thunkDeleteSpot = () => async (dispatch) => {
    const response = await csrfFetch('/api/spot/', {
        method: 'DELETE',
    });
    dispatch(actionDeleteSpot());
    return response;
};


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
            return {
            ...state,
            [action.spot.id]: action.spot
            };
        // case DELETE_SPOT:
        //     newState = Object.assign({}, state);
        //     newState.user = null;
        //     return newState;
        case DELETE_SPOT:
            newState = { ...state };
            delete newState[action.spotId];
            return newState;
        default:
            return state;
    }
};

export default spotReducer;