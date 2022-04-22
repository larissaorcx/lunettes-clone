import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper';

import style from './footer.module.scss';
import Image from 'next/image';

export default function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.text}>
        <h2>#LunettesByLari</h2>
        <span>
          Poste sua foto usando a hashtag e faça parte da nossa galeria.
        </span>
      </div>
      <div className={style.slide}>
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
          <SwiperSlide>
            <Image
              alt="contacts-img"
              src="/slider/img1.png"
              width={960}
              height={1450}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="contacts-img"
              src="/slider/img2.png"
              width={960}
              height={1450}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="contacts-img"
              src="/slider/img3.png"
              width={960}
              height={1450}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="img4"
              src="/slider/img4.png"
              width={960}
              height={1450}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="img4"
              src="/slider/img5.png"
              width={960}
              height={1450}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="contacts-img"
              src="/slider/img1.png"
              width={960}
              height={1450}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="contacts-img"
              src="/slider/img2.png"
              width={960}
              height={1450}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="contacts-img"
              src="/slider/img3.png"
              width={960}
              height={1450}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="img4"
              src="/slider/img4.png"
              width={960}
              height={1450}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="img4"
              src="/slider/img5.png"
              width={960}
              height={1450}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
