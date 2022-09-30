import styled from 'styled-components';
import { animationRedes } from '../../Footer/InfoProdutos/animacao';
import { animationentrace } from './animation';

interface containerQRCodeProps {
  buttonBagFinalize: boolean;
}

export const ContainerQRCode = styled.div<containerQRCodeProps>`
  display: ${props => (props.buttonBagFinalize ? 'flex' : 'none')};
  width: 95%;

  flex-direction: column;
  padding: 50px;
  background: white;
  -webkit-animation: ${animationentrace} 1.1s both;
  animation: ${animationentrace} 1.1s both;
  margin-bottom: 20px;

  @media screen and (max-width: 740px) {
    width: 100%;
  }
`;

export const ContainerImgQRCode = styled.div`
  max-width: 210px;
  max-height: 215px;

  display: flex;
  margin: 0px;
  padding: 0px;
  margin-left: 36px;
  position: relative;
  margin-top: 35px;

  img {
    min-width: 220px !important;
    max-width: 220px !important;
    min-height: 220px !important;
    max-height: 220px !important;
    inset: -20px !important;
    margin: 0px !important;
    z-index: -2 !important;
  }

  span {
    min-width: 188px !important;
    max-width: 18px !important;
    min-height: 248px !important;
    max-height: 248px !important;
    inset: -20px !important;
    margin: 0px !important;
    z-index: -2;
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid rgb(0, 0, 0);
    bottom: 35px;
    left: -35px;
  }
`;

export const Title = styled.h3`
  font-family: 'Roboto Mono', monospace;
  color: rgb(0, 0, 0);
  font-size: 20px;
  width: 100%;
  margin-bottom: 20px;
`;

export const Discription = styled.span`
  font-family: 'Roboto Mono', monospace;
  color: rgb(154, 154, 154);
  font-size: 16px;
  width: 90%;
  margin-bottom: 20px;
  text-align: justify;
`;

export const ContainerButtonFinalize = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 95%;
`;

export const ButtonFinalize = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 300px;
  height: 55px;
  border: none;
  margin: 10px 0px 0px;
  padding: 15px;

  border-radius: 4px;
  font-family: 'Roboto Mono', monospace;
  font-weight: 900;
  box-shadow: rgb(0, 0, 0) 0px 4px 8px 0px;
  font-size: 18px;

  cursor: pointer;
  background: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  transition: background 0.8s linear 0s;

  .flag {
    width: 35px;
    height: 35px;
    margin-right: 10px;
  }

  &:hover {
    background: rgb(133, 133, 133);

    .flag {
      animation: ${animationRedes} 0.8s ease 0.3s 1 normal both;
    }
  }
`;
