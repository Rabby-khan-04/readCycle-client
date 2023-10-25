import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";

const Main = () => {
  return (
    <div className="bg-bgColor">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
