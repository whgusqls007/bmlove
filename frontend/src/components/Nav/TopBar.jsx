import React from "react";
import { Link } from "react-router-dom";

//==== Components ====//
import { Wrapper, MenuTitle, Menu } from "../../style/nav/TopBarStyle";

//==== Icons ====//
import { BsTrophy } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  AiOutlineHome,
  AiOutlineCalendar,
  AiOutlinePicture,
  AiOutlineRead,
} from "react-icons/ai";

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
                <AiOutlineHome className="icon" />
                <span>홈</span>
              </Link>
            </li>
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
        ) : null}
      </Menu>
    </Wrapper>
  );
};

export default Dropdown;
