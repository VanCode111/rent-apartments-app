import React, { useState, useEffect } from "react";
import styles from "./rentObjects.module.scss";
import RentObjectsList from "./rentObjectsList/rentObjectsList";
import IApartment from "../../interfaces/IApartment";

interface rentObjectsTypes {
  className: string;
  loadObjects: (object) => void;
  bbox: Array<Array<number>>;
}

const rentObjects: React.FC<rentObjectsTypes> = ({
  className,
  bbox,
  loadObjects,
}) => {
  const [apartments, setApartments] = useState<Array<IApartment>>([]);

  useEffect(() => {
    if (!bbox) {
      return;
    }
    if (!bbox[0][0]) {
      return;
    }
    async function getApartments() {
      const res = await fetch(
        "http://localhost:3000/api/apartments" + `?bbox=${bbox}`
      );
      const apartments = await res.json();
      setApartments(apartments);
      loadObjects(apartments);
    }
    getApartments();
  }, [bbox]);

  return (
    <div className={styles.rent + " " + className}>
      <RentObjectsList apartments={apartments || []} />
    </div>
  );
};

export default rentObjects;
