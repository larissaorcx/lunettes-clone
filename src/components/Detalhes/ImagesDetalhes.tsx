import { ImagesProps } from '../../pages/produtos/[slug]';

import Image from 'next/image';

import React, { useEffect } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import swiper, { Mousewheel, Keyboard } from 'swiper';
import { Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import ColorProduct from './ColorProduct/ColorProduct';
import { ProductDetalhesProps } from '../../pages/detalhes/[slug]';
import InfosProduto from './InfoProduto/infoProduto';

interface ImagesDetalhesProps {
  product: ProductDetalhesProps;
  images: ImagesProps[];
  activeColorId: string;
  setActiveColorId: (arg: string) => void;
  filteredColors: ImagesProps[];
}

export default function ImagesDetalhes({
  product,
  images,
  activeColorId,
  setActiveColorId,
  filteredColors,
}: ImagesDetalhesProps) {
  const initialIndex = 1;

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
      initialSlide={initialIndex}
    >
      {images.map(img => (
        <SwiperSlide key={img.idimage}>
          <Image alt="product" src={img.imglg} width={560} height={552} />
        </SwiperSlide>
      ))}
      <div className="info">
        <InfosProduto
          product={product}
          activeColorId={activeColorId}
          setActiveColorId={setActiveColorId}
          filteredColors={filteredColors}
        />
      </div>

      {/* <ColorProduct
        colors={images}
        activeColorId={activeColorId}
        setActiveColorId={setActiveColorId}
        filteredColors={filteredColors}
      /> */}
    </Swiper>
  );
}
