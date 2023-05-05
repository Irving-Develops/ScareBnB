import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import * as sessionActions from "./store/session";
import Home from "./pages/Home";
import RootLayout from "./components/RootLayout";
import Login from "./pages/Login";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const sessionUser = useSelector(state => state.session.user);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  console.log(sessionUser)

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={isLoaded ? <Home /> : <>Loading</>}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Route>
  ))

  return (
    <> 
    <RouterProvider router={router} />
    </>
  );
}

export default App;