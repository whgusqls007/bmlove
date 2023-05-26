import React from "react";
import { Link } from "react-router-dom";

import { Wrapper, MenuTitle, Menu } from "../../style/nav/TopBarStyle";

import { IoMdSpeedometer } from "react-icons/io";
import { MdDeliveryDining, MdOutlineExplore } from "react-icons/md";
import { BsTrophy } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
const Dropdown = ({ view, setView }) => {
  return (
    <Wrapper>
      <Menu>
        <MenuTitle>
          <h3>QUICK MENU</h3>
          <GiHamburgerMenu
            className="icon"
            onClick={() => {
              setView(!view);
            }}
          />
        </MenuTitle>
        {view ? (
          <ul>
            <li>
              <Link to="">
                <IoMdSpeedometer className="icon" />
                <span>홈</span>
              </Link>
            </li>
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
        ) : null}
      </Menu>
      {/* <GiHamburgerMenu className="icon" onClick={() => setView(!view)} />
      {view ? (
        <DropdownWrapper>
          <Menu>
            <h3>QUICK MENU</h3>
            <ul>
              <li>
                <Link to="">
                  <IoMdSpeedometer className="icon" />
                  <span>홈</span>
                </Link>
              </li>

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
                <a href="">
                  <MdOutlineExplore className="icon" />
                  <span>메뉴아이템</span>
                </a>
              </li>

              <li>
                <a href="">
                  <BsTrophy className="icon" />
                  <span>메뉴아이템</span>
                </a>
              </li>
            </ul>
          </Menu>
          <Menu></Menu>
        </DropdownWrapper>
      ) : null} */}
    </Wrapper>
  );
};

export default Dropdown;
