import React from "react";
import styles from "./Select.module.scss";
import DropDown from "../DropDown/DropDown";
import GeoIcon from "../../UI/Icons/GeoIcon";

interface SelectTypes {
  onClick: (text: string) => void;
  items: Array<string>;
  className: string;
  open: boolean;
  clickOutSide: () => void;
}

const Selects: React.FC<SelectTypes> = ({
  onClick,
  open,
  items,
  clickOutSide,
  children,
  className,
}) => {
  return (
    <DropDown
      open={open}
      orientation={"left"}
      className={styles.select + " " + className}
      clickOutside={clickOutSide}
      content={
        <ul className={styles.select__list}>
          {items.map((item, index) => {
            return (
              <li
                className={styles.select__listItem}
                onClick={() => onClick(item)}
                key={index}
              >
                <div className={styles.geoIcon}>
                  <GeoIcon />
                </div>
                <p>{item}</p>
              </li>
            );
          })}
        </ul>
      }
    >
      {children}
    </DropDown>
  );
};

export default Selects;
