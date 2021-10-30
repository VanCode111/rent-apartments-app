import React from "react";
import styles from "./FilterSetter.module.scss";
import Button from "../UI/Button/Button";
import SearchIcon from "../../assets/img/search.svg";
import Image from "next/image";

const FilterSetter = () => {
  return (
    <div className={styles.filterSetter}>
      <div className={styles.filterSetter__select}>
        <div className="filterSetter__content">
          <p className={styles.filterSetter__selectTitle}>Количество комнат</p>
          <p className={styles.filterSetter__selectDesc}>1, 2 комн.</p>
        </div>
      </div>
      <div className={styles.filterSetter__select}>
        <div className="filterSetter__content">
          <p className={styles.filterSetter__selectTitle}>Прибытие</p>
          <p className={styles.filterSetter__selectDesc}>Когда?</p>
        </div>
      </div>
      <div className={styles.filterSetter__select}>
        <div className="filterSetter__content">
          <p className={styles.filterSetter__selectTitle}>Выезд</p>
          <p className={styles.filterSetter__selectDesc}>Когда?</p>
        </div>
      </div>
      <div className={styles.filterSetter__select}>
        <div className="filterSetter__content">
          <p className={styles.filterSetter__selectTitle}>Количество гостей</p>
          <p className={styles.filterSetter__selectDesc}>Кто едет?</p>
        </div>
      </div>
      <Button type="circle" href="/search?visitors=2" width={60} height={60}>
        <Image src={SearchIcon} width="20" height="20"></Image>
      </Button>
    </div>
  );
};

export default FilterSetter;
