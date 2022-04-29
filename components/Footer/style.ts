import styled from 'styled-components';

export const Hashtag = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 90px 0px;

  background-image: linear-gradient(
    82deg,
    #fe4c64 3%,
    #b72dc3 49%,
    #641fb9 97%
  );
`;
export const TituloHastag = styled.h2`
  width: 500px;
  height: 50px;
  font-family: 'MonumentExtended', monospace;
  font-size: 42px;
  color: rgb(255, 255, 255);
  margin-bottom: 20px;
`;
export const TextoHashtag = styled.span`
  max-width: 460px;
  font-family: 'Roboto Mono', monospace;
  font-size: 24px;
  color: rgb(255, 255, 255);
  text-align: center;
  margin: 0px 20px;
`;
export const Slider = styled.div`
  width: 100%;
  height: 337px;
`;
export const InfosProduto = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

  padding-top: 105px;

  width: 100%;
  height: 505px;
  background-color: #2c2a40;
`;
export const TituloInfo = styled.h3`
  font-family: 'Roboto Mono', monospace;
  font-size: 16px;
  line-height: 2.25;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;

  padding-bottom: 34px;
`;

export const SolarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 130px;
`;
export const LinkCategorias = styled.a`
  font-family: 'Roboto Mono', monospace;
  font-size: 16px;
  line-height: 2.25;
  font-weight: bold;
  color: #9a9a9a;

  text-decoration: none;
`;
export const GrauContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 70px;
  h2 {
    padding-left: 70px;
  }
`;
export const ContatoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: initial;
  padding-left: 130px;
  width: 500px;
`;
export const RedesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: initial;
  width: 500px;
`;
export const BotaoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
`;
export const BotaoRedes = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding-right: 18px;
`;

export const TextoContato = styled.span`
  font-family: 'Roboto Mono', monospace;
  font-size: 16px;
  color: #9a9a9a;
  margin-bottom: 20px;
`;
export const Regras = styled.div`
  width: 100%;
  height: 70px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #000;
`;
export const TextoRegras = styled.span`
  font-family: 'Roboto Mono', monospace;
  font-size: 16px;
  line-height: 2.25;
  font-weight: 200;
  color: #fff;
`;
