import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { IconContext } from "react-icons";
import { DivNavBar } from "./styles";
import SideBar from "../sidebar/SideBar";

function NavBar() {
  const [sideBar, setSideBar] = useState(false);

  function showSideBar() {
    setSideBar(!sideBar);
  }

  return (
    <div>
      <DivNavBar>
        <IconContext.Provider value={{ color: "white" }}>
          <FaIcons.FaBars onClick={showSideBar} />
          {sideBar && <SideBar active={setSideBar} />}
        </IconContext.Provider>
      </DivNavBar>
    </div>
  );
}

export default NavBar;
