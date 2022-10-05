import styled, { css } from 'styled-components';

interface BoxProps {
  colorBox: string;
}

export const Container = styled.ul`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid rgb(238, 238, 238);
  /* width: 100%; */

  padding: 20px;
  margin-bottom: 20px;

  @media screen and (max-width: 740px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    border: none;
  }
`;

export const ContainerCores = styled.li`
  display: flex;
  align-items: center;

  &:hover {
    span {
      color: rgb(0, 0, 0);
      cursor: pointer;
    }

    button {
      width: 25px;
      height: 25px;
      border: 2px solid rgb(0, 0, 0);
      border-radius: 4px;
    }
  }
`;

export const Item = styled.span`
  font-family: 'Roboto Mono', monospace;
  text-transform: uppercase;
  font-size: 16px;
  color: rgb(154, 154, 154);

  display: flex;
  align-items: center;
`;

export const Box = styled.button<BoxProps>`
  width: 25px;
  height: 25px;

  border: 2px solid rgb(238, 238, 238);
  margin: 2px;
  border-radius: 4px;
  margin-right: 10px;

  ${props =>
    props.colorBox.charAt(0) === '#'
      ? css`
          background: ${props.colorBox};
        `
      : css`
          background-image: url(${props.colorBox});
        `};
`;
