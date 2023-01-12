import { BotaoCores, CoresContainer } from '../../Product/style';
import { ImagesProps } from '../../../pages/produtos/[slug]';

import Image from 'next/image';

import React, { useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import swiper, { Mousewheel, Keyboard } from 'swiper';

import { useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

type ImgProps = {
  images: ImagesProps[];
  setSwiperInstanceListProd: (swiper: swiper) => void;
};

export default function ListProductsImages({
  images,
  setSwiperInstanceListProd,
}: ImgProps) {
  return (
    <Swiper
      className="imageList"
      direction={'horizontal'}
      modules={[Mousewheel, Keyboard]}
      grabCursor={true}
      keyboard={{
        enabled: true,
        onlyInViewport: false,
      }}
      onSwiper={swiper => setSwiperInstanceListProd(swiper)}
    >
      {images.map(img => (
        <SwiperSlide key={img.idimage}>
          <Image alt="product" src={img.imglg} width={370} height={370} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
