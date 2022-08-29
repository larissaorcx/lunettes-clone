import styled from 'styled-components';

export const Conteiner = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 40% 1fr;

  gap: 40px;

  margin-top: 50px;
  margin-left: 15px;
  margin-bottom: 50px;

  @media screen and (max-width: 740px) {
    display: flex;
    flex-direction: column;
    margin-left: 8px;
    width: 95%;
    justify-content: center;
    align-items: center;
  }
`;
export const MessageError = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const Message = styled.p`
  margin: 10px;

  color: rgb(0, 0, 0);
  text-align: center;
  margin-top: 20px;
  font-family: 'Roboto Mono', monospace;

  font-size: 16px;
  line-height: 2.25;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

export const PorcentDiscountDetalhes = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 100%;
  position: absolute;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  padding: 10px 11px 10px 10px;
  background: rgb(239, 31, 95);
  z-index: 3;
  top: 190px;
  left: 30px;

  @media screen and (max-width: 740px) {
    width: 50px;
    height: 50px;
    padding: 6px 7px 6px 8px;
    top: 150px;
    left: 40px;
  }
`;
export const TextDiscount = styled.span`
  font-family: 'Roboto Mono', monospace;
  font-size: 16px;

  @media screen and (max-width: 740px) {
    font-size: 14px;
    font-weight: 900;
  }
`;

export const ConteinerDescricao = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  width: 100%;
  height: auto;
  @media screen and (max-width: 740px) {
    width: 95%;
  }
`;

export const TitleDescricao = styled.h4`
  font-family: 'Roboto Mono', monospace;
  color: #000;
  font-size: 24px;
  line-height: 1.5;
  margin-bottom: 10px;
`;

export const Descricao = styled.p`
  font-family: 'Roboto Mono', monospace;
  color: #9a9a9a;
  font-size: 16px;
  line-height: 1.5;

  @media screen and (max-width: 740px) {
    width: 360px;
    text-align: justify;
  }
`;

export const ContainerEspecificação = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 740px) {
    width: 90%;
  }
`;

export const Especificacoes = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const ListEspecificacoes = styled.li`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const TitleDetalhes = styled.h4`
  font-family: 'Roboto Mono', monospace;
  color: #000;
  font-size: 16px;
  line-height: 1.5;
  width: 50%;
  @media screen and (max-width: 740px) {
    width: 40%;
  }
`;

export const Value = styled.p`
  font-family: 'Roboto Mono', monospace;
  color: #9a9a9a;
  font-size: 16px;
  line-height: 1.5;
`;
