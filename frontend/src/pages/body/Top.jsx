import React from "react";

import { BiSearchAlt } from "react-icons/bi";
import { BsArrowRightShort, BsQuestionCircle } from "react-icons/bs";
import { TbMessageCircle } from "react-icons/tb";
import { MdOutlineNotificationsNone } from "react-icons/md";

import user from "../../assets/BM.png";
import image from "../../assets/image1.jpg";
import video from "../../assets/video.mp4";
import {
  Container,
  Header,
  Title,
  SearchBar,
  User,
  Main,
  VideoBox,
  Buttons,
  RightCard,
  LeftCardContainer,
  LeftCard,
  Text,
  ImageBox,
} from "../../style/body/TopStyle";

const Top = () => {
  return (
    <Container>
      <Header>
        <Title>
          <h1>Welcome to BMLOVE</h1>
          <p>안녕 수민아 ㅎㅎ</p>
        </Title>

        <SearchBar>
          <input
            type="text"
            placeholder="search"
            onBlur={() => console.log(1)}
          />
          <BiSearchAlt className="icon" />
        </SearchBar>

        <User>
          <TbMessageCircle className="icon" />
          <MdOutlineNotificationsNone className="icon" />
          <div className="userImage">
            <img src={user} alt="userName" />
          </div>
        </User>
      </Header>

      <Main>
        <RightCard>
          <h1>게시판 최근 게시물 올리면 될듯</h1>
          <p>블라블라블라블라블라블라블라블라블라블라블라블라</p>

          <Buttons>
            <button className="btn">무슨 버튼 1번</button>
            <button className="btn transparent">무슨 버튼 2번</button>
          </Buttons>

          <VideoBox>
            <video src={video} autoPlay loop muted></video>
          </VideoBox>
        </RightCard>
        <LeftCardContainer>
          <LeftCard>
            <Text>
              <h1>수민 ❤️ 현빈</h1>

              <div className="flex">
                <span>
                  처음 사귄날
                  <br />
                  <small>2022.08.24</small>
                </span>
                <span>
                  지금까지 몇일
                  <br />
                  <small>266일</small>
                </span>
              </div>
            </Text>
          </LeftCard>
          <ImageBox>
            <img src={image} alt="img" />
          </ImageBox>
        </LeftCardContainer>
      </Main>
    </Container>
  );
};

export default Top;
