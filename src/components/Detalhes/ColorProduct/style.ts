import styled, { css } from 'styled-components';
import { AnimationColor } from './animation';
type BoxProps = {
  background: string;
  active: boolean;
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
  justify-content: space-between;
  position: relative;

  margin-right: 10px;

  @media screen and (max-width: 740px) {
    margin-bottom: 20px;
  }
`;

export const Box = styled.button<BoxProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  margin-right: 5px;
  position: relative;

  &::before {
    content: '';
    width: 32px;
    height: 32px;
    border-radius: 8px;
    margin-right: 10px;
    ${props =>
      props.background.charAt(0) === '#'
        ? css`
            background: ${props.background};
          `
        : css`
            background-image: url(${props.background});
          `};
    border: 2px solid rgb(238, 238, 238);

    ${props =>
      props.active &&
      css`
        -webkit-animation: ${AnimationColor} 0.9s both;
        animation: ${AnimationColor} 0.9s both;
      `}
  }

  ${props =>
    props.active &&
    css`
      &::after {
        content: '';
        width: 34px;
        height: 34px;
        position: absolute;
        border: solid 2px #000;
        border-radius: 8px;
        /* top: -3px; */
        left: -1px;
      }
    `}

  &:hover {
    &::after {
      content: '';
      width: 34px;
      height: 34px;
      position: absolute;
      border: solid 2px #000;
      border-radius: 8px;
      /* top: -3px; */
      left: -1px;
    }
    span {
      color: rgb(0, 0, 0);
      cursor: pointer;
    }
  }

  span {
    ${props =>
      props.active &&
      css`
        font-weight: 500;
        color: rgb(0, 0, 0);
      `};
  }
`;

export const TextBox = styled.span`
  font-weight: 300;
  text-transform: uppercase;
  font-size: 16px;
  color: rgb(154, 154, 154);
`;
