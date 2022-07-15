import styled from 'styled-components';

interface DestaquesProps {
  color: string;
  clickButton: boolean;
}

export const DestaquesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;

  flex-direction: column;
  @media screen and (max-width: 740px) {
    width: 100vw;
  }
`;

export const Titulo = styled.h2`
  font-family: MonumentExtended;
  text-transform: uppercase;
  font-size: 42px;
  font-weight: 800;
  padding-top: 70px;

  @media screen and (max-width: 740px) {
    width: 250px;
    height: 100px;

    display: flex;
    justify-content: Center;
    font-size: 24px;
    text-align: center;

    margin-bottom: 70px;
  }
`;
export const ProdutoContainer = styled.div`
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  grid-gap: 80px;

  @media screen and (max-width: 740px) {
    display: flex;
    flex-direction: column;
  }
`;
export const Produto = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 740px) {
    margin: 0px;
  }
`;
export const InfosProduto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding-bottom: 25px;
  @media screen and (max-width: 740px) {
    padding-bottom: 10px;
  }
`;
export const NomeProduto = styled.h3`
  font-family: 'Roboto Mono', monospace;
  font-size: 24px;

  line-height: 1.5;
  color: #000;
  margin-top: 10px;

  @media screen and (max-width: 740px) {
    font-size: 16px;
  }
`;
export const CodigoProduto = styled.p`
  font-family: 'Roboto Mono', monospace;
  font-size: 16px;

  line-height: 1.25;
  color: #9a9a9a;
  @media screen and (max-width: 740px) {
    font-size: 10px;
  }
`;
export const Preço = styled.span`
  font-family: 'Roboto Mono', monospace;
  font-size: 24px;
  font-weight: bold;

  line-height: 1.5;
  color: black;
  @media screen and (max-width: 740px) {
    font-size: 16px;
  }
`;
export const BotaoCores = styled.button<DestaquesProps>`
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 8px;

  cursor: pointer;
  background: ${props => props.color};
  border: ${props => (props.clickButton ? 'solid 2px #000' : '')};
  border-radius: ${props => (props.clickButton ? '8px' : '')};
  width: ${props => (props.clickButton ? '32px' : '')};
  height: ${props => (props.clickButton ? '32px' : '')};
`;
export const BotaoReserva = styled.button`
  width: 248px;
  height: 70px;
  background: black;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  font-family: 'Roboto Mono', monospace;
  font-size: 24px;

  line-height: 1.5;
  color: #fff;
  border: none;
  margin: 20px 0px 70px 0px;
  border-radius: 8px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgb(133, 133, 133);
  }

  @media screen and (max-width: 740px) {
    width: 165px;
    height: 49px;
    font-size: 16px;
    margin: 20px 0px 10px 0px;
  }
`;
export const TextoBotao = styled.span`
  margin-left: 13px;
`;
export const CoresContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  margin: 10px 10px 0px 10px;
`;
