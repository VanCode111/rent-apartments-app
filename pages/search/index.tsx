import React from "react";
import styles from "./Search.module.scss";
import MainLayout from "../../layouts/MainLayout";
import { YMaps, Map } from "react-yandex-maps";

const Index = () => {
  const loadSuggest = (ymaps) => {
    const suggestView = new ymaps.SuggestView("suggest");
  };

  return (
    <MainLayout>
      <input type="text" className="form-control" id="suggest" />
      <YMaps>
        <Map
          onLoad={(ymaps) => loadSuggest(ymaps)}
          defaultState={{ center: [55.75, 37.57], zoom: 9 }}
          modules={["SuggestView"]}
        />
      </YMaps>
    </MainLayout>
  );
};

export default Index;
