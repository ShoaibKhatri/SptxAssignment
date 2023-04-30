import React from "react";
import "../assests/css/main.css";
import Custom from "../components/Custom";
import Section from "../components/Section";
import Sidebar from "../components/Sidebar";

const Main = () => {
  return (
    <div className="Main d-flex">
      <div className="sidebar-main">
        <Sidebar />
      </div>
      <div className="container p-3 main-section">
        <Section />
      </div>
      <div className="main-third p-3">
        <Custom />
      </div>
    </div>
  );
};

export default Main;
