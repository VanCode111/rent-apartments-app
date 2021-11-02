import React, { useState } from "react";
import styles from "./DateRangePicker.module.scss";
import Calendar from "../Calendar/Calendar";
import Button from "../UI/Button/Button";
import ArrowIcon from "../UI/Icons/ArrowIcon";

let dayMode;
const DateRangePicker = ({
  selectDayMode,
  selectStart,
  selectStartDate,
  selectEndDate,
}) => {
  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth() + 1);
  dayMode = selectDayMode;
  const clickDayHandle = (date) => {
    if (dayMode) {
      selectStart(date, true);
    } else {
      selectStart(date, false);
    }
  };

  const changeMonthHandle = (direction) => {
    setCurrentMonth((prev) => prev + direction);
  };
  return (
    <div className={styles.dateRangePicker}>
      <div className={styles.dateRangePicker__calendars}>
        <Button
          type="circleShadow"
          width={30}
          height={30}
          onClick={() => changeMonthHandle(-1)}
          className={styles.dateRangePicker__buttonLeft}
        >
          <ArrowIcon />
        </Button>
        <Button
          type="circleShadow"
          width={30}
          height={30}
          onClick={() => changeMonthHandle(1)}
          className={styles.dateRangePicker__buttonRight}
        >
          <ArrowIcon />
        </Button>
        <Calendar
          month={currentMonth}
          clickDay={clickDayHandle}
          selectStartDay={selectStartDate}
          selectEndDay={selectEndDate}
          year={new Date(
            currentDate.getFullYear(),
            currentMonth - 1
          ).getFullYear()}
        />
        <Calendar
          month={currentMonth + 1}
          clickDay={clickDayHandle}
          selectStartDay={selectStartDate}
          selectEndDay={selectEndDate}
          year={new Date(currentDate.getFullYear(), currentMonth).getFullYear()}
        />
      </div>
    </div>
  );
};

export default DateRangePicker;
