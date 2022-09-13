import styled from 'styled-components';
import { PulseHeart } from './animationIcon';

type ButtonBagProps = {
  productInBag: boolean;
};

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 740px) {
    flex-direction: column;
  }
`;

export const BotaoReservaSacola = styled.button<ButtonBagProps>`
  background: ${props => (props.productInBag ? 'rgb(239, 31, 95)' : 'black')};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  font-family: 'Roboto Mono', monospace;
  font-size: 24px;
  width: ${props => (props.productInBag ? '248px' : '')};
  height: ${props => (props.productInBag ? '70px' : '')};

  line-height: 1.5;
  color: #fff;
  border: none;
  margin: 40px 10px 0 0;
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

  .heart{
    animation: -webkit-animation: ${PulseHeart}-fwd 0.5s ease-in-out infinite both;
	  animation: ${PulseHeart} 0.5s ease-in-out infinite both;
    
  }
`;

export const BotaoReservaWhats = styled.button`
  background: rgb(37, 211, 102);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  font-family: 'Roboto Mono', monospace;
  font-size: 24px;

  line-height: 1.5;
  color: #fff;
  border: none;
  margin-top: 40px;
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
