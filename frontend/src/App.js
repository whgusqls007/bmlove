import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Nav from "./components/Nav Section/Nav";
import Body from "./pages/body/Body";
import Board from "./components/Board Section/Board";
import Picture from "./components/Picture Section/Picture";

const App = () => {
  const [view, setView] = useState(false);

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="container"
      onClick={() => {
        if (view === true) {
          setView(false);
        }
      }}
    >
      <Nav view={view} setView={setView} windowSize={windowSize} />
      <Routes>
        <Route
          path=""
          element={
            <Body view={view} setView={setView} windowSize={windowSize} />
          }
        />
        <Route path="/board" element={<Board />} />
        <Route path="/picture" element={<Picture />} />
      </Routes>
    </div>
  );
};

export default App;
