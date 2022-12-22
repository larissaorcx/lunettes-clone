import styled, { css } from 'styled-components';
import { animationCloseFilter, animationOpenFilter } from './animation';

type ButtonColorProps = {
  openFilter: boolean;
};

type ButtonOpen = {
  openButton: boolean;
};
type Filters = {
  noFilters: boolean;
};

type ButtonFilter = {
  contadorFilter: number;
};

export const ContainerButton = styled.div<ButtonOpen>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  /* margin-bottom: 50px; */

  @media screen and (max-width: 740px) {
    width: 100%;
    height: 100vh;
    background: rgb(255, 255, 255);
    position: fixed;
    justify-content: flex-start;
    top: 0px;
    z-index: 1000;
    display: ${props => (props.openButton ? 'flex' : 'none')};
    -webkit-animation: ${animationOpenFilter} 1.1s both;
    animation: ${animationOpenFilter} 1.1s both;
    overflow: hidden scroll;
  }
`;
export const ButtonFilter = styled.div<ButtonOpen>`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 20px;
`;

export const ContainerButtonClose = styled.div<ButtonOpen>`
  display: none;

  @media screen and (max-width: 740px) {
    width: 100%;
    display: ${props => (props.openButton ? 'flex' : 'none')};
    justify-content: flex-end;
    border: none;
    margin: 21.6px 21.6px 38.3px 0;
    background: transparent;
  }
`;

export const ButtonCloseFilters = styled.button<ButtonOpen>`
  border: none;
  background: transparent;
  -webkit-animation: ${animationCloseFilter} 0.6s ease-out 0.9s both;
  animation: ${animationCloseFilter} 0.6s ease-out 0.9s both; ;
`;

export const Button = styled.button<ButtonFilter>`
  display: none;
  align-items: center;
  padding: 8px 15px;
  background: transparent;
  border-radius: 3px;
  margin-right: 20px;
  position: relative;
  border: 1px solid rgb(154, 154, 154);

  width: 116px;
  height: 40px;

  position: relative;

  ${props =>
    props.contadorFilter !== 0 &&
    css`
      &::before {
        content: '${props.contadorFilter}';
        position: absolute;
        width: 15px;
        height: 15px;
        border-radius: 100%;
        justify-content: center;
        align-items: center;
        left: -8px;
        top: -8px;
        font-size: 10px;
        background: rgb(0, 0, 0);
        color: rgb(255, 255, 255);
        display: flex;
      }
    `}

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

  @media screen and (max-width: 740px) {
  }
`;

export const Filter = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 49px;
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
    width: 166px;
    height: 45px;
    font-size: 14px;
    margin: 0px;
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
    width: 166px;
    height: 45px;
    font-size: 14px;
    margin: 0px;
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
    width: 166px;
    height: 45px;
    font-size: 14px;
    margin: 0px;
  }
`;

export const AllFilters = styled.div<Filters>`
  display: ${props => (props.noFilters ? 'none' : 'flex')};
`;

export const ButtonRemoreveFilter = styled.button`
  background: transparent;
  border: none;
  color: rgb(40, 64, 191);
  text-decoration: underline;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    color: rgb(239, 31, 95);
    transition: all 0.2s linear 0s;
  }

  font-family: 'Roboto Mono', monospace;
  font-size: 13px;
`;

export const NameFilter = styled.p`
  margin-right: 3px;
  color: rgb(154, 154, 154);
  font-size: 14px;
  font-family: 'Roboto Mono', monospace;
  text-transform: uppercase;
`;
