import React, { useState, useEffect } from "react";
import styles from "./FilterSetter.module.scss";
import Button from "../UI/Button/Button";
import SearchIcon from "../../assets/img/search.svg";
import Image from "next/image";
import Select from "../UI/Select/Selects";
import DropDown from "../../components/UI/DropDown/DropDown";
import DateRangePicker from "../DateRangePicker/DateRangePicker";
import FilterSetterItem from "./FIlterlSetterItem/FilterSetterItem";
import { YMaps, Map } from "react-yandex-maps";

const FilterSetter = () => {
  const [travelIsOpen, setTravelIsOpen] = useState(false);
  const [timeMode, setTimeMode] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [suggests, setSuggests] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [ymaps, setYmaps] = useState(null);

  const changePlaceText = async (e) => {
    const text = e.target.value;
    if (ymaps) {
      let suggests = await ymaps.suggest(text);
      console.log(suggests);
      suggests = suggests.map((item) => item.displayName);
      setSuggests(suggests);
    }
  };

  const loadSuggest = (ymaps) => {
    setYmaps(ymaps);
  };

  const setDateHandle = (date, mode) => {
    if (mode) {
      if (!endDate) {
        setTimeMode(false);
      }
      if (+date > endDate && endDate) {
        setEndDate(null);
        setTimeMode(false);
      }
      setStartDate(date);
    } else {
      if (+date < startDate) {
        setEndDate(null);
        setStartDate(date);
      } else {
        setEndDate(date);
      }
      if (!startDate) {
        setTimeMode(true);
      }
    }
  };
  useEffect(() => {
    let isMobile = window && window.innerWidth <= 900;
    setIsMobile(isMobile);
  }, []);

  function getTextOfDate(date) {
    const text = date
      ? date?.getDate() +
        " " +
        getMonthByNumber(date?.getMonth() + 1).slice(0, 3)
      : null;
    return text;
  }

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
      <div style={{ display: "none" }}>
        <YMaps>
          <Map
            onLoad={(ymaps) => loadSuggest(ymaps)}
            defaultState={{ center: [55.75, 37.57], zoom: 9 }}
            modules={["suggest"]}
          />
        </YMaps>
      </div>
      <Select
        className={styles.filterSetter__select}
        onClick={() => console.log("aaa")}
        items={suggests}
      >
        <FilterSetterItem
          onChange={changePlaceText}
          onClick={() => console.log("")}
          className={styles.filterSetter__select}
          title="Местоположение"
          desc="Город, адрес"
        ></FilterSetterItem>
      </Select>

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
            selectStartDate={startDate}
            selectEndDate={endDate}
            selectStart={setDateHandle}
            selectDayMode={timeMode}
          />
        }
      >
        <FilterSetterItem
          onClick={() => setTimeHandle(true)}
          active={timeMode}
          className={styles.filterSetter__select}
          value={getTextOfDate(startDate)}
          title="Заезд"
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
          value={getTextOfDate(endDate)}
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
        type={!isMobile ? "circle" : null}
        href="/search?visitors=2"
        width={!isMobile && 60}
        height={60}
      >
        {isMobile ? (
          "Найти жильё"
        ) : (
          <Image src={SearchIcon} width="20" height="20"></Image>
        )}
      </Button>
    </div>
  );
};

export default FilterSetter;
