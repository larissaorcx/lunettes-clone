import styled, { css } from 'styled-components';
import { animationRedes } from '../Footer/InfoProdutos/animacao';
import {
  animationContainer,
  animationList,
  animationContainerClose,
} from './animationList';

interface ListProps {
  position: number;
}

export const ListMenuContainer = styled.div`
  padding: 20px 20px;
  margin: 140px 0 0px 0;
  background: black;
`;

export const Button = styled.button`
  font-family: 'MonumentExtended', monospace;
  text-transform: uppercase;
  font-size: 32px;

  line-height: 1.21;
  text-align: left;
  color: rgb(255, 255, 255);
  margin-bottom: 50px;
  text-transform: uppercase;
  background: rgb(0, 0, 0);
  cursor: pointer;
  width: 370px;
  border: none;
  z-index: ${props => (props.theme.open ? '0' : '-2')};

  &:hover {
    opacity: 0.5;
  }

  @media screen and (max-width: 740px) {
    width: 290px;
    height: 40px;
    font-size: 24px;
    padding-left: 0px;
  }
`;
export const ListCategory = styled.li<ListProps>`
  padding-right: 40px;
  padding-bottom: 30px;
  z-index: ${props => (props.theme.open ? '0' : '-2')};

  position: relative;
  ${({ position }) => {
    return css`
      -webkit-animation: ${animationList} 0.5s
        cubic-bezier(0.2, 0.36, 0.45, 0.94) ${`0.${position}s`} both;
      animation: ${animationList} 0.5s cubic-bezier(0.2, 0.36, 0.45, 0.94)
        ${`0.${position}s`} both;
    `;
  }};

  p {
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Roboto Mono', monospace;
    font-size: 16px;
    color: rgb(255, 255, 255);
    margin-bottom: 20px;
    line-height: 3.13;

    width: 150px;
    height: 18px;

    margin-top: 15px;

    color: #9a9a9a;
    z-index: 1;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      left: 0px;
      top: 0px;
      width: 0%;
      height: 20px;
      background-color: rgb(255, 255, 255);
      transition: all 0.2s linear 0s;
    }
  }

  &:hover {
    span {
      animation: ${animationRedes} 0.8s ease 0s 1 normal both;
    }
    p {
      color: rgb(0, 0, 0);
      z-index: 1;

      &::before {
        opacity: 1;
        width: 100%;
        z-index: -1;
      }
    }
  }

  @media screen and (max-width: 740px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 130px;
  }

  @media screen and (max-width: 740px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(0, 0, 0);
    color: #9a9a9a;
    font-size: 16px;
  }
`;
export const ContainerCagtegories = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background: black;

  ul {
    width: 90%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    @media screen and (max-width: 740px) {
      width: 100%;
    }
  }
`;

export const ButtonHome = styled.button`
  font-family: 'MonumentExtended', monospace;
  text-transform: uppercase;
  font-size: 32px;

  line-height: 1.21;
  text-align: left;
  color: rgb(255, 255, 255);
  margin-bottom: 50px;
  background: black;

  cursor: pointer;

  border: none;
  z-index: ${props => (props.theme.open ? '0' : '-2')};

  &:hover {
    opacity: 0.5;
  }

  @media screen and (max-width: 740px) {
    font-size: 24px;
  }
`;
