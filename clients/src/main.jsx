import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducers'

import {  applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import './index.css';
import App from "./App";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})



ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
