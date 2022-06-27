import {csrfFetch} from './csrf'

//todo define types

//CREATE
const CREATE_SPOT = 'spots/createSpot'

//READ
const GET_SPOT = 'spots/getSpot'

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
const actionGetSpot = (spots) => {
    console.log("spots ==>", spots)
    return {
        type: GET_SPOT,
        spots
    }
}
const actionUpdateSpot = (spotId) => {
    return {
        type: UPDATE_SPOT,
        spotId
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
    dispatch(actionGetSpot(data));
    return response
  }
  return await response.json();
};


//todo reducer

const spotReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        // case CREATE_SPOT:
        //     newState = Object.assign({}, state);
        //     newState.user = action.payload;
        //     return newState;
        case GET_SPOT:
            newState = {...state}
            console.log("----", newState)
            action.spots.forEach(spot => {
                newState[spot.id] = spot
            })
            console.log("newState =====>", newState)
            return newState;
        // case UPDATE_SPOT:
        //     newState = Object.assign({}, state);
        //     newState.user = action.payload;
        //     return newState;
        // case DELETE_SPOT:
        //     newState = Object.assign({}, state);
        //     newState.user = null;
        //     return newState;
        default:
            return state;
    }
};

export default spotReducer;