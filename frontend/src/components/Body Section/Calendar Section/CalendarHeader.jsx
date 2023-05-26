import React from "react";
import { format } from "date-fns";

//==== Images, Icons ====//
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";

//==== Components ====//
import {
  Wrapper,
  HeaderMonth,
  Month,
  Buttons,
  HeaderDate,
  Date,
} from "../../../style/body/Calendar Section/CalendarHeaderStyle";

//==== Calendar Data ====//
const data = ["일", "월", "화", "수", "목", "금", "토"];

const CalendarHeader = ({ curMonth, prevMonth, nextMonth }) => {
  return (
    <Wrapper>
      <HeaderMonth>
        <Month>
          <h1>{format(curMonth, "dd")} 일</h1>
          <h1>{format(curMonth, "M")} 월</h1>
          <span>{format(curMonth, "yyyy")} 년</span>
        </Month>
        <Buttons>
          <button onClick={prevMonth}>
            <AiOutlineCaretLeft className="icon" />
          </button>
          <button onClick={nextMonth}>
            <AiOutlineCaretRight className="icon" />
          </button>
        </Buttons>
      </HeaderMonth>
      <HeaderDate>
        {data.map((e, i) => (
          <Date key={i} date={i}>
            {e}
          </Date>
        ))}
      </HeaderDate>
    </Wrapper>
  );
};

export default CalendarHeader;
