import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper';
import Image from 'next/image';

export default function SwiperSlides() {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={0.1}
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
      <SwiperSlide>
        <Image
          alt="img1"
          src="/assets/slider/img1.png"
          width={960}
          height={1450}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          alt="img2"
          src="/assets/slider/img2.png"
          width={960}
          height={1450}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          alt="img3"
          src="/assets/slider/img3.png"
          width={960}
          height={1450}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          alt="img4"
          src="/assets/slider/img4.png"
          width={960}
          height={1450}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          alt="img5"
          src="/assets/slider/img5.png"
          width={960}
          height={1450}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          alt="img1"
          src="/assets/slider/img1.png"
          width={960}
          height={1450}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          alt="img1"
          src="/assets/slider/img1.png"
          width={960}
          height={1450}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          alt="img2"
          src="/assets/slider/img2.png"
          width={960}
          height={1450}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          alt="img3"
          src="/assets/slider/img3.png"
          width={960}
          height={1450}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          alt="img4"
          src="/assets/slider/img4.png"
          width={970}
          height={1450}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          alt="img5"
          src="/assets/slider/img5.png"
          width={960}
          height={1450}
        />
      </SwiperSlide>
    </Swiper>
  );
}
