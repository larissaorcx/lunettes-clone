import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid rgb(238, 238, 238);
  width: 75%;
  margin: 0 auto;
  padding: 20px;
`;

export const ContainerCores = styled.ul`
  display: flex;
  align-items: center;
  width: auto;
  height: 28px;

  &:hover {
    li {
      color: rgb(0, 0, 0);
      cursor: pointer;
    }

    button {
      width: 25px;
      height: 25px;
      border: 2px solid rgb(0, 0, 0);
      border-radius: 4px;
    }
  }
`;

export const Item = styled.li`
  list-style: none;

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
