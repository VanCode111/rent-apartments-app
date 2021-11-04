import React from "react";
import styles from "./Select.module.scss";
import DropDown from "../DropDown/DropDown";

interface SelectTypes {
  onClick: (text: string) => void;
  items: Array<string>;
  className: string;
}

const Selects: React.FC<SelectTypes> = ({
  onClick,
  items,
  children,
  className,
}) => {
  return (
    <DropDown
      open={true}
      orientation={"left"}
      className={styles.select + " " + className}
      clickOutside={() => console.log("a")}
      content={
        <ul className={styles.select__list}>
          {items.map((item, index) => {
            return (
              <li
                className={styles.select__listItem}
                onClick={() => onClick(item)}
                key={index}
              >
                {item}
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
