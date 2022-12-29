import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/style.scss";
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.querySelector("app-root"));

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);
