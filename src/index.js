import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Wrapping the app with React.StrictMode to easily catch bugs and follow the best practices.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
