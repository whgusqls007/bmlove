import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//==== Components ====//
import {
  Wrapper,
  Main,
} from "../../../style/body/Schedule Section/ScheduleStyle";
import Heading from "../Heading";
import Item from "./ScheduleItem";
import { getScheduleAction } from "../../../api/scheduleApi/scheduleAction";

const Schedule = () => {
  const dispatch = useDispatch();
  const { schedules } = useSelector((state) => state.schedule);

  useEffect(() => {
    dispatch(getScheduleAction());
  }, [dispatch]);

  return (
    <Wrapper>
      <Heading title={"일정"} showIcon={false} />
      <Main>
        {schedules.map((e, i) => (
          <Item key={i} date={e.date} title={e.title} />
        ))}
      </Main>
    </Wrapper>
  );
};

export default Schedule;
