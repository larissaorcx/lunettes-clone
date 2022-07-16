import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 50px;
`;

export const Simbolo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9.2px 14.2px 9.2px 13.7px;
`;

export const Caminho = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Roboto Mono', monospace;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 3;
  color: #9a9a9a;
`;

export const Titulo = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 51px;
  margin-bottom: 50px;

  font-family: 'MonumentExtended', monospace;
  text-transform: uppercase;
  line-height: 1.21;
  font-size: 42px;
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 50px;
`;

export const ButtonFilter = styled.button`
  background-color: rgb(248, 248, 248);
  cursor: pointer;

  width: 180px;
  height: 70px;

  font-family: 'Roboto Mono', monospace;
  text-transform: uppercase;
  font-size: 16px;

  &:hover {
    background: rgb(238, 238, 238);
    color: rgb(154, 154, 154);
  }
`;
