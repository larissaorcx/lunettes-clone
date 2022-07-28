import styled from 'styled-components';

interface BoxProps {
  colorBox: string;
}

export const Container = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid rgb(238, 238, 238);
  width: 75%;
  margin: 0 auto;
  padding: 20px;
`;

export const ContainerCores = styled.ul`
  display: flex;
  align-items: center;
  padding: 10px;

  &:hover {
    li {
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

export const Item = styled.li`
  list-style: none;
  width: 183px;
  height: 28px;

  font-family: 'Roboto Mono', monospace;
  text-transform: uppercase;
  font-size: 16px;
  color: rgb(154, 154, 154);

  display: flex;
  align-items: center;
`;

export const Box = styled.button<BoxProps>`
  width: 25px;
  height: 25px;
  background: ${props => props.colorBox};
  border: 2px solid rgb(238, 238, 238);
  margin: 2px;
  border-radius: 4px;
  margin-right: 10px;
`;
