import { keyframes } from 'styled-components';

export const animationList = keyframes`
0%{
    -webkit-transform: translateX(-1000px);
    transform: translateX(-1000px);
    opacity: 0;
}
100%{
    -webkit-transform: translateX(0px);
    transform: translateX(0px);
    opacity: 0.9;   
}
`;
export const animationContainer = keyframes`

\ 0% {
    height: 0 ;
    opacity: 0;
  }
  \ 100% {
    height: 100vh ;
    opacity: 1;
  }
`;

export const animationContainerClose = keyframes`

\ 100% {
    height:100vh;
    opacity: 1;
  }
  \ 0% {
    height:0;
    opacity: 0;
  }
`;
