import React from "react";
import styles from "./FilterSetterItem.module.scss";

interface filterTypes {
  title: string;
  desc: string;
  className: string;
  onClick: () => void;
  value?: string;
  active?: boolean;
}

const FilterSetterItem: React.FC<filterTypes> = ({
  title,
  desc,
  value,
  className,
  onClick,
  active,
}) => {
  return (
    <div
      onClick={onClick}
      className={
        styles.filterItem + " " + className + " " + (active && styles.active)
      }
    >
      <div className={styles.filterItem__content}>
        <p className={styles.filterItem__selectTitle}>{title}</p>
        <p
          className={
            styles.filterItem__selectDesc + " " + (value && styles.value)
          }
        >
          {value ? value : desc}
        </p>
      </div>
    </div>
  );
};

export default FilterSetterItem;
