import styled, { css } from 'styled-components';
import { animationMenu } from './animacao';
import {
  animationContainer,
  animationContainerClose,
} from '../ListMenu/animationList';

interface MenuProps {
  scroll: boolean;
  openMenu: boolean | null;
}

interface ButtonProps {
  openMenu: boolean | null;
}

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* width: ${props => (props.theme.open ? '100%' : '0')}; */
  height: 100vh;

  z-index: 50;
  overflow-y: scroll;
  position: fixed;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #000;
    z-index: -1;

    ${props => {
      switch (props.theme.open) {
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
    width: 100vw;
    overflow-y: scroll;
  }
`;

export const MenuContainer = styled.div<MenuProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${props => (props.scroll ? '65px' : '120px')};
  flex-direction: row;
  justify-content: space-between;
  margin: 0px 735.5px 0px 0px;

  position: fixed;
  top: 0;

  background-color: ${props => (props.scroll ? 'black' : '')};
  ${props =>
    props.openMenu &&
    css`
      background-color: rgb(15, 15, 15);
      border-bottom: 1px solid rgb(30, 30, 30);
    `}

  z-index: 99;

  @media screen and (max-width: 740px) {
    width: 100vw;
    padding-right: 20px;
    padding-left: 20px;
  }
`;
export const BotaoMenu = styled.button<ButtonProps>`
  cursor: pointer;
  background-color: transparent;
  border: none;
  margin-left: 30px;

  z-index: 1;

  @media screen and (max-width: 740px) {
    width: ${props => (props.openMenu ? '20.4px' : '26.9px')};
    height: ${props => (props.openMenu ? '20.4px' : '31.6px')};
    margin: 0px;
  }
`;
export const Logo = styled.div<MenuProps>`
  display: flex;
  width: 210px;
  height: ${props => (props.scroll ? '50px' : '100px')};
  display: flex;
  justify-content: center;

  padding-top: ${props => (props.scroll ? '0px' : '20px')};

  z-index: 1;

  @media screen and (max-width: 740px) {
    width: 150px;
    height: ${props => (props.scroll ? '50px' : '60px')};
    padding: 0px;
  }
`;
export const BotaoSacola = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  width: 42.8px;
  height: 50.3px;
  margin-right: 60.2px;
  z-index: 1;

  @media screen and (max-width: 740px) {
    width: 26.9px;
    height: 31.6px;
    margin: 0px;
  }
`;
