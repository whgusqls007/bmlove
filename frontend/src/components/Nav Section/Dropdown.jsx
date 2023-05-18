import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Wrapper, DropdownWrapper, Menu } from "../../style/nav/dropdown";

import { IoMdSpeedometer } from "react-icons/io";
import { MdDeliveryDining, MdOutlineExplore } from "react-icons/md";
import { BsTrophy } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
const Dropdown = () => {
  const [view, setView] = useState(false);

  return (
    <Wrapper>
      <GiHamburgerMenu className="icon" onClick={() => setView(!view)} />
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

          {/* <div className="sideBarCard">
                  <BsQuestionCircle className="icon" />
                  <div className="cardContent">
                      <div className="circle1"></div>
                      <div className="circle2"></div>
                      <h3>로그인 만들어야지 여기에</h3>
                      <p>카카오 로그인 구현할 자리</p>
                      <button className="btn">로그인 버튼 ㄱㄱ</button>
                  </div>
              </div> */}
        </DropdownWrapper>
      ) : null}
    </Wrapper>
  );
};

export default Dropdown;
