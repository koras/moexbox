import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {Provider} from "mobx-react";
import App from "./App";

import {store} from './stories/store'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

 
