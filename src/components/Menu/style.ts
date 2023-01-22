import styled, { css } from 'styled-components';
import { animationClose, animationMenu, animationOpen } from './animacao';
import {
  animationContainer,
  animationContainerClose,
} from '../ListMenu/animationList';

interface MenuProps {
  scroll: boolean;
  openMenu: boolean | null;
  openBag: boolean | null;
}

interface ButtonProps {
  openBag: boolean | null;
  openMenu: boolean | null;
}

interface ContadorProps {
  scroll: boolean;
  openBag: boolean | null;
}

interface Menu {
  scroll: boolean;
  openMenu: boolean | null;
  openBag: boolean | null;
  inHome: boolean;
}

export const Menu = styled.div<MenuProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${props => (props.openBag || props.openMenu ? '100vh' : '0px')};

  overflow-y: scroll;
  position: fixed;
  z-index: 999;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    min-height: 100vh;
    background: rgb(0, 0, 0);
    z-index: -1;

    ${props => {
      switch (props.openMenu || props.openBag) {
        case true:
          return css`
            -webkit-animation: ${animationContainer} 0.5s
              cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
            animation: ${animationContainer} 0.5s
              cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
          `;
        case false:
          return css`
            -webkit-animation: ${animationContainerClose} 0.5s
              cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
            animation: ${animationContainerClose} 0.5s
              cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
          `;
        default:
          return css`
            height: 0vh;
          `;
      }
    }}
  }
  ::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 740px) {
    overflow-y: scroll;
  }
`;

export const MenuContainer = styled.div<Menu>`
  display: flex;
  align-items: center;
  width: 100vw;

  height: ${props => (props.scroll ? '65px' : '130px')};
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 30px;

  position: fixed;
  top: 0;

  background-color: ${props => (props.scroll ? 'black' : '')};
  ${props =>
    (props.openMenu || props.openBag) &&
    css`
      background-color: rgb(15, 15, 15);
      border-bottom: 1px solid rgb(30, 30, 30);
    `}

  z-index: 99;

  @media screen and (max-width: 740px) {
    width: 100vw;
    height: ${props => (props.scroll ? '65px' : '83px')};
    padding-right: 20px;
    padding-left: 20px;
    background-color: ${props => (props.inHome ? '' : 'black')};
  }
`;
export const BotaoMenu = styled.button<ButtonProps>`
  cursor: pointer;
  background-color: transparent;
  border: none;
  z-index: 1;
  ${props =>
    !props.openMenu &&
    css`
      animation: ${animationOpen} 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53)
        both;
    `}

  ${props =>
    props.openBag &&
    css`
      -webkit-animation: ${animationClose} 0.3s
        cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
      animation: ${animationClose} 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53)
        both;
    `}

  @media screen and (max-width: 740px) {
    width: ${props => (props.openMenu || props.openBag ? '25px' : '25px')};
    height: ${props => (props.openMenu || props.openBag ? '25px' : '16px')};
    margin: 0px;
  }
`;

export const BotaoMenuClose = styled.button<ButtonProps>`
  cursor: pointer;
  background-color: transparent;
  border: none;
  z-index: 1;
  ${props =>
    props.openMenu &&
    css`
      -webkit-animation: ${animationOpen} 0.3s
        cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: ${animationOpen} 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    `}

  @media screen and (max-width: 740px) {
    width: ${props => (props.openMenu || props.openBag ? '25px' : '25px')};
    height: ${props => (props.openMenu || props.openBag ? '25px' : '16px')};
    margin: 0px;
  }
`;

export const Logo = styled.div<MenuProps>`
  display: flex;
  width: 210px;
  height: ${props => (props.scroll ? '50px' : '100px')};
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-right: ${props => (props.openMenu ? '44%' : '')}; */
  /* margin-left: ${props => (props.openBag ? '1%' : '')}; */

  padding-top: ${props => (props.scroll ? '0px' : '20px')};

  z-index: 1;

  @media screen and (max-width: 740px) {
    padding: 0px;

    img {
      width: ${props => (props.scroll ? '43px' : '120px')};
      height: ${props => (props.scroll ? '43px' : '53px')};
    }
  }
`;
export const BotaoSacola = styled.button<ButtonProps>`
  cursor: pointer;
  background-color: transparent;
  border: none;
  width: 42.8px;
  height: 50.3px;
  z-index: 1;

  ${props =>
    props.openMenu
      ? css`
          -webkit-animation: ${animationClose} 0.3s
            cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
          animation: ${animationClose} 0.3s
            cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
        `
      : css`
          -webkit-animation: ${animationOpen} 0.3s
            cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
          animation: ${animationOpen} 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            both;
        `};

  @media screen and (max-width: 740px) {
    span {
      width: 26.9px;
      height: 30.6px;
    }
    margin: 0px;
  }
`;

export const BotaoSacolaClose = styled.button<ButtonProps>`
  cursor: pointer;
  background-color: transparent;
  border: none;
  width: 42.8px;
  height: 50.3px;
  z-index: 1;

  ${props =>
    props.openBag &&
    css`
      animation: ${animationOpen} 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53)
        both;
    `}

  @media screen and (max-width: 740px) {
    span {
      width: 26.9px;
      height: 30.6px;
    }
    margin: 0px;
  }
`;

export const ContadorItemBag = styled.div<ContadorProps>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;

  bottom: 2px;

  border-radius: 100%;
  background: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  font-size: 9px;
  font-weight: 600;
`;
