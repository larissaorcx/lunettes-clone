import styled, { css } from 'styled-components';
import { animationMenu } from './animacao';

interface MenuProps {
  scroll: boolean;
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
  padding: 0px 60.2px 0px 60px;

  position: fixed;
  top: 0;

  ${props =>
    props.scroll &&
    css`
      animation: ${animationMenu} 0.3s ease 0s 1 normal both;
    `}
  background: ${props => (props.scroll ? 'black' : '')};
  z-index: 99;
`;
export const BotaoMenu = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  width: 42px;
  height: 26px;

  z-index: 1;
`;
export const Logo = styled.div<MenuProps>`
  display: flex;

  width: 245.3px;
  height: ${props => (props.scroll ? '50px' : '108.4px')};
  display: flex;
  justify-content: center;

  padding-top: ${props => (props.scroll ? '0px' : '20px')};

  z-index: 1;
`;
export const BotaoSacola = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  width: 42.8px;
  height: 50.3px;
  z-index: 1;
`;
