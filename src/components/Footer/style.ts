import styled from 'styled-components';

export const Slider = styled.div`
  width: 100%;
  height: auto;
`;
export const Regras = styled.div`
  width: 100%;
  height: 70px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #000;
  @media screen and (max-width: 740px) {
    width: 100vw;
  }
`;
export const TextoRegras = styled.span`
  font-family: 'Roboto Mono', monospace;
  font-size: 16px;
  line-height: 2.25;
  font-weight: 200;
  color: #fff;
  font-weight: bold;

  @media screen and (max-width: 740px) {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 303px;
    height: 48px;
    font-size: 12px;
    line-height: 2.5;
  }
`;
