import styled from 'styled-components';

export const HashtagContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 90px 0px;
  background: linear-gradient(82deg, #fe4c64 3%, #b72dc3 49%, #641fb9 97%);
  transition: all 0.3s linear;
  position: relative;

  &::before {
    transition: all 0.3s linear;
    content: '';
    opacity: 0;
    left: 0;
    top: 0;
    position: absolute;
    width: 0%;
    height: 100%;
    background-image: linear-gradient(
      50deg,
      #641fb9 3%,
      #b72dc3 49%,
      #fe4c64 97%
    );
    @media screen and (max-width: 740px) {
      width: 100vw;
      height: 186px;
    }
  }

  &:hover {
    & > h2 {
      background: linear-gradient(50deg, #641fb9 3%, #b72dc3 49%, #fe4c64 97%);
    }

    &::before {
      opacity: 1;
      width: 100%;
    }
  }

  @media screen and (max-width: 740px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 0px;
  }
`;
export const TituloHastag = styled.h2`
  width: 500px;
  height: 50px;
  font-family: 'MonumentExtended', monospace;
  font-size: 42px;
  color: rgb(255, 255, 255);
  margin-bottom: 20px;

  @media screen and (max-width: 740px) {
    width: 280px;
    height: 29px;
    font-size: 24px;
  }
`;
export const TextoHashtag = styled.span`
  max-width: 460px;
  font-family: 'Roboto Mono', monospace;
  font-size: 24px;
  color: rgb(255, 255, 255);
  text-align: center;
  margin: 0px 20px;
  /* z-index: 2; */

  @media screen and (max-width: 740px) {
    width: 319px;
    height: 46px;
    font-size: 14px;
  }
`;
