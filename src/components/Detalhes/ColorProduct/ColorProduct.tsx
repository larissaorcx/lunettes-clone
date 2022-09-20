import { useState } from 'react';
import { Text } from '../../../pages/detalhes/style';
import { ImagesProps } from '../../../pages/produtos/[...slug]';
import {
  BackgroundColor,
  Box,
  ContainerColor,
  ConteinerBox,
  ListButton,
  TextBox,
} from './style';

interface ColorProductProps {
  colors: ImagesProps[];
}

export default function ColorProduct({ colors }: ColorProductProps) {
  const [activeColor, setActiveColor] = useState('');

  console.log(activeColor);
  return (
    <ContainerColor>
      <Text>Cores:</Text>
      <ConteinerBox>
        {colors.map(
          color =>
            color.color.name !== 'NOTCOLOR' && (
              <ListButton key={color.id}>
                <Box
                  onClick={() => {
                    setActiveColor(color.id);
                  }}
                  active={activeColor === color.id}
                >
                  <BackgroundColor
                    background={color.color.background}
                    active={activeColor === color.id}
                  />
                  <TextBox>{color.color.name}</TextBox>
                </Box>
              </ListButton>
            )
        )}
      </ConteinerBox>
    </ContainerColor>
  );
}
