import React from "react";
import Listing from "../../components/Body Section/Listing Section/Listing";
import Activity from "../../components/Body Section/Activity Section/Activity";
import { Wrapper, Contents } from "../../style/body/BodyStyle";
import Top from "./Top";

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
