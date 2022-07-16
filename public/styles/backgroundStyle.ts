import styled from 'styled-components';
import { HeaderType } from '../../src/pages/types';

interface BackgroundProps {
  backgroundImages: HeaderType;
}

export const Background = styled.div<BackgroundProps>`
  width: 100%;
  height: 100vh;
  background: url(${props => props.backgroundImages.background1.img});

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  background-attachment: fixed;

  @media screen and (max-width: 740px) {
    background: url(${props => props.backgroundImages.background1.img});
    background-size: cover;
    background-position: center;
    width: 360px;
    height: 640px;
  }
`;
