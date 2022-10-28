import { useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';
import { ImagesProps } from '../../pages/produtos/[...slug]';
import { BotaoCores, CoresContainer } from '../Product/style';

interface ColorListProductsProps {
  color: ImagesProps[];
}

export default function ColorListProduct({ color }: ColorListProductsProps) {
  const newFilteredColos = color.filter(
    nameColor => nameColor.colorname !== 'NOTCOLOR'
  );
  const swiper = useSwiper();
  const [activeColorId, setActiveColorId] = useState('');

  function handleClickButton(colorId: string) {
    setActiveColorId(colorId);
    const indexIdColor = color.findIndex(
      idImage => idImage.idimage === colorId
    );
    if (indexIdColor !== -1) {
      swiper.slideTo(indexIdColor);
    }
  }

  return (
    <CoresContainer>
      {newFilteredColos.map(colors => (
        <BotaoCores
          key={colors.imgxs}
          type="button"
          color={colors.backgroundcolor}
          active={activeColorId === colors.idimage}
          name={colors.colorname}
          onClick={() => {
            handleClickButton(colors.idimage);
          }}
        />
      ))}
    </CoresContainer>
  );
}
