import React from "react";
import { Header, Footer } from "../../../Components";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      {/* <Header /> */}
      {children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
