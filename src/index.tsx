import { StrictMode } from "react";
import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./App/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
// hello
