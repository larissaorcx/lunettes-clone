import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper';
import Image from 'next/image';

import { Images } from '../../../pages';

interface SwiperProps {
  swiper: Images[];
}

export default function SwiperSlides({ swiper }: SwiperProps) {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={0.1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 0.1,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 0.1,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 0.1,
        },
      }}
      navigation={true}
      modules={[Autoplay, Navigation]}
      className="mySwiper"
    >
      {swiper.map(image => (
        <SwiperSlide key={image.alt}>
          <Image alt={image.alt} src={image.img} width={960} height={1450} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
