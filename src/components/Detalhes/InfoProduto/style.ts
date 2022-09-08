import styled from 'styled-components';

export const ContainerConteudo = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  align-items: start;

  margin-bottom: 30px;

  @media screen and (max-width: 740px) {
    width: 95%;
  }
`;

export const NameProduct = styled.h3`
  font-family: 'MonumentExtended', monospace;
  text-transform: uppercase;
  line-height: 1.21;
  font-size: 42px;
  margin: 5px 0px;
`;

export const ContainerCaminhoDetalhes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 20px;
  width: auto;

  @media screen and (max-width: 740px) {
  }
`;

export const Text = styled.span`
  width: auto;
  display: flex;
  margin-bottom: 5px;
  margin-top: 20px;

  font-family: 'Roboto Mono', monospace;
  color: rgb(154, 154, 154);
  font-size: 14px;
  line-height: 2.25;
`;
