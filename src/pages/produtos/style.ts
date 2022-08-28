import styled from 'styled-components';

type ButtonColorProps = {
  openFilter: boolean;
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ContainerCaminho = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 50px;
  margin-bottom: 10px;

  @media screen and (max-width: 740px) {
    margin-top: 20px;
  }
`;

export const Simbolo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5px 0 5px;
`;

export const Caminho = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;

  font-family: 'Roboto Mono', monospace;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 3;
  color: #9a9a9a;

  @media screen and (max-width: 740px) {
    display: flex;
  }
`;

export const Titulo = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 106px;
  height: 29px;
  margin-bottom: 50px;

  font-family: 'MonumentExtended', monospace;
  text-transform: uppercase;
  line-height: 1.21;
  font-size: 42px;

  @media screen and (max-width: 740px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
`;
