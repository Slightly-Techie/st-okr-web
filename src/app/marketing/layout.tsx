import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";

function MarketingPageLayout() {
  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
    </React.Fragment>
  );
}

export default MarketingPageLayout;
