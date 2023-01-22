import styled from 'styled-components';

type ContadorProps = {
  openBag: boolean | null;
};

export const ContainerContador = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Contador = styled.div<ContadorProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: ${props =>
    props.openBag ? '2px solid rgb(255, 255, 255)' : '2px solid #9a9a9a'};

  width: 130px;
  height: 60px;
  border-radius: 8px;

  @media screen and (max-width: 740px) {
    width: ${props => (props.openBag ? '105px' : '130px')};
    height: ${props => (props.openBag ? '33px' : '60px')};
    margin-left: ${props => (props.openBag ? '55px' : '')};
    margin-top: ${props => (props.openBag ? '15px' : '')};
  }
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

export const Sinal = styled.span<ContadorProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${props => (props.openBag ? 'rgb(255, 255, 255)' : '#000')};
  font-size: 24px;
  line-height: 1.5;

  width: 25px;
  height: 25px;
  border-radius: 100px;

  &:hover {
    background-color: rgb(204, 204, 204);
  }
`;

export const ValueContador = styled.span<ContadorProps>`
  font-weight: 500;
  color: ${props => (props.openBag ? 'rgb(255, 255, 255)' : '#000')};
  font-size: 24px;
  line-height: 1.5;

  @media screen and (max-width: 740px) {
    font-size: 18px;
  }
`;
