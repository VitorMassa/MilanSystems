import React from "react";
import { FaTimes } from "react-icons/fa";
import { DivSideBar, DivSideTitle, DivSidePages } from "./styles";
import { SideBarData } from "./SideBarData";

export default function SideBar({ active }) {
  function closeSideBar() {
    active(false);
  }

  return (
    <DivSideBar>
      <DivSideTitle>
        <FaTimes onClick={closeSideBar} />
        <p className="col-start-3 col-end-6 ">
          Milan
          <br />
          Systems
        </p>
      </DivSideTitle>
      <div>
        {SideBarData?.map((value, key) => {
          return (
            <div>
              <DivSidePages>
                <p>{value.title}</p>
              </DivSidePages>
              {value.subPages?.map((subpage, key) => {
                return <p>{subpage.title}</p>;
              })}
            </div>
          );
        })}
      </div>
    </DivSideBar>
  );
}
