import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ModalProvider } from "./context/Modal";
import store from "./store";
import configureStore from "./store";
import { restoreCSRF, csrfFetch } from "./store/csrf";
import * as sessionActions from "./store/session";
import { ThemeProvider } from "@material-tailwind/react";
import {createRoot} from 'react-dom/client'
import { Application } from "react-rainbow-components";

// const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  restoreCSRF();

  window.csrfFetch = csrfFetch;
  window.store = store;
  window.sessionActions = sessionActions;
}

const theme = {
  rainbow: {
    palette: {
      brand: "#000000",
    },
  },
};

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <ModalProvider>
          <Application theme={theme}>
            <App />
          </Application>
        </ModalProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
