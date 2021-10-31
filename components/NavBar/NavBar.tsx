import React from "react";
import navBar from "../../styles/NavBar.module.scss";
import Button from "../UI/Button/Button";
import Logo from "../UI/Icons/Logo";

const NavBar = () => {
  return (
    <header className={navBar.navBar}>
      <div className="container">
        <div className={navBar.navBar__inner}>
          <Logo width={150} height={150} />
          <Button>Войти</Button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
