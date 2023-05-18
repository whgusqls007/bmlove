import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Nav from "./components/Nav Section/Nav";
import Body from "./pages/body/Body";
import Board from "./components/Board Section/Board";
import Picture from "./components/Picture Section/Picture";

const App = () => {
  return (
    <div className="container">
      <Nav />
      <Routes>
        <Route path="" element={<Body />} />
        <Route path="/board" element={<Board />} />
        <Route path="/picture" element={<Picture />} />
      </Routes>
    </div>
  );
};

export default App;
