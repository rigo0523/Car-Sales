import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";

import "bulma/css/bulma.css";
import "./styles.scss";
import { reducer } from "./reducers";

const store = createStore(reducer);
console.log(store.getState(), "store STATE");

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
