import styled, { css } from 'styled-components';

type ConteinerBagProps = {
  openBag: boolean | null;
};

export const ConteinerBag = styled.div<ConteinerBagProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 0px 35px 20vh;
  margin: 155px 0 0 0;
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
`;

export const ContainerTitle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 36px;
  margin: 30px 0px;
`;
export const InfoProdBag = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-bottom: solid 1px #9a9a9a;
  border-top: solid 1px #9a9a9a;
  width: 95%;
`;

export const Containerimg = styled.div`
  width: 118px;
  margin: 30px 0px;
  display: flex;
  align-items: start;
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
`;

export const CodeBag = styled.span`
  font-family: 'Roboto Mono', monospace;
  font-size: 14px;

  color: #9a9a9a;
`;
export const NameProd = styled.h3`
  font-family: 'Roboto Mono', monospace;
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
  font-family: 'Roboto Mono', monospace;
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
  font-family: 'Roboto Mono', monospace;
  font-size: 24px;
  font-weight: bold;
  line-height: 1.5;
  color: rgb(255, 255, 255);
  margin-right: 24.7%;
`;

export const ButtonsBag = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  justify-content: end;
  align-items: center;
`;

export const ButtonContinuarComprando = styled.button`
  background: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  font-family: 'Roboto Mono', monospace;
  font-size: 24px;

  line-height: 1.5;
  color: #000;
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

  &:hover {
    background: rgb(133, 133, 133);
  }

  @media screen and (max-width: 740px) {
    width: 246px;
    height: 50px;
    margin: 20px 0px 10px 0px;
    font-size: 20px;
  }
`;

export const ButtonFinalizarCompra = styled.button`
  background: rgb(37, 211, 102);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  font-family: 'Roboto Mono', monospace;
  font-size: 24px;

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

  &:hover {
    background: rgb(0, 186, 68);
  }

  @media screen and (max-width: 740px) {
    width: 246px;
    height: 50px;
    margin: 20px 0px 10px 0px;
    font-size: 20px;
  }
`;
