import styled, { css } from 'styled-components';
import { animationMenu } from './animacao';

interface MenuProps {
  scroll: boolean;
  openMenu: boolean;
}

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuContainer = styled.div<MenuProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${props => (props.scroll ? '65px' : '100px')};
  flex-direction: row;
  justify-content: space-between;
  margin: 0px 735.5px 437.5px 0;

  position: fixed;
  top: 0;

  ${props =>
    props.scroll &&
    css`
      animation: ${animationMenu} 0.3s ease 0s 1 normal both;
    `}
  background-color: ${props => (props.scroll ? 'black' : '')};
  background-color: ${props => (props.openMenu ? 'black' : '')};
  z-index: 99;

  @media screen and (max-width: 740px) {
    width: 100vw;
    padding-right: 20px;
    padding-left: 20px;
  }
`;
export const BotaoMenu = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  width: 42px;
  height: 26px;
  margin-left: 60px;

  z-index: 1;
  @media screen and (max-width: 740px) {
    width: 25px;
    height: 25px;
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
