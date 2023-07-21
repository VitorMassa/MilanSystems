import React from "react";
import { FaTimes } from "react-icons/fa";
import { UlSideBar, LiSideTitle, LiSidePages, LiSideSubPages } from "./styles";
import { SideBarData } from "./SideBarData";
import { Link } from "react-router-dom";

export default function SideBar({ active }) {
  function closeSideBar() {
    active(false);
  }

  return (
    <UlSideBar>
      <LiSideTitle>
        <FaTimes onClick={closeSideBar} />
        <p className="col-start-3 col-end-6 ">
          Milan
          <br />
          Systems
        </p>
      </LiSideTitle>
      <div>
        {SideBarData?.map((value, key) => {
          return (
            <div key={key}>
              <LiSidePages>
                <p>{value.title}</p>
              </LiSidePages>
              <ul>
                {value.subPages?.map((subpage, key) => {
                  return (
                    <LiSideSubPages key={key}>
                      <Link to={subpage.path}>{subpage.title}</Link>
                    </LiSideSubPages>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </UlSideBar>
  );
}
