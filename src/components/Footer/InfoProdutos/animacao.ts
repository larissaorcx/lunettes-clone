import { keyframes } from 'styled-components';

export const animationRedes = keyframes`
0%{
    transform: translateX(0%);
    transform-origin: 50% 50%;
}
 15% {
    transform: translateX(-10px) rotate(-6deg);
}

30% {
    transform: translateX(5px) rotate(6deg);
}

45% {
    transform: translateX(-5px) rotate(-3.6deg);
}

60% {
    transform: translateX(1px) rotate(2.4deg);
}

75% {
    transform: translateX(-3px) rotate(-1.2deg);
}
100%{
    transform: translateX(0%);
    transform-origin: 50% 50%;
}
`;
