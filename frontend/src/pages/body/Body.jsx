import React from "react";
import Top from "../../components/Body Section/Top Section/Top";
import Listing from "../../components/Body Section/Listing Section/Listing";
import Activity from "../../components/Body Section/Activity Section/Activity";
import { Wrapper, Contents } from "../../style/body/body";

const Body = () => {
  return (
    <Wrapper>
      <Top />
      <Contents>
        <Listing />
        <Activity />
      </Contents>
    </Wrapper>
  );
};

export default Body;
