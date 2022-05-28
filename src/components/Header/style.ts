import styled from 'styled-components';
import { Images } from '../../pages';

interface BackgroundProp {
  imgBackground: Images;
}

export const BackgroundImg = styled.div<BackgroundProp>`
  width: 100%;
  height: 100vh;
  background: url(${props => props.imgBackground.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  background-attachment: fixed;
`;
