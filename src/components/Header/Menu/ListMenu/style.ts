import styled from 'styled-components';

export const ListMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  display: flex;

  background: rgb(0, 0, 0);
  z-index: 50; ;
`;

export const Button = styled.button`
  font-family: 'MonumentExtended', monospace;
  text-transform: uppercase;
  font-size: 32px;

  line-height: 1.21;
  text-align: left;
  color: rgb(255, 255, 255);
  margin-bottom: 50px;
  text-transform: uppercase;
  background: rgb(0, 0, 0);
  cursor: pointer;
  margin-top: 100px;
`;
export const ContainerButtonGrau = styled.div`
  display: flex;
  flex-direction: column;
  background: rgb(0, 0, 0);

  ul {
    display: flex;
    flex-direction: row;
  }
  span {
    font-family: 'Roboto Mono', monospace;
    font-size: 16px;
    color: rgb(255, 255, 255);
    margin-bottom: 20px;
    line-height: 3.13;
  }
`;

export const ContainerButtonSol = styled.div`
  display: flex;
  flex-direction: column;
  background: rgb(0, 0, 0);
  ul {
    display: flex;
    flex-direction: row;
  }

  span {
    font-family: 'Roboto Mono', monospace;
    font-size: 16px;
    color: rgb(255, 255, 255);
    margin-bottom: 20px;
    line-height: 3.13;
  }
`;
