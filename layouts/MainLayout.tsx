import React from "react";
import NavBar from "../components/NavBar/NavBar";

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <NavBar></NavBar>
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
