import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper';
import Image from 'next/image';

export default function SwiperSlides({ swiper }: any) {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={0.2}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      navigation={true}
      modules={[Autoplay, Navigation]}
      className="mySwiper"
    >
      {swiper.map((image: typeof Image) => (
        <SwiperSlide key={image.alt}>
          <Image alt={image.alt} src={image.img} width={960} height={1450} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
