import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AppRoutes } from "./router/router.jsx";
import { Provider } from "react-redux";
import { store } from "./components/store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
     <AppRoutes/>
    </Provider>
  </React.StrictMode>
);
