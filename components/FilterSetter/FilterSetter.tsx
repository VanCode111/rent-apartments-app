import React, { useState } from "react";
import styles from "./FilterSetter.module.scss";
import Button from "../UI/Button/Button";
import SearchIcon from "../../assets/img/search.svg";
import Image from "next/image";
import DropDown from "../../components/UI/DropDown/DropDown";
import DateRangePicker from "../DateRangePicker/DateRangePicker";
import FilterSetterItem from "./FIlterlSetterItem/FilterSetterItem";

const FilterSetter = () => {
  const [travelIsOpen, setTravelIsOpen] = useState(false);
  const [timeMode, setTimeMode] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const setDateHandle = (date, mode) => {
    const day = date.getDate();
    if (mode) {
      setStartDate(date);
      setTimeMode((prev) => !prev);
    } else {
      setEndDate(date);
    }
  };

  function getMonthByNumber(number) {
    const today = new Date(0, number, 0);
    return today.toLocaleString("default", { month: "long" });
  }

  const setTimeHandle = (mode) => {
    setTimeMode(mode);
    setTravelIsOpen(true);
  };

  return (
    <div className={styles.filterSetter}>
      <FilterSetterItem
        onClick={() => console.log("")}
        className={styles.filterSetter__select}
        title="Количество комнат"
        desc="1, 2 комн."
      ></FilterSetterItem>
      <DropDown
        clickOutside={() => {
          setTravelIsOpen(false);
          setTimeMode(null);
        }}
        className={
          styles.filterSetter__select + " " + styles.filterSetter__selectMiddle
        }
        open={travelIsOpen}
        content={
          <DateRangePicker
            startDate={startDate}
            endDate={endDate}
            selectStart={setDateHandle}
            selectDayMode={timeMode}
          />
        }
      >
        <FilterSetterItem
          onClick={() => setTimeHandle(true)}
          active={timeMode}
          className={styles.filterSetter__select}
          value={
            startDate
              ? startDate?.getDate() + " " + startDate?.getMonth()
              : null
          }
          title="Выезд"
          desc="Когда?"
        ></FilterSetterItem>
        <FilterSetterItem
          onClick={() => setTimeHandle(false)}
          active={timeMode === false}
          className={
            styles.filterSetter__select +
            " " +
            (timeMode === false ? styles.active : "")
          }
          value={
            endDate
              ? endDate?.getDate() +
                " " +
                getMonthByNumber(endDate?.getMonth() + 1).slice(0, 3)
              : null
          }
          title="Выезд"
          desc="Когда?"
        ></FilterSetterItem>
      </DropDown>

      <FilterSetterItem
        onClick={() => console.log("")}
        className={styles.filterSetter__select}
        title="Количество гостей"
        desc="Кто едет?"
      ></FilterSetterItem>
      <Button
        className={styles.filterSetter__btn}
        type="circle"
        href="/search?visitors=2"
        width={60}
        height={60}
      >
        <Image src={SearchIcon} width="20" height="20"></Image>
      </Button>
    </div>
  );
};

export default FilterSetter;
