import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components2/SignupFormPage";
import HomePageSpots from "./components2/HomePage";
import SpotComponent from "./components2/SpotPage/SpotComponent";
import * as sessionActions from "./store/session";
import Navigation from "./components2/Navigation";
import MyBookings from "./components2/Bookings/MyBookings";
import GetReviews from "./components2/Reviews/GetReviews"
import GetFavorites from "./components2/Favorites/GetFavorites"
import Navbar from "./components/Navbar";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const sessionUser = useSelector(state => state.session.user);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
    <Switch>
    <Route exact path='/'>
      <Navbar />

    </Route>
    </Switch>
      {/* <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <HomePageSpots />
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
      )} */}
    </>
  );
}

export default App;