import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Resume from "./components/Resume/Resume";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="curriculo" element={<Resume />} />
    </Routes>
  </BrowserRouter>
);
