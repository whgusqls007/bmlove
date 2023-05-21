import React from "react";

//==== Components ====//
import {
  Wrapper,
  Main,
} from "../../../style/body/RecentActivity Section/RecentActivityStyle";
import Heading from "../Heading";
import Item from "./RecentActivityItem";

const RecentActivity = ({ windowSize }) => {
  return (
    <Wrapper>
      <Heading title={"최근 활동"} />
      <Main>
        <Item windowSize={windowSize} />
        <Item windowSize={windowSize} />
        <Item windowSize={windowSize} />
        <Item windowSize={windowSize} />
      </Main>
    </Wrapper>
  );
};

export default RecentActivity;
