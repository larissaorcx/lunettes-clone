import styled, { css } from 'styled-components';
import { animationRedes } from '../Footer/InfoProdutos/animacao';

type ConteinerBagProps = {
  openBag: boolean | null;
  scroll: boolean;
};

type buttonProps = {
  buttonBagFinalize: boolean;
};

export const ConteinerBag = styled.div<ConteinerBagProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 0px 35px 20vh;
  margin: ${props => (props.scroll ? '105px 0 0 0' : '155px 0 0 0')};
  /* background: #000; */
  @media screen and (max-width: 740px) {
    margin: 100px 0 0 0;
  }
`;

export const Title = styled.h2<ConteinerBagProps>`
  font-family: 'MonumentExtended', monospace;
  text-transform: uppercase;
  font-size: 32px;

  line-height: 1.21;
  text-align: left;
  color: rgb(255, 255, 255);
  margin-bottom: 25px;
  background: black;

  border: none;
  z-index: ${props => (props.openBag ? '0' : '-2')};

  @media screen and (max-width: 740px) {
    font-size: 24px;
  }
`;

export const InfoBag = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TitleInfo = styled.h2`
  font-weight: 900;
  text-transform: uppercase;
  font-family: 'RobotoMono', monospace;
  font-size: 27px;
  font-weight: 900;

  line-height: 1.5;
  text-align: left;
  color: #fff;
  @media screen and (max-width: 740px) {
    margin-right: 55px;
  }
`;

export const TitleInfoQTD = styled.h2`
  font-weight: 900;
  text-transform: uppercase;
  font-family: 'RobotoMono', monospace;
  font-size: 27px;
  font-weight: 900;

  line-height: 1.5;
  text-align: left;
  color: #fff;
  @media screen and (max-width: 740px) {
    display: none;
  }
`;

export const ContainerTitle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 50px;

  border-bottom: solid 1px #9a9a9a;
  width: 95%;
  @media screen and (max-width: 740px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
export const InfoProdBag = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px #9a9a9a;
  width: 95%;

  @media screen and (max-width: 740px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 30px 0px;
    width: 100%;
  }
`;
export const ContainerProdContador = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 44%;
  @media screen and (max-width: 740px) {
    flex-direction: column;
    align-items: start;
    width: 20%;
  }
`;

export const Containerimg = styled.div`
  width: 118px;
  margin: 30px 0px;
  display: flex;
  align-items: start;
  @media screen and (max-width: 740px) {
    margin: 0;
  }
`;

export const ConteinerInfoProd = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding-left: 20px;
  width: 200px;

  margin: 30px 0px;
  @media screen and (max-width: 740px) {
    margin: 0;
  }
`;

export const CodeBag = styled.span`
  font-size: 14px;

  color: #9a9a9a;
`;
export const NameProd = styled.h3`
  text-transform: uppercase;
  line-height: 1.21;
  font-size: 24px;

  color: #fff;
`;

export const ContainerRemove = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  @media screen and (max-width: 740px) {
    display: none;
  }
`;

export const RemoveBag = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border: none;
  cursor: pointer;
  height: 25px;
  width: 147px;
  background: transparent;
`;

export const Titleremore = styled.span`
  font-size: 14px;
  color: rgb(255, 255, 255);
  background: transparent;
`;

export const ContainerSumtotal = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  padding: 30px 0px;
  justify-content: space-between;
  align-items: center;
`;

export const PrecoTotal = styled.span`
  font-size: 24px;
  font-weight: bold;
  line-height: 1.5;
  color: rgb(255, 255, 255);
  margin-right: 26.2%;
  @media screen and (max-width: 740px) {
    margin: 0px;
  }
`;

export const ButtonsBag = styled.div`
  display: flex;
  flex-direction: row;
  width: 96%;

  justify-content: end;
  align-items: center;
  @media screen and (max-width: 740px) {
    flex-direction: column;
  }
`;

export const ButtonContinuarComprando = styled.button`
  background: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);

  font-size: 18px;
  font-weight: bold;

  line-height: 1.5;
  color: #000;
  border: none;

  margin-right: 10px;
  border-radius: 8px;
  cursor: pointer;
  /* padding: 10px 25px; */
  transition: background 0.2s linear 0s;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 60px;
  .cart {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }

  &:hover {
    background: rgb(133, 133, 133);
    .cart {
      animation: ${animationRedes} 0.8s ease 0s 1 normal both;
    }
  }

  @media screen and (max-width: 740px) {
    padding: 0px;
    margin: 20px 0px 10px 0px;
    font-size: 20px;
  }
`;

export const ButtonFinalizarCompra = styled.button<buttonProps>`
  background: rgb(37, 211, 102);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);

  font-size: 18px;
  font-weight: bold;

  line-height: 1.5;
  color: #fff;
  border: none;

  margin-right: 10px;
  border-radius: 8px;
  cursor: pointer;
  padding: 10px 25px;
  transition: background 0.2s linear 0s;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 60px;

  .whats {
    width: 30px;
    height: 30px;
    margin-right: 15px;
  }

  &:hover {
    background: rgb(0, 186, 68);
    .whats {
      animation: ${animationRedes} 0.8s ease 0s 1 normal both;
    }
  }

  @media screen and (max-width: 740px) {
    padding: 0px;
    margin: 20px 0px 10px 0px;
    font-size: 20px;
  }
`;
