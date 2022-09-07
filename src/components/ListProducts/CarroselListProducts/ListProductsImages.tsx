import { BotaoCores, CoresContainer } from '../style';
import { ImagesProps } from '../../../pages/produtos/[...slug]';

import Image from 'next/image';

import React, { useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Keyboard } from 'swiper';

import { useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

type ImgProps = {
  products: ImagesProps[];
};

export default function ListProductsImages({ products }: ImgProps) {
  const [clickButton, setClickButton] = useState(false);

  console.log(products, ' produtos img');

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
        {products.map(img => (
          <SwiperSlide key={img.id}>
            <Image
              alt="product"
              src={img.allImages.lg}
              width={360}
              height={360}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <CoresContainer>
        {products.map(
          image =>
            image.color.name !== 'NOTCOLOR' && (
              <BotaoCores
                key={image.url}
                type="button"
                color={image.color.background}
                clickButton={clickButton}
                name={image.color.name}
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
