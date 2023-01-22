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
  const initialIndex = 0;
  return (
    <>
      <Swiper className="bag" initialSlide={initialIndex}>
        <SwiperSlide key={products}>
          <Image alt="product" src={products} width={118} height={118} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
