// import {csrfFetch} from './csrf'

// const GET_IMAGES = 'images/GET_IMAGES'

// export const getImages = (images) => {
//     return {
//         type: GET_IMAGES,
//         images
//     }
// }

// export const getImagesThunk = (spotId) => async(dispatch) => {
//     let res = await csrfFetch(`/api/images/${spotId}`)

//     if(res.ok) {
//         let images = await res.json()
//         dispatch(getImages(images))
//         return images
//     }

// }

// const imagesReducer = (state = {}, action) => {
//     let newState;
//     switch(action.type) {
//         case GET_IMAGES:
//             newState = {...state}
//             return newState;
//         default:
//         return state;
//     }
// }