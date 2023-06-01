import {csrfFetch} from './csrf';

const GET_FAVORITES = 'favorites/GET_FAVORITES'
const ADD_FAVORITE = 'favorite/ADD_FAVORITE'
const DELETE_FAVORITE = 'favorite/DELETE_FAVORITE'

const getFavorites = (favorites) => {
    return {
        type: GET_FAVORITES,
        favorites
    }
}

const addFavorite = (favorite) => {
    return {
        type: ADD_FAVORITE,
        favorite
    }
}

const deleteFavorite = (favorite) => {
    return {
        type: DELETE_FAVORITE,
        favorite
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

export const addFavoriteThunk = (favorite) => async (dispatch) => {
    const res = await csrfFetch(`/api/favorites/${favorite.spotId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(favorite)
    })

    if(res.ok) {
        const favorite = await res.json()
        dispatch(addFavorite(favorite))
        return favorite
    }
}

export const deleteFavoriteThunk = (favorite) => async (dispatch) => {
    const res = await csrfFetch(`/api/favorites/${favorite.id}`, {
        method: 'DELETE',
    })

    if(res.ok) {
        const favorite = await res.json()
        dispatch(deleteFavorite(favorite))
        return favorite
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
        case ADD_FAVORITE: 
            newState[action.favorite.id] = action.favorite
            return newState;
        case DELETE_FAVORITE:
            delete newState[action.favorite.id]
            return newState;
        default:
            return state
    }
} 