import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ContainerCaminho = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 50px;

  @media screen and (max-width: 740px) {
    margin-top: 20px;
  }
`;

export const Simbolo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5px 0 5px;
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

  @media screen and (max-width: 740px) {
    display: flex;
  }
`;

export const Titulo = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 106px;
  height: 29px;
  margin-bottom: 50px;

  font-family: 'MonumentExtended', monospace;
  text-transform: uppercase;
  line-height: 1.21;
  font-size: 42px;

  @media screen and (max-width: 740px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
`;

export const ButtonFilterCor = styled.button`
  background: rgb(238, 238, 238);
  cursor: pointer;

  width: 180px;
  height: 70px;
  border: none;

  font-family: 'Roboto Mono', monospace;
  text-transform: uppercase;
  font-size: 16px;
  color: rgb(0, 0, 0);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    right: 0px;
    top: 18px;
    width: 1px;
    height: 35px;
    background: rgb(221, 221, 221);
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 50px;
`;

export const ButtonFilterModelo = styled.button`
  background: rgb(248, 248, 248);
  cursor: pointer;

  width: 180px;
  height: 70px;
  border: none;

  font-family: 'Roboto Mono', monospace;
  text-transform: uppercase;
  font-size: 16px;
  color: rgb(154, 154, 154);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    right: 0px;
    top: 18px;
    width: 1px;
    height: 35px;
    background: rgb(221, 221, 221);
  }

  &:hover {
    background: rgb(238, 238, 238);
    color: rgb(0, 0, 0);
  }
`;

export const ButtonFilterPreco = styled.button`
  background: rgb(248, 248, 248);
  cursor: pointer;

  width: 180px;
  height: 70px;
  border: none;

  font-family: 'Roboto Mono', monospace;
  text-transform: uppercase;
  font-size: 16px;
  color: rgb(154, 154, 154);

  &:hover {
    background: rgb(238, 238, 238);
    color: rgb(0, 0, 0);
  }
`;
