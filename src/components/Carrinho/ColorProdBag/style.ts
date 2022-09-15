import styled, { css } from 'styled-components';

type BoxBagProps = {
  background: string;
};

export const ConatinerColor = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: Center;
  align-items: center;
`;

export const ContainerColorBag = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ListColor = styled.li`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  padding-top: 20px;

  @media screen and (max-width: 740px) {
    flex-direction: row;
    border: none;
  }
`;

export const BoxBag = styled.div<BoxBagProps>`
  width: 32px;
  height: 32px;

  border-radius: 8px;
  margin-right: 5px;
  border: solid 2px #9a9a9a;

  ${props =>
    props.background.charAt(0) === '#'
      ? css`
          background: ${props.background};
        `
      : css`
          background-image: url(${props.background});
        `};
`;

export const TextBoxBag = styled.span`
  font-family: 'Roboto Mono', monospace;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 14px;
  color: rgb(154, 154, 154);
`;
