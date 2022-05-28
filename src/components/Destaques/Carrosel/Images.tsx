import { BotaoCores, CoresContainer } from '../style';

import Image from 'next/image';
import { ImageProps } from '..';
import React, { useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper';
import { useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

type ImagesProps = {
  data: ImageProps[];
};

export default function Images({ data }: ImagesProps) {
  const [clickButton, setClickButton] = useState(false);

  const swiper = useSwiper();

  function handleClick() {
    switch (swiper.activeIndex) {
      case 0:
        swiper.slideNext();
        break;

      case 2:
        swiper.slidePrev();
        break;

      default:
        break;
    }
  }

  return (
    <>
      <Swiper
        className="mySwiper"
        direction={'horizontal'}
        mousewheel={true}
        modules={[Mousewheel]}
        grabCursor={true}
      >
        {data.map(img => (
          <SwiperSlide key={img.id}>
            <Image alt="product" src={img.url} width={360} height={360} />
          </SwiperSlide>
        ))}
      </Swiper>
      <CoresContainer>
        {data.map(
          image =>
            image.color?.background && (
              <BotaoCores
                key={image.id}
                type="button"
                color={image.color.background}
                clickButton={clickButton}
                onClick={() => {
                  setClickButton(!clickButton);
                  handleClick();
                }}
              />
            )
        )}
      </CoresContainer>
    </>
  );
}
