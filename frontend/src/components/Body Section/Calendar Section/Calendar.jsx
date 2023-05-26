import React, { useState, useEffect } from "react";
import { subMonths, addMonths } from "date-fns";

//==== Components ====//
import { Wrapper } from "../../../style/body/Calendar Section/CalendarStyle";
import CalendarHeader from "./CalendarHeader";
import Heading from "../Heading";
import CalendarBody from "./CalendarBody";

const Calendar = () => {
  const [curMonth, SetCurMonth] = useState(new Date());
  const [selectedDate, SetSelectedDate] = useState(new Date());

  const prevMonth = () => {
    SetCurMonth(subMonths(curMonth, 1));
  };

  const nextMonth = () => {
    SetCurMonth(addMonths(curMonth, 1));
  };

  useEffect(() => {
    alert(selectedDate);
  }, [selectedDate]);

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
