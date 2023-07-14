import React from "react";
import { FaTimes } from "react-icons/fa";
import { DivSideBar, DivSideTitle } from "./styles";

export default function SideBar({ active }) {
  function closeSideBar() {
    active(false);
  }

  return (
    <DivSideBar>
      <DivSideTitle className="grid grid-cols-6">
        <FaTimes onClick={closeSideBar} />
        <p className="text-left leading-3 col-start-3 col-end-6 font-bold hover:text-green-200">
          Milan
          <br />
          Systems
        </p>
      </DivSideTitle>

      <div>
        <p>TESTE</p>
      </div>
    </DivSideBar>
  );
}
