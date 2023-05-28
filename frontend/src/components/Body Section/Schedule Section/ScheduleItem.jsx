import React, { useEffect, useState } from "react";
import { differenceInDays } from "date-fns";

//==== Components ====//
import {
  Wrapper,
  ScheduleDetail,
} from "../../../style/body/Schedule Section/ScheduleItemStyle";

const ScheduleItem = ({ date, title }) => {
  const [dday, setDday] = useState(0);

  useEffect(() => {
    setDday(differenceInDays(new Date(date), new Date()));
  }, [date, title]);

  return (
    <Wrapper>
      <h3>{title}</h3>
      <ScheduleDetail>
        <span>{date}</span>
        <span>{`D-${dday}`}</span>
      </ScheduleDetail>
    </Wrapper>
  );
};

export default ScheduleItem;
