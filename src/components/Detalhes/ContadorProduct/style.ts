import styled from 'styled-components';

export const ContainerContador = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Contador = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #9a9a9a;

  width: 130px;
  height: 60px;
  border-radius: 8px;
`;

export const ButtonContador = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: none;

  width: 42px;
  height: 22px;
  background: transparent;
`;

export const Sinal = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Roboto Mono', monospace;
  color: #000;
  font-size: 24px;
  line-height: 1.5;

  width: 25px;
  height: 25px;
  border-radius: 100px;

  &:hover {
    background-color: rgb(204, 204, 204);
  }
`;

export const ValueContador = styled.span`
  font-family: 'Roboto Mono', monospace;
  font-weight: 500;
  color: #000;
  font-size: 24px;
  line-height: 1.5;
`;
