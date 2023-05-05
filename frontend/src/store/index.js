// import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// import sessionReducer from './session';
// import spotReducer from './spots'
// import bookingReducer from './bookings';
// import reviews from './reviews';
// import favorites from './favorites';

// const rootReducer = combineReducers({
//     session: sessionReducer,
//     spots: spotReducer,
//     bookingReducer,
//     reviews,
//     favorites
// });

// let enhancer;

// if (process.env.NODE_ENV === 'production') {
//     enhancer = applyMiddleware(thunk);
// } else {
//     const logger = require('redux-logger').default;
//     const composeEnhancers =
//         window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//     enhancer = composeEnhancers(applyMiddleware(thunk, logger));
// }

// const configureStore = (preloadedState) => {
//     return createStore(rootReducer, preloadedState, enhancer);
// };

// export default configureStore;

import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import sessionReducer from "./session";
import {spotSlice} from "./spots";
// import bookingReducer from "./bookings";
// import reviews from "./reviews";
// import favorites from "./favorites";

const rootReducer = {
  session: sessionReducer,
  spots: spotSlice.reducer
//   spots: spotReducer,
//   bookingReducer,
//   reviews,
//   favorites,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
