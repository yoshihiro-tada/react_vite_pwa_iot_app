import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// Reset CSS
import "./reset.css";
// Tailwind CSS
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
