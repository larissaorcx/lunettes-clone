import styled from 'styled-components';

export const Container = styled.ul`
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid rgb(238, 238, 238);
  width: 100%;
  margin: 0 auto;
  padding: 25px;
  margin-bottom: 20px;

  @media screen and (max-width: 740px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    border: none;
  }
`;

export const ContainerFilter = styled.li`
  display: flex;
  align-items: center;
  width: auto;
  height: 28px;

  &:hover {
    color: rgb(0, 0, 0);
    cursor: pointer;

    span {
      color: rgb(0, 0, 0);
    }

    button {
      width: 25px;
      height: 25px;
      border: 2px solid rgb(0, 0, 0);
      border-radius: 4px;
    }
  }
`;

export const Item = styled.span`
  font-family: 'Roboto Mono', monospace;
  text-transform: uppercase;
  font-size: 16px;
  color: rgb(154, 154, 154);

  display: flex;
  align-items: center;
`;

export const Box = styled.button`
  width: 25px;
  height: 25px;

  background: white;
  border: 2px solid rgb(154, 154, 154);
  margin: 2px;
  border-radius: 4px;
  margin-right: 10px;
`;
