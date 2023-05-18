import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Dropdown from "./Dropdown";

const Nav = () => {
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

  return <>{windowSize.width > 576 ? <Sidebar /> : <Dropdown />}</>;
};

export default Nav;
