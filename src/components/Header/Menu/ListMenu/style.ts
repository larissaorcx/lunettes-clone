import styled from 'styled-components';
import { animationRedes } from '../../../Footer/InfoProdutos/animacao';

export const ListMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  display: flex;

  background: rgb(0, 0, 0);
  z-index: 50;
  padding: 30px;
  border-top: ;
  overflow-y: scroll;
  position: fixed;
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
`;
export const ContainerButtonGrau = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  li {
    padding-right: 40px;
    padding-bottom: 30px;

    :hover {
      animation: ${animationRedes} 0.8s ease 0s 1 normal both;
    }

    span {
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

      &:hover {
        color: rgb(0, 0, 0);
        background: rgb(255, 255, 255);
        z-index: -1;
      }
    }
  }
`;

export const ContainerButtonSol = styled.div`
  display: flex;
  flex-direction: column;

  cursor: pointer;

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    li {
      padding-right: 40px;
    }
  }
  span {
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Roboto Mono', monospace;
    font-size: 16px;
    color: rgb(255, 255, 255);
    margin-bottom: 20px;
    line-height: 3.13;
    margin-bottom: 50px;

    width: 150px;
    height: 18px;
    margin-top: 15px;

    &:hover {
      color: rgb(0, 0, 0);
      background: rgb(255, 255, 255);
      z-index: -1;
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
  text-transform: uppercase;
  background: rgb(0, 0, 0);
  cursor: pointer;
  padding-top: 100px;
`;
