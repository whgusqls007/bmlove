import React, { useEffect, useState } from "react";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  format,
} from "date-fns";

//==== Components ====//
import {
  Wrapper,
  Row,
  Col,
  Cell,
  ValidDate,
  NotValidDate,
} from "../../../style/body/Calendar Section/CalendarBodyStyle";

const getRows = (curMonth, setSelectedDate, setRows) => {
  const monthStart = startOfMonth(curMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = "";

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, "d");
      const cloneDay = day;
      days.push(
        <Cell key={day}>
          {format(curMonth, "M") !== format(day, "M") ? (
            <NotValidDate>{formattedDate}</NotValidDate>
          ) : (
            <ValidDate
              onClick={() => setSelectedDate(cloneDay)}
              date={i}
            >
              {formattedDate}
            </ValidDate>
          )}
        </Cell>
      );
      day = addDays(day, 1);
    }
    rows.push(<Col key={day}>{days}</Col>);
    days = [];
  }
  setRows(rows);
};

const CalendarBody = ({ curMonth, setSelectedDate }) => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    getRows(curMonth, setSelectedDate, setRows);
  }, [curMonth, setSelectedDate]);

  return (
    <Wrapper>
      {rows.map((e, i) => (
        <Row key={i}>{e}</Row>
      ))}
    </Wrapper>
  );
};

export default CalendarBody;
