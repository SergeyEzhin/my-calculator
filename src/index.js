import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import StoreProvider from "./StoreContext/StoreContext";

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);
