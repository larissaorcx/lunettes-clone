import { ImagesProps } from '../../pages/produtos/[slug]';

import Image from 'next/image';

import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import swiper, { Mousewheel, Keyboard } from 'swiper';
import { Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

interface ImagesDetalhesProps {
  images: ImagesProps[];
  setSwiperInstance: (swiper: swiper) => void;
}

export default function ImagesDetalhes({
  images,
  setSwiperInstance,
}: ImagesDetalhesProps) {
  const initialIndex = 1;

  return (
    <Swiper
      className="detalhes"
      direction={'horizontal'}
      modules={[Mousewheel, Keyboard, Pagination]}
      grabCursor={true}
      keyboard={{
        enabled: true,
        onlyInViewport: false,
      }}
      pagination={true}
      initialSlide={initialIndex}
      onSwiper={swiper => setSwiperInstance(swiper)}
    >
      {images.map(img => (
        <SwiperSlide key={img.idimage}>
          <Image alt="product" src={img.imglg} width={560} height={552} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
