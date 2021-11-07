import React, { useState } from "react";
import { YMaps, Map as YMapInner, Placemark } from "react-yandex-maps";
//import "../../MapPoints.css";
interface mapTypes {
  marks?: React.ReactNode;
  bbox: Array<Array<number>>;
}

const Map: React.FC<mapTypes> = ({ marks, bbox }) => {
  const [apartments, setApartments] = useState([
    {
      id: 1,
      price: 120000,
      geometry: [54.725564, 37.679224],
    },
    {
      id: 2,
      price: 1200,
      geometry: [54.625564, 37.679224],
    },
    {
      id: 3,
      price: 1200,
      geometry: [54.725564, 37.779224],
    },
    {
      id: 4,
      price: 1200,
      geometry: [54.605564, 37.679224],
    },
    {
      id: 5,
      price: 1200,
      geometry: [54.525564, 37.679224],
    },
    {
      id: 6,
      price: 1200,
      geometry: [54.725564, 37.609924],
    },
  ]);
  const [templateMark, setTemplateMark] = useState<{ template: object }>();
  const [ymaps, setYmaps] = useState();

  const countWidthByText = (text: string | number) => {
    return String(text).length * 10 + 20;
  };

  const createMark = (ymaps, event, price) => {
    if (!ymaps) {
      return;
    }
    const template = ymaps.templateLayoutFactory.createClass(
      `<div class="bb ${event}">` + price + "₽" + "</div>"
    );

    return template;
  };

  const loadMap = (ymaps) => {
    setYmaps(ymaps);
  };

  return (
    <YMaps>
      <YMapInner
        onLoad={loadMap}
        width={"50%"}
        height={"100vh"}
        modules={["layout.ImageWithContent", "templateLayoutFactory"]}
        state={{
          bounds: bbox,
        }}
      >
        {apartments.map((item) => {
          return (
            <Placemark
              geometry={item.geometry}
              key={item.id}
              options={{
                iconLayout: "default#imageWithContent",
                iconImageHref: "",
                iconContentLayout: createMark(ymaps, "", item.price),
                iconImageSize: [countWidthByText(item.price), 42],
                iconContentSize: [countWidthByText(item.price), 42],
                iconImageOffset: [0, 0],
              }}
            ></Placemark>
          );
        })}
      </YMapInner>
    </YMaps>
  );
};

export default Map;
