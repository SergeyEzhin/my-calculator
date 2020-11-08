import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { Provider } from "mobx-react";
import Store from "./store/Store";

const store = { number: new Store(0) };
console.log(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider {...store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
