import styled from 'styled-components';
import { Images } from '../../pages/types';

interface BackgroundProp {
  imgBackground: Images;
  backgroundMobile: Images;
}

export const BackgroundImg = styled.div<BackgroundProp>`
  width: ${props => (props.theme.open ? '0px' : '100%')};
  height: ${props => (props.theme.open ? '0px' : '100vh')};
  background: url(${props => props.imgBackground.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  background-attachment: fixed;

  @media screen and (max-width: 740px) {
    background: url(${props => props.backgroundMobile.img});
    background-size: cover;
    background-position: center;
    width: ${props => (props.theme.open ? '0px' : '360px')};
    height: ${props => (props.theme.open ? '0px' : '640px')};
  }
`;
