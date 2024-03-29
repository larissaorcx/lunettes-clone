import styled from 'styled-components';

export const ContainerDetalhes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  @media screen and (max-width: 740px) {
    margin: 0;
  }
`;

export const Conteiner = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  /* display: grid;
  grid-template-columns: 700px 1fr;
  gap: 40px; */

  margin-top: 50px;
  margin: auto;

  @media screen and (max-width: 740px) {
    display: flex;
    flex-direction: column;
    margin: 0px;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;
export const MessageError = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 150px 0px;
  width: 100%;
  min-height: 100px;
`;

export const Message = styled.p`
  margin: 10px;

  color: rgb(0, 0, 0);
  text-align: center;
  margin-top: 20px;

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

  color: rgb(154, 154, 154);
  font-size: 14px;
  line-height: 2.25;
`;
export const ImgDiscountDetalhes = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: row;
  width: 40%;
  @media screen and (max-width: 740px) {
    width: 100%;
  }
`;

export const PorcentDiscountDetalhes = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: end;
  flex-direction: column;
  padding: 10px 11px 10px 10px;
  background: rgb(239, 31, 95);
  z-index: 3;
  top: 190px;
  left: 55px;

  @media screen and (max-width: 740px) {
    width: 50px;
    height: 50px;
    padding: 6px 7px 6px 8px;
    top: 90px;
    left: 5px;
  }
`;
export const TextDiscount = styled.span`
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
  width: 45%;
  height: auto;
  margin-left: 40px;
  @media screen and (max-width: 740px) {
    width: 100%;
    margin: 0px;
    padding: 0px 20px 20px;
  }
`;

export const TitleDescricao = styled.h4`
  color: #000;
  font-size: 24px;
  line-height: 1.5;
  margin-bottom: 10px;
  /* width: 50vw; */
`;

export const Descricao = styled.p`
  color: #9a9a9a;
  font-size: 16px;
  line-height: 1.5;
  text-align: justify;
  width: 90%;
  @media screen and (max-width: 740px) {
    text-align: justify;
  }
`;

export const ContainerEspecificação = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 740px) {
    width: 100%;
    padding: 0px 20px 20px;
  }
`;

export const Especificacoes = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  width: 50vw;
  @media screen and (max-width: 740px) {
    justify-content: space-between;
    width: 100%;
  }
`;

export const ListEspecificacoes = styled.li`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const TitleDetalhes = styled.h4`
  color: #000;
  font-size: 16px;
  line-height: 1.5;
  width: 50%;
  @media screen and (max-width: 740px) {
    width: 40%;
  }
`;

export const Value = styled.p`
  color: #9a9a9a;
  font-size: 16px;
  line-height: 1.5;
  margin-left: 45px;
`;

export const ContainerInfoProdImage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;

  @media screen and (max-width: 740px) {
    flex-direction: column;
  }
`;
