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

  @media screen and (max-width: 740px) {
    width: 100vw;
    padding-right: 10px;
    padding-left: 10px;
  }
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

    @media screen and (max-width: 740px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 160px;
      height: 130px;
    }

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
      transition: all 0.3s linear;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        left: 0px;
        top: 0px;
        width: 0%;
        height: 20px;
        background: rgb(255, 255, 255);
        transition: all 0.2s linear 0s;
      }

      &:hover {
        background-color: rgb(255, 255, 255);
        color: rgb(0, 0, 0);
      }

      @media screen and (max-width: 740px) {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        background: rgb(0, 0, 0);
        color: #9a9a9a;
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
  }
  li {
    padding-right: 40px;
    padding-bottom: 30px;

    :hover {
      animation: ${animationRedes} 0.8s ease 0s 1 normal both;
      span {
        background: rgb(255, 255, 255);
        color: rgb(0, 0, 0);
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

      color: #9a9a9a;
      z-index: -1;

      @media screen and (max-width: 740px) {
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgb(0, 0, 0);
        color: #9a9a9a;
        font-size: 16px;
      }
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
  border: none;

  &:hover {
    opacity: 0.5;
  }

  @media screen and (max-width: 740px) {
    font-size: 24px;
  }
`;
