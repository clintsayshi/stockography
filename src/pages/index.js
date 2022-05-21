import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailView from "./detail-view";
import Home from "./home";

export default function Pages() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:id" element={<DetailView />} />
      </Routes>
    </Router>
  );
}
