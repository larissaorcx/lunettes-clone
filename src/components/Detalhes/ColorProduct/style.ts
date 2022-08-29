import styled, { css } from 'styled-components';

type BoxProps = {
  background: string;
};

export const ContainerColor = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ConteinerBox = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;

  border: 1px solid rgb(238, 238, 238);
  padding: 10px;

  @media screen and (max-width: 740px) {
    flex-direction: column;
    border: none;
  }
`;

export const ListButton = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;

  margin-right: 10px;

  &:hover {
    span {
      color: rgb(0, 0, 0);
      cursor: pointer;
    }

    button {
      &::before {
        content: '';
        width: 34px;
        height: 34px;
        position: absolute;
        border: solid 2px #000;
        border-radius: 8px;
        top: -3px;
        left: -2.8px;
        /* margin-bottom: 5px; */
      }
    }
  }
  @media screen and (max-width: 740px) {
    margin-bottom: 20px;
  }
`;

export const Box = styled.button<BoxProps>`
  width: 32px;
  height: 32px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  margin-right: 5px;

  ${props =>
    props.background.charAt(0) === '#'
      ? css`
          background: ${props.background};
        `
      : css`
          background-image: url(${props.background});
        `};
`;

export const TextBox = styled.span`
  font-family: 'Roboto Mono', monospace;
  text-transform: uppercase;
  font-size: 16px;
  color: rgb(154, 154, 154);
`;
