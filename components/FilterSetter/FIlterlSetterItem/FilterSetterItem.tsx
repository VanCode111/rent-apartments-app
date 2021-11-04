import React from "react";
import styles from "./FilterSetterItem.module.scss";

interface filterTypes {
  title: string;
  desc: string;
  className: string;
  onClick: () => void;
  value?: string;
  active?: boolean;
  onChange?: (e) => void;
}

const FilterSetterItem: React.FC<filterTypes> = ({
  title,
  desc,
  onChange,
  value,
  className,
  onClick,
  active,
}) => {
  const isWithInput = onChange ? true : false;
  //const refInput = useRef();
  const clickHandle = () => {
    if (isWithInput) {
      document.getElementById("input").focus();
    }
    onClick();
  };
  return (
    <div
      onClick={clickHandle}
      className={
        styles.filterItem + " " + className + " " + (active && styles.active)
      }
    >
      <div className={styles.filterItem__content}>
        <p className={styles.filterItem__selectTitle}>{title}</p>
        {onChange ? (
          <input
            id="input"
            placeholder={desc}
            onChange={onChange}
            type="text"
          />
        ) : (
          <p
            className={
              styles.filterItem__selectDesc + " " + (value && styles.value)
            }
          >
            {value ? value : desc}
          </p>
        )}
      </div>
    </div>
  );
};

export default FilterSetterItem;
