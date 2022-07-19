import styled from 'styled-components';
import { animationRedes } from './animacao';

export const InfosProdutoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

  padding-top: 105px;

  width: 100%;
  height: 505px;
  background-color: #2c2a40;

  @media screen and (max-width: 740px) {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 808px;

    padding: 20px;
    width: 100vw;
  }
`;
export const TituloInfo = styled.h3`
  font-family: 'Roboto Mono', monospace;
  font-size: 16px;
  line-height: 2.25;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;

  padding-bottom: 34px;

  @media screen and (max-width: 740px) {
    width: 125px;
  }
`;

export const ImageLogo = styled.div`
  width: 150px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 740px) {
    width: 110px;
    height: 618px;
    display: flex;
    padding-top: 59px;
  }
`;

export const Category = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 400px;

  @media screen and (max-width: 740px) {
    display: flex;
    flex-direction: row;
    width: 320px;
    margin: 0px;
    padding-top: 50px;
    padding-bottom: 20px;
  }
`;

export const SolarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 30px;

  @media screen and (max-width: 740px) {
    margin: 0px;
    padding-bottom: 0px;
    width: 100vw;
    order: 1;
    margin: 0px 0px 35px;
  }
`;
export const LinkCategorias = styled.a`
  font-family: 'Roboto Mono', monospace;
  font-size: 16px;
  line-height: 2.25;
  font-weight: bold;
  color: #9a9a9a;
  width: 100vw;
  text-decoration: none;
`;
export const GrauContainer = styled.div`
  padding-left: 70px;
  h2 {
    padding-left: 70px;
  }
  @media screen and (max-width: 740px) {
    margin: 0px;
    padding: 0px;
  }
`;
export const ContatoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: initial;

  @media screen and (max-width: 740px) {
    margin: 0px;
    padding: 0px;
    margin: 0px 0px 35px;
    width: 320px;
  }
`;
export const RedesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: initial;
  width: 320px;
`;
export const BotaoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;

  @media screen and (max-width: 740px) {
    width: 200px;
  }
`;
export const BotaoRedes = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding-right: 18px;

  &:hover {
    animation: ${animationRedes} 0.8s ease 0s 1 normal both;
  }
`;

export const TextoContato = styled.span`
  font-family: 'Roboto Mono', monospace;
  font-size: 16px;
  color: #9a9a9a;
  margin-bottom: 20px;
  font-weight: bold;
  width: 200px;
`;
