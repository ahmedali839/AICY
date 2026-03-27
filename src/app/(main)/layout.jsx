import React from "react";
import { poppins } from "../../styles/font";

const MainLayout = ({ children }) => {
  return (
    <div>
      <main className={poppins.className}>{children}</main>
    </div>
  );
};

export default MainLayout;
