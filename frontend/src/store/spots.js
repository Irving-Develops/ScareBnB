import {csrfFetch} from './csrf'

//todo define types

//CREATE
const CREATE_SPOT = 'spots/createSpot'

//READ
const GET_SPOTS = 'spots/getSpot'

const GET_SPOT = 'spot/getSpot'

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
    
    console.log("inside action ==>", spots)
    return {
        type: GET_SPOTS,
        spots
    }
}

const actionGetSpot = (spot) => {
    return {
        type: GET_SPOT,
        spot
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
    //   console.log("data ===> ", data)
    dispatch(actionGetAllSpots(data));
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
        case GET_SPOTS:
            console.log("inside reducer", state)
            newState = {...state}
            action.spots.forEach(spot => {
                newState[spot.id] = spot
            })
            return newState;
        case GET_SPOT:
            console.log("inside reducer", state)
            newState = {...state}
            // action.spots.forEach(spot => {
            //     newState[spot.id] = spot
            // })
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