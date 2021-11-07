import React from "react";
import IApartment from "../../../interfaces/IApartment";
import styles from "./rentObject.module.scss";
import Image from "next/image";

interface rentObjectTypes {
  apartment: IApartment;
  className?: string;
}

const rentObject: React.FC<rentObjectTypes> = ({ apartment, className }) => {
  const { id, title, img, price } = apartment;
  return (
    <div className={styles.apartment + " " + className}>
      <img className={styles.img} src={img} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.price}>
          {price}₽<span> за сутки</span>
        </p>
      </div>
    </div>
  );
};

export default rentObject;
