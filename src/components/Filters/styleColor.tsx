import styled from "styled-components";

export const ButtonFilterCor = styled.button`
  background: rgb(238, 238, 238);
  cursor: pointer;

  width: 180px;
  height: 70px;
  border: none;

  font-family: 'Roboto Mono', monospace;
  text-transform: uppercase;
  font-size: 16px;
  color: rgb(0, 0, 0);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    right: 0px;
    top: 18px;
    width: 1px;
    height: 35px;
    background: rgb(221, 221, 221);
  }
`;