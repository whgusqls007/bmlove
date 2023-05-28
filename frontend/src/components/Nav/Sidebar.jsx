import React from "react";
import { Link } from "react-router-dom";

//==== Images, Icons ====//
import logo from "../../assets/BM.png";
import { BsTrophy } from "react-icons/bs";
import {
  AiOutlineCalendar,
  AiOutlinePicture,
  AiOutlineRead,
} from "react-icons/ai";

//==== Components ====//
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
              <AiOutlineRead className="icon" />
              <span>게시판</span>
            </Link>
          </li>

          <li>
            <Link to="/picture">
              <AiOutlinePicture className="icon" />
              <span>사진</span>
            </Link>
          </li>

          <li>
            <Link to="">
              <AiOutlineCalendar className="icon" />
              <span>일정</span>
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
    </Wrapper>
  );
};

export default Sidebar;
