import styled from 'styled-components';

export const Slider = styled.div`
  border-top: 5px solid transparent;
  width: 100%;
  height: auto;
  border-bottom: 1px solid transparent;

  position: relative;

  &::before {
    content: '';
    position: absolute;
    background: linear-gradient(90deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%);
    left: 0px;
    top: -5px;
    z-index: 2;
    width: 20%;
    height: 101.8%;
  }

  &::after {
    content: '';
    position: absolute;
    background: linear-gradient(-90deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%);
    left: 80%;
    top: -5px;
    z-index: 2;
    width: 20%;
    height: 101.8%;
  }
  &:hover {
    &:before {
      z-index: 0;
      background: transparent;
    }
    &:after {
      z-index: 0;
      background: transparent;
    }
  }
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
