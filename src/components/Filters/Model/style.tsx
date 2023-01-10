import styled, { css } from 'styled-components';
import { animationBackgroundButton } from './animation';

type ClickItem = {
  select: boolean;
};

export const Container = styled.ul`
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid rgb(238, 238, 238);
  width: 100%;
  margin: 0 auto;
  padding: 25px;
  margin-bottom: 20px;

  @media screen and (max-width: 740px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    border: none;
  }
`;

export const ContainerFilter = styled.li<ClickItem>`
  display: flex;
  align-items: center;
  width: auto;
  height: 28px;

  ${props =>
    props.select &&
    css`
      span {
        color: rgb(0, 0, 0);
        cursor: pointer;
      }
      button {
        &::before {
          content: '';
          position: absolute;
          top: 0.2px;
          left: 1px;
          width: 19px;
          height: 19px;
          background: rgb(0, 0, 0);
          -webkit-animation: ${animationBackgroundButton} 0.9s both;
          animation: background ${animationBackgroundButton} 0.9s both;
        }

        &::after {
          content: '';
          position: absolute;
          top: -3px;
          left: -3px;
          width: 23px;
          height: 23px;
          border: 2px solid rgb(0, 0, 0);
          border-radius: 4px;
        }
      }
    `}

  &:hover {
    color: rgb(0, 0, 0);
    cursor: pointer;

    span {
      color: rgb(0, 0, 0);
    }

    button {
      &::after {
        content: '';
        position: absolute;
        top: -3px;
        left: -3px;
        width: 23px;
        height: 23px;
        border: 2px solid rgb(0, 0, 0);
        border-radius: 4px;
      }
    }
  }
`;

export const Item = styled.span`
  text-transform: uppercase;
  font-size: 16px;
  color: rgb(154, 154, 154);

  display: flex;
  align-items: center;
`;

export const Box = styled.button`
  width: 25px;
  height: 25px;
  position: relative;

  background: white;
  border: 2px solid rgb(154, 154, 154);
  margin: 2px;
  border-radius: 4px;
  margin-right: 10px;
`;
