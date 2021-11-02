import React, { useRef, useEffect, MouseEvent } from "react";
import styles from "./DropDown.module.scss";

interface DropDownTypes {
  content: React.ReactNode;
  open: boolean;
  className: string;
  clickOutside: () => void;
}

const DropDown = ({ open, content, children, className, clickOutside }) => {
  const contentRef = useRef<HTMLHeadingElement>();
  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      console.log(e);
      if (!contentRef) {
        return;
      }
      if (e.target instanceof HTMLElement) {
        if (!contentRef.current.contains(e.target)) {
          clickOutside();
        }
      }
    });
    return () => {
      //document.removeEventListener('click');
    };
  }, [contentRef]);

  return (
    <div
      className={styles.dropDown + " " + (className && className)}
      ref={contentRef}
    >
      <div className={styles.dropDown__top}>{children}</div>

      {open && <div className={styles.dropDown__content}>{content}</div>}
    </div>
  );
};

export default DropDown;
