import React from "react";
import Sidebar from "./Sidebar";
import Dropdown from "./TopBar";

const Nav = ({ view, setView, windowSize }) => {
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
