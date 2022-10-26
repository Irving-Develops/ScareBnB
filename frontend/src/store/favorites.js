import {csrfFetch} from './csrf';

const GET_FAVORITES = 'favorites/GET_FAVORITES'

const getFavorites = (favorites) => {
    return {
        type: GET_FAVORITES,
        favorites
    }
}

export const getFavoritesThunk = (userId) => async (dispatch) => {
    const res = await csrfFetch(`/api/favorites/${userId}`)

    if(res.ok) {
        let favorites = await res.json();
        dispatch(getFavorites(favorites))
        return favorites
    }
}

export default function favorites(state = {}, action){
    let newState = state
    switch(action.type) {
        case GET_FAVORITES:
            action.favorites.forEach(favorite => {
                newState[favorite.id] = favorite
            })
            return newState;
        default:
            return state
    }
} 