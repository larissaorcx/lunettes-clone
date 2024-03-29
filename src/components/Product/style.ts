import styled, { css } from 'styled-components';

interface ListImagesProps {
  color: string;
  active: boolean;
  name: string;
}

type PrecoProps = {
  openBag: boolean | null;
};

export const ProdutoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 80px;
  place-content: space-around space-between;

  @media screen and (max-width: 740px) {
    display: flex;
    flex-direction: column;
  }
`;
export const Prod = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 370px;
  margin: auto;

  @media screen and (max-width: 740px) {
    margin: 0px;
  }
`;
export const InfosProduto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
export const NomeProduto = styled.h3`
  font-size: 24px;

  line-height: 2.25;
  text-align: center;
  font-weight: 500;
  color: #000;
  margin-top: 10px;
`;
export const CodigoProduto = styled.p`
  font-size: 14px;

  line-height: 2.25;
  color: #9a9a9a;
`;

export const NewCollection = styled.span`
  display: flex;

  margin-top: 10px;
  margin-left: 10px;
  padding: 3px 10px;
  border-radius: 4px 0px;
  background: rgb(37, 211, 102);

  color: rgb(255, 255, 255);
  font-size: 12px;
  font-weight: 700;
`;
export const ContainerPrecos = styled.div<PrecoProps>`
  display: flex;
  flex-direction: ${props => (props.openBag ? 'column' : 'row')};
  justify-content: ${props => (props.openBag ? 'start' : 'center')};
  align-items: start;
  /* @media screen and (max-width: 740px) {
    align-items: ${props => (props.openBag ? 'start' : 'center')};
  } */
`;
export const Preco = styled.span<PrecoProps>`
  font-size: 24px;
  font-weight: bold;
  line-height: 1.5;
  color: ${props => (props.openBag ? 'rgb(255, 255, 255) ' : '#000')};
  @media screen and (max-width: 740px) {
    font-size: 18px;
  }
`;

export const PrecoDiscount = styled.span<PrecoProps>`
  font-display: swap;
  font-size: ${props => (props.openBag ? '14px' : '24px')};
  font-weight: bold;
  line-height: 1.5;
  color: ${props => (props.openBag ? 'rgb(133, 133, 133)' : '#000')};
`;
export const PriceWithDiscount = styled.span<PrecoProps>`
  margin-left: ${props => (props.openBag ? '' : '10px')};

  font-size: 24px;
  font-weight: bold;

  line-height: 1.5;
  color: ${props => (props.openBag ? 'rgb(255, 255, 255) ' : '#ef1f5f')};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: ${props => (props.openBag ? '80px' : '135px')};
    height: 0.5px;
    background: ${props =>
      props.openBag ? 'rgb(133, 133, 133)' : 'rgb(0, 0, 0)'};
    margin: ${props => (props.openBag ? '-10px' : '20px')};
    margin-left: ${props => (props.openBag ? '-2px' : '-142px')};
  }
  @media screen and (max-width: 740px) {
    font-size: 18px;
  }
`;
export const BotaoCores = styled.button<ListImagesProps>`
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 8px;

  cursor: pointer;
  ${props =>
    props.color.charAt(0) === '#'
      ? css`
          background: ${props.color};
        `
      : css`
          background-image: url(${props.color});
        `};

  margin-right: 10px;

  position: relative;

  ${props =>
    props.active &&
    css`
      &::before {
        content: '';
        width: 34px;
        height: 34px;
        position: absolute;
        border: solid 2px #000;
        border-radius: 8px;
        top: -3px;
        left: -2.8px;
        margin-bottom: 5px;
        z-index: 10;
      }
    `};

  &:hover {
    &::before {
      content: '';
      width: 34px;
      height: 34px;
      position: absolute;
      border: solid 2px #000;
      border-radius: 8px;
      top: -3px;
      left: -2.8px;
      margin-bottom: 5px;
      z-index: 10;
    }
  }
  &:hover {
    &::after {
      content: '${props => props.name}';
      font-size: 12px;
      position: absolute;
      width: 100px;
      top: 40px;
      margin-left: -50px;
      padding: 5px;
      background: rgb(0, 0, 0);
      color: rgb(255, 255, 255);
      border-radius: 0px 2px;
      z-index: 10;
    }
  }
`;
export const BotaoReserva = styled.button`
  width: 248px;
  height: 60px;
  background: black;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  font-size: 24px;

  line-height: 1.5;
  color: #fff;
  border: none;
  margin: 29px 10px 0 0;
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
    margin: 20px 0px 10px 0px;
    font-size: 20px;
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

  margin: 20px 10px 0px 10px;
`;

export const ImgDiscount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 370px;
  @media screen and (max-width: 740px) {
    width: 100%;
  }
`;

export const PorcentDiscount = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: end;
  flex-direction: column;
  padding: 10px 11px 10px 10px;
  background: rgb(239, 31, 95);
  z-index: 3;
  top: 15px;
  left: 15px;

  @media screen and (max-width: 740px) {
    width: 50px;
    height: 50px;
    padding: 6px 7px 6px 8px;
    top: 15px;
    left: 15px;
  }
`;
export const Text = styled.span`
  font-size: 16px;

  @media screen and (max-width: 740px) {
    font-size: 14px;
    font-weight: 900;
  }
`;

export const TitleDiscount = styled.h3`
  line-height: 24px;

  font-size: 24px;
  color: rgb(0, 0, 0);
  font-weight: 900;

  @media screen and (max-width: 740px) {
    margin-top: 7px;
    font-size: 18px;
    line-height: 15px;
    text-align: left;
  }
`;
export const RelacionadoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
