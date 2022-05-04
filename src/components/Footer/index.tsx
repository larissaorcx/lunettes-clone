import Image from 'next/image';
import Link from 'next/link';

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
        <Image
          alt="logo"
          src="/header/Logo-Lunettes.png"
          width={138}
          height={61}
        />
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
                <Link
                  href="https://api.whatsapp.com/send/?phone=5511974523425&text=Ol%C3%A1+Lunettes%2C+estou+vindo+do+site+e+gostaria+de+informa%C3%A7%C3%B5es.&app_absent=0"
                  passHref
                >
                  <Image
                    alt="whatsapp"
                    src="/redesSociais/whats.png"
                    width={42}
                    height={42}
                  />
                </Link>
              </BotaoRedes>
              <BotaoRedes type="button">
                <Link href="https://www.instagram.com/lunettesbylari/" passHref>
                  <Image
                    alt="instagram"
                    src="/redesSociais/facebook.png"
                    width={42}
                    height={42}
                  />
                </Link>
              </BotaoRedes>
              <BotaoRedes type="button">
                <Link href="https://www.facebook.com/lunettesbylari/" passHref>
                  <Image
                    alt="facebook"
                    src="/redesSociais/insta.png"
                    width={42}
                    height={42}
                  />
                </Link>
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
