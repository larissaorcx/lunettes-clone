import { BotaoCores, CoresContainer } from '../../Product/style';
import { ImagesProps } from '../../../pages/produtos/[...slug]';

import Image from 'next/image';

import React, { useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Keyboard } from 'swiper';

import { useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import ColorListProduct from '../ColorListProduct';

type ImgProps = {
  images: ImagesProps[];
};

export default function ListProductsImages({ images }: ImgProps) {
  return (
    <Swiper
      className="imageList"
      direction={'horizontal'}
      mousewheel={{
        invert: false,
      }}
      modules={[Mousewheel, Keyboard]}
      grabCursor={true}
      keyboard={{
        enabled: true,
        onlyInViewport: false,
      }}
    >
      {images.map(img => (
        <SwiperSlide key={img.id}>
          <Image
            alt="product"
            src={img.allImages.lg}
            width={360}
            height={360}
          />
        </SwiperSlide>
      ))}

      <ColorListProduct color={images} />
    </Swiper>
  );
}
