// import {csrfFetch} from './csrf'

// const GET_REVIEWS = 'reviews/GET_REVIEWS'
// const ADD_REVIEW = 'review/ADD_REVIEW'
// const EDIT_REVIEW = 'review/EDIT_REVIEW'
// const DELETE_REVIEW = 'review/DELETE_REVIEW'

// const getReviews = (reviews) => {
//     return {
//         type: GET_REVIEWS,
//         reviews
//     }
// }

// const addReview = (review) => {
//     return {
//         type: ADD_REVIEW,
//         review
//     }
// }

// const editReview = (review) => {
//     return {
//         type: EDIT_REVIEW,
//         review
//     }
// }

// const deleteReview = (review) => {
//     return {
//         type: DELETE_REVIEW,
//         review
//     }
// }

// export const getReviewsThunk = (spotId) => async(dispatch) => {

//     try {
//         const res = await csrfFetch(`/api/reviews/${spotId}`, {
//             method: 'GET'
//         })
//         if(res.ok) {
//             const reviews = await res.json()
//             dispatch(getReviews(reviews))
//             return reviews
//         }

//     } catch (err) {
//         return err.message
//     }

// }

// export const addReviewThunk = (review) => async(dispatch) => {
//     try {
//         const res = await csrfFetch(`/api/reviews`, {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(review)
//         })

//         if(res.ok) {
//             let review = await res.json();
//             dispatch(addReview(review))
//             return review
//         }

//     }catch(err) {
//         return err.message
//     }

// }

// export const editReviewThunk = (review, reviewId) => async (dispatch) => {
//     try {
//         const res = await csrfFetch(`/api/reviews/${reviewId}`, {
//             method: 'PUT',
//             headers: { 'Content-Type': 'application/json'},
//             body: JSON.stringify(review)
//         })
//         if(res.ok) {
//             let editedReview = await res.json();
//             dispatch(editReview(editedReview))
//             return review
//         }
//     }catch(err) {
//         return err.message
//     }
// }

// export const deleteReviewThunk = (reviewId) => async(dispatch) => {

//     try {
//         const res = await csrfFetch(`/api/reviews/${reviewId}`, {
//             method: 'DELETE'
//         })

//         if(res.ok) {
//             let review = await res.json();
//             await dispatch(deleteReview(review))
//             return review
//         }
//     }catch(err) {
//         return err.message
//     }
// }

//  const reviews = (state = {}, action) => {
//      let newState = {...state};
//      switch(action.type) {
//         case GET_REVIEWS:
//             action.reviews.forEach(review => {
//                 newState[review.id] = review
//             })
//             return newState;
//         case ADD_REVIEW:
//            newState[action.review.id] = action.review
//             return newState
//         case EDIT_REVIEW:
//             newState[action.review.id] = action.review
//             return newState
//         case DELETE_REVIEW:
//             delete newState[action.review.id]
//             return newState
//         default:
//             return state
//    }

//  }

//  export default reviews

import { csrfFetch } from "./csrf";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getReviews = createAsyncThunk(
  "reviews/getReviews",
  async (spotId) => {
    console.log("spotId", spotId)
    const response = await csrfFetch(`/api/reviews/${spotId}`);
    const data = await response.json();


    if (!response.ok) {
      throw new Error(data.message || "Failed to get vans");
    }

    return data;
  }
);

export const reviewSlice = createSlice({
  name: "reviews",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getReviews.fulfilled, (state, action) => {
      return action.payload;
    })
  },
});
