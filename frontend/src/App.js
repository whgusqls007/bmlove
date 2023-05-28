import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

//==== Components ====//
import Nav from "./components/Nav/Nav";
import Body from "./pages/body/Body";
import Board from "./components/Board Section/Board";
import Picture from "./components/Picture Section/Picture";

//==== Images, Icons ====//
import { AiFillHeart } from "react-icons/ai";

const App = () => {
  const [view, setView] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [mouseLocation, setMouseLocation] = useState({ x: 0, y: 0 });

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
      onPointerMove={(e) => setMouseLocation({ x: e.clientX, y: e.clientY })}
    >
      <AiFillHeart
        style={{
          position: "absolute",
          left: mouseLocation.x,
          top: mouseLocation.y,
          zIndex: 10000,
          color: "red",
        }}
      />
      <Nav view={view} setView={setView} windowSize={windowSize} />
      <Routes>
        <Route path="" element={<Body windowSize={windowSize} />} />
        <Route path="/board" element={<Board />} />
        <Route path="/picture" element={<Picture />} />
      </Routes>
    </div>
  );
};

export default App;
