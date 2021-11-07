import React from "react";
import styles from "./rentObjectsList.module.scss";
import RentObject from "../rentObject/rentObject";
import IApartment from "../../../interfaces/IApartment";

interface rentObjectsListTypes {
  apartments: Array<IApartment>;
}

const rentObjectsList: React.FC<rentObjectsListTypes> = ({ apartments }) => {
  return (
    <div className={styles.list}>
      {apartments.map((apartment) => {
        return (
          <RentObject className={styles.apartment} apartment={apartment} />
        );
      })}
    </div>
  );
};

export default rentObjectsList;
