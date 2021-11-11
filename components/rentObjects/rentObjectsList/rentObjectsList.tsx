import React from "react";
import styles from "./rentObjectsList.module.scss";
import RentObject from "../rentObject/rentObject";
import IApartment from "../../../interfaces/IApartment";

interface rentObjectsListTypes {
  apartments: Array<IApartment>;
  className?: string;
}

const rentObjectsList: React.FC<rentObjectsListTypes> = ({
  apartments,
  className,
}) => {
  return (
    <div className={styles.list + " " + (className && className)}>
      {apartments.map((apartment) => {
        return (
          <RentObject
            key={apartment.id}
            className={styles.apartment}
            apartment={apartment}
          />
        );
      })}
    </div>
  );
};

export default rentObjectsList;
