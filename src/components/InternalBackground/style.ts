import styled from 'styled-components';
import { HeaderType } from '../../types';

interface InternalbgProps {
  background: HeaderType;
  height: string;
}

export const Internalbg = styled.div<InternalbgProps>`
  width: 100%;
  height: ${props => props.height};
  background: url(${props => props.background.background2.img});

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (max-width: 740px) {
    background: none;
    background-color: black;
    z-index: 1;
    background-size: cover;
    background-position: center;
    width: 360px;
    height: 83px;
  }
`;
