import React, { useState, useEffect } from "react";
import styles from "./rentObjects.module.scss";
import RentObjectsList from "./rentObjectsList/rentObjectsList";
import IApartment from "../../interfaces/IApartment";

interface rentObjectsTypes {
  className: string;
}

const rentObjects: React.FC<rentObjectsTypes> = ({ className }) => {
  const [apartments, setApartments] = useState<Array<IApartment>>([]);

  useEffect(() => {
    async function getApartments() {
      const res = await fetch("http://localhost:3000/api/apartments");
      const apartments = await res.json();
      setApartments(apartments);
    }
    getApartments();
  }, []);

  return (
    <div className={styles.rent + " " + className}>
      <RentObjectsList apartments={apartments || []} />
    </div>
  );
};

export default rentObjects;
