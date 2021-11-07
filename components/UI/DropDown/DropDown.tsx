import React, { useRef, useEffect, MouseEvent } from "react";
import styles from "./DropDown.module.scss";

interface DropDownTypes {
  content: React.ReactNode;
  open: boolean;
  className?: string;
  orientation?: "left" | "center" | "right";
  clickOutside: () => void;
}

const DropDown = ({
  open,
  content,
  children,
  className,
  clickOutside,
  orientation,
}) => {
  const contentRef = useRef<HTMLHeadingElement>();
  useEffect(() => {
    function onClickHandle(e) {
      if (!contentRef.current) {
        return;
      }
      if (e.target instanceof HTMLElement) {
        if (!contentRef.current.contains(e.target)) {
          clickOutside();
        }
      }
    }
    document.addEventListener("mousedown", onClickHandle);
    return () => {
      document.removeEventListener("click", onClickHandle);
    };
  }, [contentRef]);

  return (
    <div
      className={styles.dropDown + " " + (className && className)}
      ref={contentRef}
    >
      <div className={styles.dropDown__top}>{children}</div>

      {open && (
        <div className={styles.dropDown__content + " " + styles[orientation]}>
          {content}
        </div>
      )}
    </div>
  );
};

export default DropDown;
