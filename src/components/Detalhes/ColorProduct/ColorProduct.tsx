import { useEffect, useState } from 'react';
import swiper from 'swiper';
import { useSwiper } from 'swiper/react';
import { Text } from '../../../pages/detalhes/style';
import { ImagesProps } from '../../../pages/produtos/[slug]';
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
  swiperInstance?: swiper;
}

export default function ColorProduct({
  colors,
  activeColorId,
  setActiveColorId,
  filteredColors,
  swiperInstance,
}: ColorProductProps) {
  function handleClickButton(colorId: string) {
    setActiveColorId(colorId);
    const indexIdColor = colors.findIndex(
      idImage => idImage.idimage === colorId
    );
    if (indexIdColor !== -1) {
      swiperInstance?.slideTo(indexIdColor);
    }
  }

  return (
    <ContainerColor>
      <Text>Cores:</Text>
      <ConteinerBox>
        {filteredColors.map(color => (
          <ListButton key={color.idimage}>
            <Box
              onClick={() => {
                handleClickButton(color.idimage);
              }}
              active={activeColorId === color.idimage}
              background={color.backgroundcolor}
            >
              <TextBox>{color.colorname}</TextBox>
            </Box>
          </ListButton>
        ))}
      </ConteinerBox>
    </ContainerColor>
  );
}
