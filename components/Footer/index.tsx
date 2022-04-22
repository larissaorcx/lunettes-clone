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
      <div className={style.infos}>
        <Image alt="logo" src="/Logo-Lunettes.png" width={138} height={61} />
        <div className={style.oculosSolar}>
          <h2 className={style.titulo}>solar</h2>
          <a href="">Aviador</a>
          <a href="">Quadrado</a>
          <a href="">Vintage</a>
          <a href="">Espelho</a>
          <a href="">Gatinho</a>
        </div>
        <div className={style.oculosGrau}>
          <h2 className={style.titulo}>grau</h2>
          <a href="">Aviador</a>
          <a href="">Quadrado</a>
          <a href="">Vintage</a>
          <a href="">Espelho</a>
          <a href="">Gatinho</a>
          <a href="">Oval</a>
          <a href="">Retangular</a>
        </div>
        <div className={style.contatos}>
          <h2 className={style.titulo}>contato</h2>
          <span>
            Rua Nilza, 480 - São Paulo | 03651-120 <br /> CNPJ:
            20.050.347/0001-56 <br />
            Whatsapp: (11) 97452-3425 <br /> E-mail: contato@lunettes.com.br
          </span>
          <div className={style.redesSociais}>
            <h2 className={style.titulo}>redes sociais</h2>
            <button type="button">
              <Image
                alt="whatsapp"
                src="/redesSociais/whats.png"
                width={42}
                height={42}
              />
            </button>
            <button type="button">
              <Image
                alt="instagram"
                src="/redesSociais/insta.png"
                width={42}
                height={42}
              />
            </button>
            <button type="button">
              <Image
                alt="facebook"
                src="/redesSociais/facebook.png"
                width={42}
                height={42}
              />
            </button>
          </div>
        </div>
      </div>
      <div className={style.regras}>
        <span>
          © 2020 Todos os direitos reservados. | Política de privacidade |
          Termos de uso
        </span>
      </div>
    </div>
  );
}
