import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import HomePageSpots from "./components/HomePage";
import SpotComponent from "./components/SpotPage/SpotComponent";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import MyBookings from "./components/Bookings/MyBookings";
import GetReviews from "./components/Reviews/GetReviews"
import GetFavorites from "./components/Favorites/GetFavorites"
import ReactDates from "./react-dates"

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const sessionUser = useSelector(state => state.session.user);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <HomePageSpots />
            <ReactDates />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          {sessionUser && (
          <Route exact path="/spots/:spotId">
            <SpotComponent />
          </Route>
          )}
          <Route exact path="/my-trips">
            <MyBookings />
          </Route>
          <Route exact path="/spots/:spotId">
              <h2>PLEASE LOGIN</h2>
          </Route>
          <Route exact path ='/reviews'>
            <GetReviews />
          </Route>
          <Route exact path="/test">
            <GetFavorites />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;