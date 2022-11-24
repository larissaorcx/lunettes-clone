import styled, { css } from 'styled-components';
import { animationBackgroundButton } from '../Model/animation';

interface BoxProps {
  colorBox: string;
  selectColor: boolean;
}

type SelectColor = {
  selectColor: boolean;
};

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

export const ContainerCores = styled.li<SelectColor>`
  display: flex;
  align-items: center;

  ${props =>
    props.selectColor &&
    css`
      span {
        color: rgb(0, 0, 0);
        cursor: pointer;
      }
      button {
        &::after {
          content: '';
          position: absolute;
          top: -4px;
          left: -4px;
          width: 25px;
          height: 25px;
          border: 2px solid rgb(0, 0, 0);
          border-radius: 4px;
        }
      }
    `}

  &:hover {
    span {
      color: rgb(0, 0, 0);
      cursor: pointer;
    }

    button {
      &::after {
        content: '';
        position: absolute;
        top: -4px;
        left: -4px;
        width: 25px;
        height: 25px;
        border: 2px solid rgb(0, 0, 0);
        border-radius: 4px;
      }
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

  position: relative;

  ${props =>
    props.colorBox.charAt(0) === '#'
      ? css`
          &::before {
            content: '';
            position: absolute;
            top: 0.2px;
            left: 0.1px;
            width: 21px;
            height: 21px;
            background: rgb(0, 0, 0);
            -webkit-animation: ${animationBackgroundButton} 0.9s both;
            background: ${props.colorBox};
            animation: background ${animationBackgroundButton} 0.9s both;
          }
        `
      : css`
          &::before {
            content: '';
            position: absolute;
            top: 0.2px;
            left: 0.1px;
            width: 21px;
            height: 21px;
            background: rgb(0, 0, 0);
            -webkit-animation: ${animationBackgroundButton} 0.9s both;
            background-image: url(${props.colorBox});
            animation: background ${animationBackgroundButton} 0.9s both;
          }
        `};
`;
