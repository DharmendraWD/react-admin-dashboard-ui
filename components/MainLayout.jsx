// src/components/MainLayout.js

import React from "react";
import Aside from "./Aside";
import Navbar from "./Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Aside />
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
