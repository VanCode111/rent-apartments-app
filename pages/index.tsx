import React from "react";
import MainLayout from "../layouts/MainLayout";
import styles from "./index.module.scss";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import FilterSetter from "../components/FilterSetter/FilterSetter";

const selectionRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

function Index() {
  return (
    <MainLayout>
      <div className={styles.mainPage__top}>
        <div className={styles.mainPage__topContent}>
          <div className="container">
            <h2>Снять квартиру посуточно в Москве</h2>
            <FilterSetter></FilterSetter>
          </div>
        </div>
      </div>
      <section className={styles.popularRooms}>
        <div className="container">
          <h3 className={styles.popularRooms__title}>Популярное</h3>
        </div>
      </section>
    </MainLayout>
  );
}

export default Index;
