import styled from 'styled-components';
import { fallLogo, vibrateLoading } from './animation';

export const ContainerLoading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  position: fixed;
  background: linear-gradient(
    125deg,
    rgba(255, 255, 255, 0.95) 0%,
    rgba(10, 10, 10, 0.7) 55%
  );

  z-index: 999;

  span {
    width: 80px;
    -webkit-animation: ${fallLogo} 1.6s both;
    animation: ${fallLogo} 1.6s ease 0.3s infinite normal both;
  }
`;

export const Text = styled.h3`
  font-size: 16px;
  line-height: 1.5;
  color: white;
  font-style: italic;

  background-color: rgb(0, 0, 0);
  opacity: 1;
  margin-top: 10px;
  border-radius: 5px 0px;
  padding: 8px 25px;

  -webkit-animation: ${vibrateLoading} 0.3s linear infinite both;
  animation: ${vibrateLoading} 0.3s linear infinite both;
`;
