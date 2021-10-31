import React from "react";
import styles from "./Button.module.scss";
import classNames from "class-names";
import Link from "next/link";

interface ButtonTypes {
  onClick?: () => void;
  className?: string;
  type?: "circle" | "circleShadow";
  width?: number;
  href?: string;
  height?: number;
}

const Button: React.FC<ButtonTypes> = ({
  onClick,
  children,
  className,
  type,
  width,
  href,
  height,
}) => {
  let button;
  if (href) {
    button = (
      <Link href={href}>
        <a
          style={{ width: width, height: height }}
          onClick={onClick}
          className={classNames(styles.button, {
            [styles[type]]: type,
            [className]: className,
          })}
          href={href}
        >
          {children}
        </a>
      </Link>
    );
  } else {
    button = (
      <button
        style={{ width: width, height: height }}
        className={classNames(styles.button, {
          [styles[type]]: type,
          [className]: className,
        })}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  return button;
};

export default Button;
