import React, { useState, useEffect } from "react";
import styles from "./rentObjects.module.scss";
import RentObjectsList from "./rentObjectsList/rentObjectsList";
import IApartment from "../../interfaces/IApartment";
import Map from "../Map/Map";

interface rentObjectsTypes {
  className: string;
  loadObjects: (object) => void;
  bbox: Array<Array<number>>;
}

const RentObjects: React.FC<rentObjectsTypes> = ({
  className,
  bbox,
  loadObjects,
}) => {
  const [apartments, setApartments] = useState<Array<IApartment>>([]);
  const [expandedPanel, setExpandedPanel] = useState<boolean>(true);

  useEffect(() => {
    if (!bbox) {
      return;
    }
    if (!bbox[0][0]) {
      return;
    }
    async function getApartments() {
      try {
        const res = await fetch(
          "http://localhost:3000/api/apartments" + `?bbox=${bbox}`
        );
        const apartments = await res.json();
        setApartments(apartments);
      } catch (e) {
        console.log(e);
      }

      loadObjects(apartments);
    }
    //getApartments();
  }, [bbox]);

  return (
    <div className={styles.rent + " " + className}>
      <RentObjectsList
        className={styles.list + " " + (!expandedPanel && styles.close)}
        apartments={apartments || []}
      />
      <Map
        clickExpand={() => setExpandedPanel((prev) => !prev)}
        className={styles.map + " " + (!expandedPanel && styles.openMap)}
        bbox={bbox}
        marks={apartments}
      ></Map>
    </div>
  );
};

export default RentObjects;
