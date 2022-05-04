import Image from 'next/image';

import {
  Hashtag,
  TituloHastag,
  TextoHashtag,
  Slider,
  InfosProduto,
  TituloInfo,
  LinkCategorias,
  SolarContainer,
  GrauContainer,
  ContatoContainer,
  TextoContato,
  Regras,
  TextoRegras,
  BotaoRedes,
  RedesContainer,
  BotaoContainer,
} from './style';
import SwiperSlides from './Swiper';

export default function Footer() {
  return (
    <>
      <Hashtag>
        <TituloHastag>#LunettesByLari</TituloHastag>
        <TextoHashtag>
          Poste sua foto usando a hashtag e faça parte da nossa galeria.
        </TextoHashtag>
      </Hashtag>
      <Slider>
        <SwiperSlides />
      </Slider>
      <InfosProduto>
        <Image alt="logo" src="/Logo-Lunettes.png" width={138} height={61} />
        <SolarContainer>
          <TituloInfo>solar</TituloInfo>
          <ul>
            <li>
              <LinkCategorias href="">Aviador</LinkCategorias>
            </li>
            <li>
              <LinkCategorias href="">Quadrado</LinkCategorias>
            </li>
            <li>
              <LinkCategorias href="">Vintage</LinkCategorias>
            </li>
            <li>
              <LinkCategorias href="">Espelho</LinkCategorias>
            </li>
            <li>
              <LinkCategorias href="">Gatinho</LinkCategorias>
            </li>
          </ul>
        </SolarContainer>
        <GrauContainer>
          <TituloInfo>grau</TituloInfo>
          <ul>
            <li>
              <LinkCategorias href="">Aviador</LinkCategorias>
            </li>
            <li>
              <LinkCategorias href="">Quadrado</LinkCategorias>
            </li>
            <li>
              <LinkCategorias href="">Vintage</LinkCategorias>
            </li>
            <li>
              <LinkCategorias href="">Espelho</LinkCategorias>
            </li>
            <li>
              <LinkCategorias href="">Gatinho</LinkCategorias>
            </li>
            <li>
              <LinkCategorias href="">Oval</LinkCategorias>
            </li>
            <li>
              <LinkCategorias href="">Retangular</LinkCategorias>
            </li>
          </ul>
        </GrauContainer>
        <ContatoContainer>
          <TituloInfo>contato</TituloInfo>
          <TextoContato>
            Rua Nilza, 480 - São Paulo | 03651-120 <br /> CNPJ:
            20.050.347/0001-56 <br />
            Whatsapp: (11) 97452-3425 <br /> E-mail: contato@lunettes.com.br
          </TextoContato>
          <RedesContainer>
            <TituloInfo>redes sociais</TituloInfo>
            <BotaoContainer>
              <BotaoRedes type="button">
                <Image
                  alt="whatsapp"
                  src="/redesSociais/whats.png"
                  width={42}
                  height={42}
                />
              </BotaoRedes>
              <BotaoRedes type="button">
                <Image
                  alt="instagram"
                  src="/redesSociais/insta.png"
                  width={42}
                  height={42}
                />
              </BotaoRedes>
              <BotaoRedes type="button">
                <Image
                  alt="facebook"
                  src="/redesSociais/facebook.png"
                  width={42}
                  height={42}
                />
              </BotaoRedes>
            </BotaoContainer>
          </RedesContainer>
        </ContatoContainer>
      </InfosProduto>
      <Regras>
        <TextoRegras>
          © 2020 Todos os direitos reservados. | Política de privacidade |
          Termos de uso
        </TextoRegras>
      </Regras>
    </>
  );
}
