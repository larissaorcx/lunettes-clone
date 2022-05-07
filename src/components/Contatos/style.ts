import styled from 'styled-components';

export const ContatoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;
export const TextContainer = styled.div`
  padding-left: 120px;
  width: 960px;
`;

export const Titulo = styled.h2`
  font-family: 'MonumentExtended', monospace;
  text-transform: uppercase;
  font-size: 42px;

  line-height: 1.21;
  text-align: left;
  color: #000;

  padding-top: 50px;
`;
export const Paragrafo = styled.p`
  width: 546px;
  height: 144px;

  font-family: 'Roboto Mono', monospace;
  font-size: 16px;
  font-weight: 200;

  line-height: 1.5;
  text-align: left;
  color: rgb(154, 154, 154);

  padding-top: 30px;
  padding-right: 200px;
  padding-bottom: 106px;
`;

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  background-color: #f8f8f8;
  width: 100%;
  padding: 60px 0px;
`;

export const InfosContatos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 60px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 256px;
    height: 245px;

    & + div {
      margin-left: 50px;

      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const TituloContato = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 40px;
  text-transform: uppercase;
  color: #000;
  padding-top: 41px;
`;

export const TextContato = styled.span`
  font-family: 'Roboto Mono', monospace;
  font-size: 16px;
  font-weight: 200;
  text-align: center;
  line-height: 1.5;
  color: #9a9a9a;
`;
