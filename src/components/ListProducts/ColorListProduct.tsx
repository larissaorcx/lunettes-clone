import { useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';
import { ImagesProps } from '../../pages/produtos/[...slug]';
import { BotaoCores, CoresContainer } from '../Product/style';

interface ColorListProductsProps {
  color: ImagesProps[];
}

export default function ColorListProduct({ color }: ColorListProductsProps) {
  const newFilteredColos = color.filter(
    nameColor => nameColor.color.name !== 'NOTCOLOR'
  );
  const swiper = useSwiper();
  const [activeColorId, setActiveColorId] = useState('');

  function handleClickButton(colorId: string) {
    setActiveColorId(colorId);
    const indexIdColor = color.findIndex(idImage => idImage.id === colorId);
    if (indexIdColor !== -1) {
      swiper.slideTo(indexIdColor);
    }
  }

  return (
    <CoresContainer>
      {newFilteredColos.map(colors => (
        <BotaoCores
          key={colors.url}
          type="button"
          color={colors.color.background}
          active={activeColorId === colors.id}
          name={colors.color.name}
          onClick={() => {
            handleClickButton(colors.id);
          }}
        />
      ))}
    </CoresContainer>
  );
}
