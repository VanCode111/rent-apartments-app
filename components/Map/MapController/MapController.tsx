import React from "react";
import styles from "./MapController.module.scss";

interface IMapControler {
  position: "left-top" | "center-top" | "right-top";
}

const MapController: React.FC<IMapControler> = ({ children, position }) => {
  return (
    <div className={styles.mapController + " " + styles[position]}>
      {children}
    </div>
  );
};

export default MapController;
