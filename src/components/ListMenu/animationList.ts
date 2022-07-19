import { keyframes } from 'styled-components';

export const animationList = keyframes`
0% {
    -webkit-transform: translateX(-100px);
            transform: translateX(-100px);
            opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0px);
            transform: translateX(0px);
            opacity: 1;
  }
`;
export const animationContainer = keyframes`

0% {

    -webkit-transform: scaleY(0);
  transform: scaleY(0);
  -webkit-transform-origin: 100% 0%;
  transform-origin: 100% 0%;
  opacity: 1;
  
  
  }
  100% {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
    -webkit-transform-origin: 100% 0%;
    transform-origin: 100% 0%;
    opacity: 1;
  }
`;

export const animationContainerClose = keyframes`

0% {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
    -webkit-transform-origin: 100% 0%;
    transform-origin: 100% 0%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleY(0);
    transform: scaleY(0);
    -webkit-transform-origin: 100% 0%;
     transform-origin: 100% 0%;
    opacity: 1;
  }
`;
