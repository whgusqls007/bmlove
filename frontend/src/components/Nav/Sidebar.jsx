import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/BM.png";

import { IoMdSpeedometer } from "react-icons/io";
import { MdDeliveryDining, MdOutlineExplore } from "react-icons/md";
import { BsTrophy } from "react-icons/bs";

import { Wrapper, Menu } from "../../style/nav/SideBarStyle";

const Sidebar = () => {
  return (
    <Wrapper>
      <Link to="">
        <img src={logo} alt="Name" />
        <h2>BMLOVE</h2>
      </Link>

      <Menu>
        <h3>QUICK MENU</h3>
        <ul>
          <li>
            <Link to="/board">
              <IoMdSpeedometer className="icon" />
              <span>게시판</span>
            </Link>
          </li>

          <li>
            <Link to="/picture">
              <MdDeliveryDining className="icon" />
              <span>사진</span>
            </Link>
          </li>

          <li>
            <Link to="">
              <MdOutlineExplore className="icon" />
              <span>메뉴아이템</span>
            </Link>
          </li>

          <li>
            <Link to="">
              <BsTrophy className="icon" />
              <span>메뉴아이템</span>
            </Link>
          </li>
        </ul>
      </Menu>
      <Menu></Menu>
    </Wrapper>
  );
};

export default Sidebar;
