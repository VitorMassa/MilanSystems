import styled from "styled-components";

export const DivSideBar = styled.div`
  background-color: rgba(217, 217, 217, 1);
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 15%;
`;

export const DivSideTitle = styled.div.attrs({
  className:
    "grid grid-cols-6 items-center text-left leading-3 font-bold h-14 hover:text-green-200",
})`
  background-color: rgba(128, 127, 187, 1);
  padding-left: 7%;
`;

export const DivSidePages = styled.div.attrs({
  className: "h-14",
})`
  background-color: rgba(180, 180, 216, 1);
`;
