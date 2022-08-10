import styled, { css } from 'styled-components';

interface BoxProps {
  colorBox: string;
}

export const Container = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid rgb(238, 238, 238);
  width: 75%;
  margin: 0 auto;
  padding: 20px;
`;

export const ContainerCores = styled.ul`
  display: flex;
  align-items: center;

  &:hover {
    li {
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

export const Item = styled.li`
  list-style: none;

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
