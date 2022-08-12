import styled from 'styled-components';

type ButtonColorProps = {
  openFilter: boolean;
};

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 50px;
  @media screen and (max-width: 740px) {
    width: 95%;
    display: flex;
    margin: auto;
    margin-bottom: 50px;
  }
`;
export const ButtonFilter = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  display: none;
  align-items: center;
  padding: 8px 15px;
  background: transparent;
  border-radius: 3px;
  margin-right: 20px;
  position: relative;
  border: 1px solid rgb(154, 154, 154);

  width: 116px;
  height: 34px;

  @media screen and (max-width: 740px) {
    display: flex;
    justify-content: flex-end;
  }
`;

export const Titulo = styled.h2`
  color: rgb(154, 154, 154);

  line-height: 3;
  font-family: 'Roboto Mono', monospace;
  font-size: 14px;
  text-align: left;
  margin-left: 5px;
`;

export const ContainerFilter = styled.div`
  display: flex;

  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const ButtonFilterCor = styled.button<ButtonColorProps>`
  background-color: ${props =>
    props.openFilter ? 'rgb(238, 238, 238)' : 'rgb(248, 248, 248)'};
  cursor: pointer;
  transition: all 0.2s linear 0s;
  color: ${props =>
    props.openFilter ? 'rgb(0, 0, 0);' : 'rgb(154, 154, 154);'};

  width: 180px;
  height: 70px;
  border: none;

  font-family: 'Roboto Mono', monospace;
  text-transform: uppercase;
  font-size: 16px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    right: 0px;
    top: 18px;
    width: 1px;
    height: 35px;
    background: rgb(221, 221, 221);

    @media screen and (max-width: 740px) {
      top: 10px;
      height: 24px;
    }
  }

  &:hover {
    background: rgb(238, 238, 238);
    color: rgb(0, 0, 0);
  }

  @media screen and (max-width: 740px) {
    width: 114px;
    height: 45px;
    font-size: 14px;
  }
`;

export const ButtonFilterModelo = styled.button<ButtonColorProps>`
  background-color: ${props =>
    props.openFilter ? 'rgb(238, 238, 238)' : 'rgb(248, 248, 248)'};
  cursor: pointer;
  transition: all 0.2s linear 0s;

  width: 180px;
  height: 70px;
  border: none;

  font-family: 'Roboto Mono', monospace;
  text-transform: uppercase;
  font-size: 16px;
  color: ${props =>
    props.openFilter ? 'rgb(0, 0, 0);' : 'rgb(154, 154, 154);'};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    right: 0px;
    top: 18px;
    width: 1px;
    height: 35px;
    background: rgb(221, 221, 221);

    @media screen and (max-width: 740px) {
      top: 10px;
      height: 24px;
    }
  }

  &:hover {
    background: rgb(238, 238, 238);
    color: rgb(0, 0, 0);
  }
  @media screen and (max-width: 740px) {
    width: 114px;
    height: 45px;
    font-size: 14px;
  }
`;

export const ButtonFilterPreco = styled.button<ButtonColorProps>`
  background-color: ${props =>
    props.openFilter ? 'rgb(238, 238, 238)' : 'rgb(248, 248, 248)'};
  cursor: pointer;
  transition: all 0.2s linear 0s;

  width: 180px;
  height: 70px;
  border: none;

  font-family: 'Roboto Mono', monospace;
  text-transform: uppercase;
  font-size: 16px;
  color: ${props =>
    props.openFilter ? 'rgb(0, 0, 0);' : 'rgb(154, 154, 154);'};

  &:hover {
    background: rgb(238, 238, 238);
    color: rgb(0, 0, 0);
  }
  @media screen and (max-width: 740px) {
    width: 114px;
    height: 45px;
    font-size: 14px;
  }
`;
