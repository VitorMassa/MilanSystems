import styled from "styled-components";

export const Title = styled.h1.attrs({
  className: "text-xl font-bold",
})`
  color: rgba(82, 81, 137, 1);
`;

export const Label = styled.label.attrs({
  className: "font-bold",
})`
  color: rgba(82, 81, 137, 1);
  float: left;
`;

export const Input = styled.input.attrs({
  className: "border-2 rounded focus:outline-none ml-2 grow",
})`
  border-color: rgba(82, 81, 137, 1);
  color: rgba(82, 81, 137, 1);
`;

export const Select = styled.select.attrs({
  className: "border-2 rounded focus:outline-none",
})`
  border-color: rgba(82, 81, 137, 1);
  color: rgba(82, 81, 137, 1);
  overflow: auto;
`;
