import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// Tailwind CSS
import "./index.css";

// pages
import Top from "./pages/Top.tsx"
import Details from "./pages/Details.tsx"
import DetailsId from "./pages/DetailsId.tsx"
import Mypage from "./pages/Mypage.tsx"
import Tutorial from "./pages/Tutorial.tsx"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Top />} />
          <Route path="/details" element={<Details />} />
          <Route path="/details/id" element={<DetailsId />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/tutorial" element={<Tutorial />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
);