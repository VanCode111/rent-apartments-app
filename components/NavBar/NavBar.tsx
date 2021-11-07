import React from "react";
import navBar from "../../styles/NavBar.module.scss";
import Button from "../UI/Button/Button";
import Logo from "../UI/Icons/Logo";

const NavBar = () => {
  return (
    <header className={navBar.navBar}>
      <div className={navBar.navBar__inner}>
        <Logo width={170} height={170} />
        <Button>Войти</Button>
      </div>
    </header>
  );
};

export default NavBar;
