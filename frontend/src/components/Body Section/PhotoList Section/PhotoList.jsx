import React from "react";

//==== Components ====//
import {
  Wrapper,
  Main,
} from "../../../style/body/PhtoList Section/PhotoListStyle";
import Heading from "../Heading";
import Item from "./PhotoListItem";

const PhotoList = () => {
  return (
    <Wrapper>
      <Heading title={"우리 사진"} />
      <Main>
        <Item />
        <Item />
      </Main>
    </Wrapper>
  );
};

export default PhotoList;
