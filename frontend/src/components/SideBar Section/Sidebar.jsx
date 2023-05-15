import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

import logo from "../../assets/BM.png";

import { IoMdSpeedometer } from "react-icons/io";
import { AiOutlinePieChart } from "react-icons/ai";
import { MdDeliveryDining, MdOutlineExplore } from "react-icons/md";
import { BsQuestionCircle, BsTrophy } from "react-icons/bs";

const Sidebar = () => {
    return (
        <div className="sideBar grid">
            <Link to="" className="logoDiv flex">
                <img src={logo} alt="Image Name" />
                <h2>BMLOVE</h2>
            </Link>

            <div className="menuDiv">
                <h3 className="divTitle">QUICK MENU</h3>
                <ul className="menuLists grid">
                    <li className="listItem">
                        <Link to="/board" className="menuLink flex">
                            <IoMdSpeedometer className="icon" />
                            <span className="smallText">게시판</span>
                        </Link>
                    </li>

                    <li className="listItem">
                        <Link to="/picture" className="menuLink flex">
                            <MdDeliveryDining className="icon" />
                            <span className="smallText">사진</span>
                        </Link>
                    </li>

                    <li className="listItem">
                        <a href="" className="menuLink flex">
                            <MdOutlineExplore className="icon" />
                            <span className="smallText">메뉴아이템</span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="" className="menuLink flex">
                            <BsTrophy className="icon" />
                            <span className="smallText">메뉴아이템</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="menuDiv">
                <h3 className="divTitle">SETTINGS</h3>
                <ul className="menuLists grid">
                    <li className="listItem">
                        <a href="" className="menuLink flex">
                            <AiOutlinePieChart className="icon" />
                            <span className="smallText">메뉴아이템</span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="" className="menuLink flex">
                            <MdDeliveryDining className="icon" />
                            <span className="smallText">메뉴아이템</span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="" className="menuLink flex">
                            <MdOutlineExplore className="icon" />
                            <span className="smallText">메뉴아이템</span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="" className="menuLink flex">
                            <BsTrophy className="icon" />
                            <span className="smallText">메뉴아이템</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="sideBarCard">
                <BsQuestionCircle className="icon" />
                <div className="cardContent">
                    <div className="circle1"></div>
                    <div className="circle2"></div>
                    <h3>로그인 만들어야지 여기에</h3>
                    <p>카카오 로그인 구현할 자리</p>
                    <button className="btn">로그인 버튼 ㄱㄱ</button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
