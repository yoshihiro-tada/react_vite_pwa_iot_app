import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// Tailwind CSS
import "./index.css";

// pages
import Top from "./pages/Top.tsx"
import Details from "./pages/Details.tsx"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Top />} />
          <Route path="/details" element={<Details />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
);