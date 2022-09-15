import { keyframes } from 'styled-components';

export const animationMenu = keyframes`

\ 0% {
    -webkit-transform: translateY(-1000px);
      transform: translateY(-1000px);
    opacity: 0;
  }
  \ 100% {
    -webkit-transform: translateY(0);
      transform: translateY(0);
    opacity: 1;
  }  
`;

export const animationClose = keyframes`
  
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(0);
            transform: scale(0);
    opacity: 1;
  }
`;

export const animationOpen = keyframes`
  
  0% {
    -webkit-transform: scale(0);
            transform: scale(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
  }
`;
