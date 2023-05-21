import React from "react";

//==== Image, Icon ====//
import image2 from "../../../assets/image2.jpg";

//==== Components ====//
import {
  Wrapper,
  ItemDetail,
  Date,
} from "../../../style/body/RecentActivity Section/RecentActivityItemStyle";

const RecentActivityItem = ({ windowSize }) => {
  return (
    <Wrapper>
      <img src={image2} alt="name" />
      <ItemDetail>
        <span className="name">name</span>
        {windowSize.width <= 992 ? <Date>2023-05-21</Date> : null}
        <small>블라블라브ㅇㅁㄴㄴㅇㅁㅁㄴㅇㅁㄴㅇㅁㅇㄴ,ㄹ라</small>
      </ItemDetail>
      {windowSize.width > 992 ? <Date>2023-05-21</Date> : null}
    </Wrapper>
  );
};

export default RecentActivityItem;
