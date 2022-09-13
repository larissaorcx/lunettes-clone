import { BotaoCores, CoresContainer } from '../../Product/style';
import { ImagesProps } from '../../../pages/produtos/[...slug]';

import Image from 'next/image';

import React, { useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

type ImgProps = {
  products: string;
};

export default function ListProductsImages({ products }: ImgProps) {
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
      <Swiper className="imageBag">
        <SwiperSlide key={products}>
          <Image alt="product" src={products} width={118} height={118} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
