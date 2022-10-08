import { useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';
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
  activeColorId: string;
  setActiveColorId: (arg: string) => void;
  filteredColors: ImagesProps[];
}

export default function ColorProduct({
  colors,
  activeColorId,
  setActiveColorId,
  filteredColors,
}: ColorProductProps) {
  const swiper = useSwiper();

  function handleClickButton(colorId: string) {
    setActiveColorId(colorId);
    const indexIdColor = colors.findIndex(idImage => idImage.id === colorId);
    if (indexIdColor !== -1) {
      swiper.slideTo(indexIdColor);
    }
  }

  console.log(activeColorId, 'active');

  return (
    <ContainerColor>
      <Text>Cores:</Text>
      <ConteinerBox>
        {filteredColors.map(color => (
          <ListButton key={color.id}>
            <Box
              onClick={() => {
                handleClickButton(color.id);
              }}
              active={activeColorId === color.id}
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
