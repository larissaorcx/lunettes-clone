import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper';
import Image from 'next/image';

import { Images } from '../../../types';

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
        350: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        680: {
          slidesPerView: 2,
          spaceBetween: 0.1,
        },
        740: {
          slidesPerView: 4,
          spaceBetween: 0.1,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 0.1,
        },
      }}
      navigation={true}
      modules={[Autoplay, Navigation]}
      className="mySwiper"
    >
      {swiper.map(image => (
        <SwiperSlide key={image.alt}>
          <Image alt={image.alt} src={image.img} width={360} height={350} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
