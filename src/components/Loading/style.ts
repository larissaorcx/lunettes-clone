import styled from 'styled-components';

export const ContainerLoading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: gray;

  opacity: 0.7;
`;

export const Text = styled.h3`
  font-family: 'Roboto Mono', monospace;
  font-size: 16px;
  line-height: 1.5;
  color: white;
  background-color: rgb(0, 0, 0);
`;
