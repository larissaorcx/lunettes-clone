import { ImagesProps } from '../../pages/produtos/[...slug]';

import Image from 'next/image';

import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Keyboard } from 'swiper';
import { Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

interface ImagesDetalhesProps {
  products: ImagesProps[];
}

export default function ImagesDetalhes({ products }: ImagesDetalhesProps) {
  return (
    <Swiper
      className="detalhes"
      direction={'horizontal'}
      mousewheel={{
        invert: false,
      }}
      modules={[Mousewheel, Keyboard, Pagination]}
      grabCursor={true}
      keyboard={{
        enabled: true,
        onlyInViewport: false,
      }}
      pagination={true}
    >
      {products.map(img => (
        <SwiperSlide key={img.id}>
          <Image
            alt="product"
            src={img.allImages.lg}
            width={600}
            height={552}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
