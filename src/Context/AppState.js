import React, { useState } from "react";
import { AppContext } from "./AppContext";

const AppState = (props) => {
  const [toggle, setToggle] = useState(true);
  const [night, setNight] = useState(true);
  const [data, setData] = useState([]);
  const [closeAd, setCloseAd] = useState(false);

  return (
    <AppContext.Provider
      value={{
        toggle,
        setToggle,
        night,
        setNight,
        data,
        setData,
        closeAd,
        setCloseAd,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
