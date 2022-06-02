import styled from 'styled-components';

export const ContatoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fff;

  @media screen and (max-width: 720px) {
    display: flex;
    flex-direction: column;
  }
`;
export const TextContainer = styled.div`
  margin-left: 120px;
  max-width: 960px;
`;

export const Titulo = styled.h2`
  font-family: 'MonumentExtended', monospace;
  text-transform: uppercase;
  font-size: 42px;

  line-height: 1.21;
  text-align: left;
  color: #000;

  padding-top: 50px;

  @media screen and (max-width: 720px) {
    font-size: 24px;
  }
`;
export const Paragrafo = styled.p`
  max-width: 546px;
  max-height: 144px;

  font-family: 'Roboto Mono', monospace;
  font-size: 16px;
  font-weight: 200;

  line-height: 1.5;
  text-align: left;
  color: rgb(154, 154, 154);

  padding-top: 30px;
  padding-right: 200px;
  padding-bottom: 106px;

  @media screen and (max-width: 1170px) {
    font-size: 14px;
  }

  @media screen and (max-width: 720px) {
    font-size: 14px;
  }
`;
