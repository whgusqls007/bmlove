import React from "react";

//==== Components ====//
import { Wrapper, Contents } from "../../style/body/BodyStyle";
import Top from "../../components/Body Section/Top";
import PhotoList from "../../components/Body Section/PhotoList Section/PhotoList";
import RecentActivity from "../../components/Body Section/RecentActivity Section.jsx/RecentActivity";

const Body = ({ windowSize }) => {
  return (
    <Wrapper>
      <Top />
      <Contents>
        <PhotoList />
        <RecentActivity windowSize={windowSize} />
      </Contents>
    </Wrapper>
  );
};

export default Body;
