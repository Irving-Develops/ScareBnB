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
const actionCreateSpot = (spot, image) => {
    console.log('in action', spot)
    return {
        type: CREATE_SPOT,
        spot,
        image
    }
}
const actionGetAllSpots = (spots) => {
    
    // console.log("inside action ==>", spots)
    return {
        type: GET_SPOTS,
        spots
    }
}


const actionUpdateSpot = (spot) => {
    return {
        type: UPDATE_SPOT,
        spot
    }
}


const actionDeleteSpot = (spotId) => {
    console.log("inside action", spotId)
    return {
        type: DELETE_SPOT,
        spotId
    }
}

//todo thunks

//POST thunk
export const thunkCreateSpot = (spot) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(spot)
  })
  if(response.ok) {
    const createdSpot = await response.json();
     await dispatch(actionCreateSpot(createdSpot));
    return createdSpot;
  }
};


//GET thunk

export const thunkGetAllSpots = () => async (dispatch) => {
  const response = await csrfFetch('/api/spots')
  if(response.ok) {
      const data = await response.json();
    dispatch(actionGetAllSpots(data));

    return response
  }
  return await response.json();
};


//UPDATE thunk


export const thunkUpdateSpot = (spot, id) => async (dispatch) => {
    console.log("updateThunk", spot, id)
  const response = await csrfFetch(`/api/spots/${id}`, {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(spot)
  })
//   console.log("response => ", response)
  if(response.ok) {
    const updatedSpot = await response.json();
    //   console.log("data ===> ", spot)
    dispatch(actionUpdateSpot(updatedSpot));
    return updatedSpot
  }
  return await response.json();
};


//DELETE thunk

export const thunkDeleteSpot = (spotId, history) => async (dispatch) => {
    // console.log("inside Thunk", spotId)
    const response = await csrfFetch(`/api/spots/${spotId}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        const deletedSpot = response.json()
        dispatch(actionDeleteSpot(spotId));
        history.push('/')
        return deletedSpot;
    }
    return response.json();
};


//todo reducer

const spotReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case CREATE_SPOT:
            return {
                ...state,
                [action.spot.id]: action.spot, 
                // images: {...action.image}
            };
        case GET_SPOTS:
            newState = {...state}
            action.spots.forEach(spot => {
                newState[spot.id] = spot
            })
            return newState;
        case UPDATE_SPOT:
            return {
            ...state,
            [action.spot.id]: action.spot
            };
        case DELETE_SPOT:
            newState = { ...state };
            delete newState[action.spotId];
            return newState;
        default:
            return state;
    }
};

export default spotReducer;