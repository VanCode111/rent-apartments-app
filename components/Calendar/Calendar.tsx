import React, { useEffect, useState } from "react";
import styles from "./Calendar.module.scss";
import classNames from "class-names";

interface CalendarTypes {
  month: number;
  year: number;
  clickDay: (currentDate: Date) => void;
  selectStartDay: Date;
  selectEndDay: Date;
}

const Calendar: React.FC<CalendarTypes> = ({
  year,
  month,
  clickDay,
  selectStartDay,
  selectEndDay,
}) => {
  const [monthDays, setMonthDays] = useState([]);
  let todayDate;
  const weeks = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  let dayWeek = new Date(2021, month - 1, 1).getDay();
  dayWeek = dayWeek == 0 ? 6 : dayWeek - 1;
  const countDays = 32 - new Date(year, month - 1, 32).getDate();
  let currentMonth = getMonthByNumber(month);
  currentMonth =
    currentMonth[0].toUpperCase() + currentMonth.slice(1, currentMonth.length);

  function getMonthByNumber(number) {
    const today = new Date(0, number, 0);
    return today.toLocaleString("default", { month: "long" });
  }

  const setTodayDate = () => {
    let todayDate = new Date();
    const todayYear = todayDate.getFullYear();
    const todayMonth = todayDate.getMonth();
    const todayDay = todayDate.getDate();
    todayDate = new Date(todayYear, todayMonth, todayDay);
    return todayDate;
  };

  todayDate = setTodayDate();

  useEffect(() => {
    const setDays = () => {
      const dates = [];
      for (let i = 1; i <= countDays + dayWeek; i++) {
        const currentDate = new Date(year, month - 1, i - dayWeek);
        console.log(currentDate, todayDate);
        dates.push(
          <div
            onClick={() => clickDay(currentDate)}
            key={i}
            className={classNames(styles.dateRangePicker__dayItem, {
              [styles.disabled]: +todayDate > +currentDate,
              [styles.selectStart]: +selectStartDay == +currentDate,
              [styles.selectEnd]: +selectEndDay == +currentDate,
              [styles.middle]:
                currentDate >= selectStartDay &&
                currentDate <= selectEndDay &&
                selectEndDay &&
                selectStartDay,
            })}
          >
            <p className={styles.dateRangePicker__dayItemNumber}>
              {i - dayWeek < 1 ? "" : i - dayWeek}
            </p>
          </div>
        );
      }
      setMonthDays(dates);
    };

    setDays();
  }, [month, selectStartDay, selectEndDay]);

  return (
    <div className={styles.dateRangePicker}>
      <p className={styles.dateRangePicker__month}>
        {currentMonth} {year} г.
      </p>
      <div className={styles.dateRangePicker__weeks}>
        {weeks.map((item, index) => {
          return (
            <div className={styles.dateRangePicker__weeksItem} key={index}>
              {item}
            </div>
          );
        })}
      </div>
      <div className={styles.dateRangePicker__dates}>{monthDays}</div>
    </div>
  );
};

export default Calendar;
