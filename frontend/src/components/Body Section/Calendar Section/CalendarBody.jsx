import React, { useEffect, useState } from "react";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  format,
} from "date-fns";
import { useDispatch, useSelector } from "react-redux";

//==== Components ====//
import {
  Wrapper,
  Row,
  Col,
  Cell,
  ValidDate,
  NotValidDate,
  Exist,
  NotExist,
} from "../../../style/body/Calendar Section/CalendarBodyStyle";

const getRows = (curMonth, setSelectedDate, setRows, monthSchedules) => {
  const monthStart = startOfMonth(curMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = "";
  let isExist = false;

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, "d");
      const cloneDay = day;

      if (monthSchedules[format(cloneDay, "yyyy-MM-dd")] !== undefined) {
        isExist = true;
      } else {
        isExist = false;
      }

      days.push(
        <Cell key={day}>
          {format(curMonth, "M") !== format(day, "M") ? (
            <NotValidDate>
              {formattedDate}
              <NotExist />
            </NotValidDate>
          ) : (
            <ValidDate
              onClick={() => setSelectedDate(cloneDay)}
              date={i}
              exist={isExist}
            >
              {formattedDate}
              {isExist ? <Exist /> : <NotExist />}
              <p>{monthSchedules[format(cloneDay, "yyyy-MM-dd")]}</p>
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
  const dispatch = useDispatch();
  const { monthSchedules } = useSelector((state) => state.schedule);

  useEffect(() => {
    getRows(curMonth, setSelectedDate, setRows, monthSchedules);
  }, [curMonth, setSelectedDate, dispatch, monthSchedules]);

  return (
    <Wrapper>
      {rows.map((e, i) => (
        <Row key={i}>{e}</Row>
      ))}
    </Wrapper>
  );
};

export default CalendarBody;
