import materializeCSS from "materialize-css/dist/css/materialize.min.css";

import React from "react";

import { createRoot } from "react-dom/client";
// import ReactDOM from "react-dom";
import { Provider } from "react-redux"; //This ensures that the react-redux library is available
//to every single component of the react app
import { createStore, applyMiddleware } from "redux";

import reduxThunk from "redux-thunk";

import App from "./components/App";

import reducers from "./reducers";

import axios from "axios";

window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

console.log("STRIPE KEY IS", process.env.REACT_APP_STRIPE_KEY);
console.log("ENVIRONMENT IS", process.env.NODE_ENV);
