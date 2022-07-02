import styled from 'styled-components';

export const ContainerLoading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: gray;
  position: fixed;

  z-index: 999;

  opacity: 0.9;
`;

export const Text = styled.h3`
  font-family: 'Roboto Mono', monospace;
  font-size: 16px;
  line-height: 1.5;
  color: white;
  background-color: rgb(0, 0, 0);
  opacity: 1;
`;
