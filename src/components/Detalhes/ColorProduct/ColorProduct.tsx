import { useEffect, useState } from 'react';
import { Text } from '../../../pages/detalhes/style';
import { ImagesProps } from '../../../pages/produtos/[...slug]';
import { useCart } from '../../hooks/useCart';
import {
  // BackgroundColor,
  Box,
  ContainerColor,
  ConteinerBox,
  ListButton,
  TextBox,
} from './style';

interface ColorProductProps {
  colors: ImagesProps[];
  activeColor: string;
  setActiveColor: (arg: string) => void;
  filteredColors: ImagesProps[];
}

export default function ColorProduct({
  colors,
  activeColor,
  setActiveColor,
  filteredColors,
}: ColorProductProps) {
  return (
    <ContainerColor>
      <Text>Cores:</Text>
      <ConteinerBox>
        {filteredColors.map(color => (
          <ListButton key={color.id}>
            <Box
              onClick={() => {
                setActiveColor(color.id);
              }}
              active={activeColor === color.id}
              background={color.color.background}
            >
              <TextBox>{color.color.name}</TextBox>
            </Box>
          </ListButton>
        ))}
      </ConteinerBox>
    </ContainerColor>
  );
}
