import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import * as sessionActions from "./store/session";
import Home from "./pages/Home";
import Van from "./pages/Van";
import RootLayout from "./components/RootLayout";
import Booking from "./components/Booking";
import Book from "./pages/Book";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);


  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={isLoaded ? <Home /> : <>Loading</>}></Route>
      <Route path={`/vans/:id`} element={isLoaded ? <Van/> : <>Loading</>}></Route>
      <Route path={`/book/:id`} element={isLoaded ? <Book/> : <>Loading</>}></Route>
      <Route  path="/test" element={<Booking/>}></Route>
    </Route>
  ))

  return (
    <> 
    <RouterProvider router={router} />
    </>
  );
}

export default App;