import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import axios from "axios";
import App from "./App";
import { DarkModeContextProvider } from "./Context/DarkModeContext";
import { store } from "./Redux/Store";
import { Provider as ReduxProvider } from "react-redux";

axios.defaults.baseURL = "https://api.openweathermap.org/data/2.5";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </DarkModeContextProvider>
  </React.StrictMode>
);
