import React, { useState, useEffect } from "react";
import { subMonths, addMonths } from "date-fns";
import { getScheduleOfMonthAction } from "../../../api/scheduleApi/scheduleAction";
import { startOfMonth, endOfMonth, format } from "date-fns";
import { useDispatch } from "react-redux";

//==== Components ====//
import { Wrapper } from "../../../style/body/Calendar Section/CalendarStyle";
import CalendarHeader from "./CalendarHeader";
import Heading from "../Heading";
import CalendarBody from "./CalendarBody";

const Calendar = () => {
  const [curMonth, SetCurMonth] = useState(new Date());
  const [selectedDate, SetSelectedDate] = useState(new Date());
  const dispatch = useDispatch();

  const prevMonth = () => {
    SetCurMonth(subMonths(curMonth, 1));
  };

  const nextMonth = () => {
    SetCurMonth(addMonths(curMonth, 1));
  };

  useEffect(() => {
    // alert(selectedDate);
  }, [selectedDate]);

  useEffect(() => {
    dispatch(
      getScheduleOfMonthAction({
        startDate: format(startOfMonth(curMonth), "yyyy-MM-dd"),
        endDate: format(endOfMonth(curMonth), "yyyy-MM-dd"),
      })
    );
  }, [curMonth]);

  return (
    <Wrapper>
      <Heading title="달력" showIcon={false} />
      <CalendarHeader
        curMonth={curMonth}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />
      <CalendarBody
        curMonth={curMonth}
        selectedDate={selectedDate}
        setSelectedDate={SetSelectedDate}
      />
    </Wrapper>
  );
};

export default Calendar;
