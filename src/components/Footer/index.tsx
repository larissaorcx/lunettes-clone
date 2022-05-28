import { Images, Media, Oculos, Text } from '../../pages';
import Hashtag from '../Footer/Hastag/index';
import InfosProduto from './InfoProdutos';

import { Slider, Regras, TextoRegras } from './style';
import SwiperSlides from './Swiper';

interface FooterProps {
  hastag: Text;
  swiper: Images[];
  info: {
    logo: Images;
    solar: Oculos;
    grau: Oculos;
    contato: {
      title: string;
      adress: {
        street: string;
        cnpj: string;
        whatsapp: string;
        email: string;
      };
    };
    socialMedia: Media;
    termos: {
      text: string;
    };
  };
}

export default function Footer({ hastag, swiper, info }: FooterProps) {
  return (
    <>
      <Hashtag hastag={hastag} />
      <Slider>
        <SwiperSlides swiper={swiper} />
      </Slider>
      <InfosProduto info={info} />
      <Regras>
        <TextoRegras>{info.termos.text}</TextoRegras>
      </Regras>
    </>
  );
}
