import styled from 'styled-components';

export const ContainerPrecoRemove = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 37%;

  @media screen and (max-width: 740px) {
    justify-content: end;
    align-items: start;
  }
`;

export const ContainerContador = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;

  @media screen and (max-width: 740px) {
    flex-direction: column;
    align-items: start;
    margin-left: 5px;
  }
`;

export const ButtonRemove = styled.button`
  display: none;
  border: none;
  cursor: pointer;
  color: rgb(154, 154, 154);
  background: transparent;
  text-decoration: underline;
  margin: 15px 0 0px 130px;

  font-size: 16px;
  @media screen and (max-width: 740px) {
    display: flex;
  }
`;
