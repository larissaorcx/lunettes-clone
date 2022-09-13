import styled, { css } from 'styled-components';

export const ContainerProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 80px;
  margin-top: 50px;

  grid-gap: 80px;

  @media screen and (max-width: 740px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media screen and (min-width: 741px) and (max-width: 1101px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    margin-bottom: 80px;
  }
`;
