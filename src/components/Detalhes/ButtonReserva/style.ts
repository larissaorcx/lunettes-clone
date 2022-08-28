import styled from 'styled-components';

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const BotaoReservaSacola = styled.button`
  background: black;
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
    width: 165px;
    height: 49px;
    margin: 20px 0px 10px 0px;
    font-size: 20px;
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
    width: 165px;
    height: 49px;
    margin: 20px 0px 10px 0px;
    font-size: 20px;
  }
`;
