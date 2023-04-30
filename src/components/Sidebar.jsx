import React, { useContext, useState } from "react";
import name from "../assests/images/name.svg";
import home from "../assests/images/home.svg";
import section1 from "../assests/images/section1.svg";
import section2 from "../assests/images/section2.svg";
import section3 from "../assests/images/section3.svg";
import section4 from "../assests/images/section4.svg";
import section5 from "../assests/images/section5.svg";
import section6 from "../assests/images/section6.svg";
import section7 from "../assests/images/section7.svg";
import section8 from "../assests/images/section8.svg";
import documentation from "../assests/images/documentation.svg";
import Menutoggle from "../assests/images/menutoggle.svg";
import world from "../assests/images/world.svg";
import dark from "../assests/images/dark.svg";
import roundbtn from "../assests/images/roundbtn.svg";
import light from "../assests/images/light.svg";
import "../assests/css/sidebar.css";
import { AppContext } from "../Context/AppContext";

const Sidebar = () => {
  const menuitems = [
    {
      name: "Home",
      image: home,
    },
    {
      name: "Section 1",
      image: section1,
    },
    {
      name: "Section 2",
      image: section2,
    },
    {
      name: "Section 3",
      image: section3,
    },
    {
      name: "Section 4",
      image: section4,
    },
    {
      name: "Section 5",
      image: section5,
    },
    {
      name: "Section 6",
      image: section6,
    },
    {
      name: "Section 7",
      image: section7,
    },
    {
      name: "Section 8",
      image: section8,
    },
    {
      name: "Documentation",
      image: documentation,
    },
  ];

  const { toggle, setToggle, night, setNight } = useContext(AppContext);
  return (
    <div className={toggle ? "sidebar-main-open" : "sidebar-main-close"}>
      <div className="heading-menu-main d-flex justify-content-between">
        <div className={toggle ? "name-main" : "d-none"}>
          <img src={name} alt="" />
          <span className="name-text">Name</span>
        </div>
        <div
          className={toggle ? "toggle-btn" : ""}
          onClick={() => setToggle(!toggle)}
        >
          <img src={Menutoggle} alt="pic" />
        </div>
      </div>

      {menuitems.map((menuitem, index) => {
        return (
          <div className="menu-item d-flex d-flex justify-content-" key={index}>
            <div className="menuitem-image-main  ">
              <img src={menuitem.image} className="menuitem-image" alt="" />
            </div>
            <div className=" text-center px-3">
              <span className={!toggle ? "d-none" : "text-center"}>
                {menuitem.name}
              </span>
            </div>
          </div>
        );
      })}

      {toggle ? (
        <div className="sidebar-bottom-main">
          <div className="d-flex justify-content-around buy-btn-main">
            <div className="btn-rectangle btn-dollar">
              <img src={name} className="   " alt="" />
              <span>$ 0.90</span>
            </div>
            <div className="btn-rectangle buy-sxyz">Buy SXYZ</div>
          </div>

          <div className="d-flex justify-content-start">
            <div className="world-img">
              <img src={world} alt="" />
            </div>
            <div className="dark-light-toggle-main d-flex  ">
              {night ? (
                <div className="dark-img">
                  <img src={dark} className="px-1 w-100" alt="" />
                </div>
              ) : (
                ""
              )}
              <div className="roundbtn-img" onClick={() => setNight(!night)}>
                <img src={roundbtn} className=" w-70" alt="" />
              </div>
              {!night ? (
                <div className="dark-img">
                  <img src={light} className="px-1 w-100" alt="" />
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Sidebar;
