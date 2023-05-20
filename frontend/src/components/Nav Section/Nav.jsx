import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Dropdown from "./Dropdown";

const Nav = ({ view, setView }) => {
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
    <>
      {windowSize.width > 576 ? (
        <Sidebar />
      ) : (
        <Dropdown view={view} setView={setView} />
      )}
    </>
  );
};

export default Nav;
