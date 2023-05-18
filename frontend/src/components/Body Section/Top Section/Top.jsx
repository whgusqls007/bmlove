import React from "react";
import "./top.css";

import { BiSearchAlt } from "react-icons/bi";
import { BsArrowRightShort, BsQuestionCircle } from "react-icons/bs";
import { TbMessageCircle } from "react-icons/tb";
import { MdOutlineNotificationsNone } from "react-icons/md";

import user from "../../../assets/BM.png";
import image from "../../../assets/image1.jpg";
import video from "../../../assets/video.mp4";
const Top = () => {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to BMLOVE</h1>
          <p>안녕 수민아 ㅎㅎ</p>
        </div>

        <div className="searchBar flex">
          <input type="text" placeholder="search" />
          <BiSearchAlt className="icon" />
        </div>

        <div className="adminDiv flex">
          <TbMessageCircle className="icon" />
          <MdOutlineNotificationsNone className="icon" />
          <div className="adminImage">
            <img src={user} alt="userName" />
          </div>
        </div>
      </div>
      <div className="cardSection flex">
        <div className="rightCard flex">
          <h1>게시판 최근 게시물 올리면 될듯</h1>
          <p>블라블라블라블라블라블라블라블라블라블라블라블라</p>

          <div className="buttons flex">
            <button className="btn">무슨 버튼 1번</button>
            <button className="btn transparent">무슨 버튼 2번</button>
          </div>

          <div className="videoDiv">
            <video src={video} autoPlay loop muted></video>
          </div>
        </div>

        <div className="leftCard flex">
          <div className="main flex">
            <div className="textDiv">
              <h1>우리의 정보들?</h1>

              <div className="flex">
                <span>
                  처음 사귄날
                  <br />
                  <small>2022.08.24</small>
                </span>
                <span>
                  지금까지 몇일
                  <br />
                  <small>266일 나중에 함수만들기</small>
                </span>
              </div>

              <span className="flex link">
                여긴 어떤 기능을 넣을까
                <BsArrowRightShort className="icon" />
              </span>
            </div>

            <div className="imgDiv">
              <img src={image} alt="img"></img>
            </div>

            <div className="sideBarCard">
              <BsQuestionCircle className="icon" />
              <div className="cardContent">
                <div className="circle1"></div>
                <div className="circle2"></div>
                <h3>Help Center</h3>
                <p>
                  Having trouble in BMLOVE, please content us from for more
                  questions
                </p>
                <button className="btn">Go to help center</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
