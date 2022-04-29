import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: row;
  justify-content: space-between;
  padding: 33.8px 60.2px 0px 60px;

  background-image: url ('../../public/background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
  }
  div.menu {
    width: 42px;
    height: 26px;
  }

  div.logo {
    width: 245.3px;
    height: 108.4px;
  }

  div.sacola {
    width: 42.8px;
    height: 50.3px;
  }
`;
