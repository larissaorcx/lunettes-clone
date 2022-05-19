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
`;
export const TituloInfo = styled.h3`
  font-family: 'Roboto Mono', monospace;
  font-size: 16px;
  line-height: 2.25;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;

  padding-bottom: 34px;
`;

export const SolarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 70px;
`;
export const LinkCategorias = styled.a`
  font-family: 'Roboto Mono', monospace;
  font-size: 16px;
  line-height: 2.25;
  font-weight: bold;
  color: #9a9a9a;

  text-decoration: none;
`;
export const GrauContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 70px;
  h2 {
    padding-left: 70px;
  }
`;
export const ContatoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: initial;
  padding-left: 70px;
  width: 500px;
`;
export const RedesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: initial;
  width: 500px;
`;
export const BotaoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
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
`;
