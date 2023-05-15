import React from "react";
import "./app.css";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/SideBar Section/Sidebar";
import Body from "./components/Body Section/Body";
import Board from "./components/Board Section/Board";

const App = () => {
    return (
        <div className="container">
            <Sidebar />
            <Routes>
                <Route path="" element={<Body />}></Route>
                <Route path="/board" element={<Board />}></Route>
            </Routes>
        </div>
    );
};

export default App;
