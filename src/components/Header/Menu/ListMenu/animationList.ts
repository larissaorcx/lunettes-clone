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
