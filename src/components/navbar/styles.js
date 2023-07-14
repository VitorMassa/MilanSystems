import styled from "styled-components";

export const DivNavBar = styled.div.attrs({
  className: "h-14",
})`
  background-color: rgba(180, 180, 216, 1);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  /* height: 8%; */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 1%;
  box-shadow: 0 0 5px 1px;
`;
