import { keyframes } from 'styled-components';

export const animationList = keyframes`
0%{
    -webkit-transform: translateX(-150px);
    transform: translateX(-150px);
    opacity: 0;
}
100%{
    -webkit-transform: translateX(0px);
    transform: translateX(0px);
    opacity: 1;   
}
`;
export const animationContainer = keyframes`

0% {
    -webkit-transform: translateY(-1000px);
      transform: translateY(-1000px);
    opacity: 0;
  }
100% {
  -webkit-transform: translateY(0);
    transform: translateY(0);
  opacity: 1;
}
`;
