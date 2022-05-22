import styled from 'styled-components';

interface BackgroundProp {
  imgBackgroung: string;
}

export const BackgroundImg = styled.div<BackgroundProp>`
  width: 100%;
  height: 100vh;
  background-image: ${props => props.imgBackgroung}
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  background-attachment: fixed;
`;
