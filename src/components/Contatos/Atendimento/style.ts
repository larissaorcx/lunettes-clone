import styled from 'styled-components';

export const ContatoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fff;

  img {
    background-size: cover;
    width: 50%;
    @media screen and (max-width: 740px) {
      width: 100vw;
      height: 30vh;
    }
  }

  @media screen and (max-width: 740px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
  }
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-left: 120px;

  @media screen and (max-width: 740px) {
    font-size: 24px;
    margin: 0px;
    padding-bottom: 50px;
    padding-left: 0px;
    width: 100vw;
  }
`;

export const Titulo = styled.h2`
  font-family: 'MonumentExtended', monospace;
  text-transform: uppercase;
  font-size: 42px;
  line-height: 1.21;
  text-align: left;
  color: #000;
  padding-top: 50px;

  @media screen and (max-width: 740px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 350px;
    height: 100px;
    font-size: 24px;
    padding-left: 10px;
    line-height: 1.21;
  }
`;
export const Paragrafo = styled.p`
  max-width: 546px;
  max-height: 144px;

  font-size: 16px;
  line-height: 1.5;
  text-align: left;
  color: rgb(154, 154, 154);

  display: flex;
  justify-content: start;

  padding-top: 30px;
  padding-bottom: 106px;

  @media screen and (max-width: 740px) {
    display: flex;
    justify-content: center;

    font-size: 14px;
    padding-top: 50px;
    padding-left: 10px;
    width: 90vw;
  }
`;
