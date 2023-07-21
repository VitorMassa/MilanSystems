import styled from "styled-components";

export const UlSideBar = styled.ul`
  background-color: rgba(217, 217, 217, 1);
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 15%;
`;

export const LiSideTitle = styled.li.attrs({
  className: "grid grid-cols-6 items-center text-left leading-3 font-bold h-14",
})`
  background-color: rgba(128, 127, 187, 1);
  padding-left: 7%;
`;

export const LiSidePages = styled.li.attrs({
  className: "h-14 grid justify-items-center items-center border-t border-b",
})`
  background-color: rgba(180, 180, 216, 1);
  border-color: rgba(128, 127, 187, 1);
  color: rgba(94, 96, 148, 1);
`;

export const LiSideSubPages = styled.li.attrs({
  className: "h-10 grid justify-items-center items-center border-t border-b",
})`
  background-color: rgba(202, 202, 226, 1);
  border-color: rgba(128, 127, 187, 1);
  color: rgba(94, 96, 148, 0.6);

  :hover {
    color: rgba(128, 127, 187, 1);
  }
`;
