import Hashtag from '../Footer/Hastag/index';
import InfosProduto from './InfoProdutos';

import { Slider, Regras, TextoRegras } from './style';
import SwiperSlides from './Swiper';

type Oculos = {
  title: string;
  category: string[];
};

type Itens = {
  img: string;
  alt: string;
  link: string;
};

type Media = {
  title: string;
  itens: Itens[];
};

type Text = {
  title: string;
  description: string;
};

type Image = {
  img: string;
  alt: string;
};

interface FooterProps {
  hastag: Text;
  swiper: Image[];
  info: {
    logo: Image;
    solar: Oculos;
    grau: Oculos;
    adress: {
      street: string;
      CNPJ: string;
      whatsapp: string;
      email: string;
    };
    socialMedia: Media;
    termos: {
      text: string;
    };
  };
}

export default function Footer({ hastag, swiper, info }: FooterProps) {
  console.log('hastag', hastag, 'swiper', swiper, 'info', info);
  return (
    <>
      <Hashtag hastag={hastag} />
      <Slider>
        <SwiperSlides />
      </Slider>
      <InfosProduto />
      <Regras>
        <TextoRegras>
          © 2020 Todos os direitos reservados. | Política de privacidade |
          Termos de uso
        </TextoRegras>
      </Regras>
    </>
  );
}
