import React from "react";

//==== Images, Icons ====//
import image2 from "../../../assets/image2.jpg";

//==== Components ====//
import { Wrapper } from "../../../style/body/PhtoList Section/PhotoListItemStyle";

const Item = () => {
  return (
    <Wrapper>
      <img src={image2} alt="name" />
      <h3>여기다 사진 보여주기</h3>
    </Wrapper>
  );
};

export default Item;
