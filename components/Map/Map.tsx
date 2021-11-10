import React, { useState, useEffect } from "react";
import { YMaps, Map as YMapInner, Placemark } from "react-yandex-maps";
import IApartment from "../../interfaces/IApartment";
import styles from "./Map.module.scss";
import MapController from "./MapController/MapController";
import Button from "../UI/Button/Button";
import ArrowIcon from "../UI/Icons/ArrowIcon";
interface mapTypes {
  marks?: Array<IApartment>;
  bbox: Array<Array<number>>;
  className: string;
  controllers?: React.ReactNode;
  clickExpand?: () => void;
}

const Map: React.FC<mapTypes> = ({
  marks,
  bbox,
  className,
  controllers,
  clickExpand,
}) => {
  let interval;
  const [ymaps, setYmaps] = useState();
  const [map, setMap] = useState<any>();
  const [expandedPanel, setExpandedPanel] = useState(true);
  const countWidthByText = (text: string | number) => {
    return String(text).length * 10 + 20;
  };

  useEffect(() => {
    if (!map) {
      return;
    }
    map.container.events.add("changesize", () => {
      console.log("asf");
    });
  }, [map]);

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
    console.log(ymaps.map);
    setYmaps(ymaps);
  };

  return (
    <div className={className + " " + styles.map}>
      {ymaps && (
        <MapController position="left-top">
          <Button
            width={40}
            height={40}
            onClick={() => {
              setExpandedPanel((prev) => !prev);

              clickExpand();
              //map.container.fitToViewport();
            }}
            className={styles.btnArrow}
            type="circleShadow"
          >
            <ArrowIcon />
          </Button>
        </MapController>
      )}

      <YMaps>
        <YMapInner
          onLoad={loadMap}
          width={"100%"}
          instanceRef={(inst: any) => {
            if (!inst) {
              return;
            }
            setMap(inst);
            function fitContainer(delay) {
              if (delay <= 0) {
                return;
              }
              inst.container.fitToViewport();
              setTimeout(() => {
                fitContainer(delay - 10);
              }, 10);
            }
            fitContainer(500);
          }}
          height="100%"
          modules={["layout.ImageWithContent", "templateLayoutFactory"]}
          state={{
            bounds: bbox,
          }}
        >
          {marks.map((item) => {
            return (
              <Placemark
                geometry={item.location}
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
    </div>
  );
};

export default Map;
