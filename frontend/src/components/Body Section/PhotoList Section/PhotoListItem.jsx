import React from "react";

//==== Components ====//
import { Wrapper } from "../../../style/body/PhtoList Section/PhotoListItemStyle";

const Item = ({ uri }) => {
  return (
    <Wrapper>
      <img src={`http://jhb.gonetis.com/images/image/get/${uri}`} alt={uri} />
      <h3>제목을 넣어야하나??</h3>
    </Wrapper>
  );
};

export default Item;
