import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Images, Media, Oculos } from '../../../types';

import {
  InfosProdutoContainer,
  TituloInfo,
  LinkCategorias,
  SolarContainer,
  GrauContainer,
  ContatoContainer,
  TextoContato,
  BotaoRedes,
  RedesContainer,
  BotaoContainer,
  Category,
  ImageLogo,
} from './style';

interface InfosProdutoProps {
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

export default function InfosProduto({ info }: InfosProdutoProps) {
  const router = useRouter();
  return (
    <InfosProdutoContainer>
      <ImageLogo>
        <Image
          alt={info.logo.alt}
          src={info.logo.img}
          width={138}
          height={61}
        />
      </ImageLogo>
      <Category>
        <SolarContainer>
          <TituloInfo>{info.solar.title}</TituloInfo>
          {info.solar.category.map((prod: string) => (
            <ul key={prod}>
              <li>
                <LinkCategorias
                  type="button"
                  onClick={() =>
                    router.push(
                      `/produtos/${info.solar.title.toLowerCase()}/${prod}`
                    )
                  }
                >
                  {prod}
                </LinkCategorias>
              </li>
            </ul>
          ))}
        </SolarContainer>
        <GrauContainer>
          <TituloInfo>{info.grau.title}</TituloInfo>
          {info.grau.category.map((prod: string) => (
            <ul key={prod}>
              <li>
                <LinkCategorias
                  type="button"
                  onClick={() =>
                    router.push(
                      `/produtos/${info.grau.title.toLowerCase()}/${prod}`
                    )
                  }
                >
                  {prod}
                </LinkCategorias>
              </li>
            </ul>
          ))}
        </GrauContainer>
      </Category>
      <ContatoContainer>
        <TituloInfo>{info.contato.title}</TituloInfo>
        <TextoContato>
          {info.contato.adress.street} <br /> {info.contato.adress.cnpj}
          <br />
          {info.contato.adress.whatsapp} <br /> {info.contato.adress.email}
        </TextoContato>
        <RedesContainer>
          <TituloInfo>{info.socialMedia.title}</TituloInfo>
          <BotaoContainer>
            {info.socialMedia.itens.map(button => (
              <BotaoRedes type="button" key={button.alt}>
                <Link href={button.link} passHref>
                  <a style={{ textDecoration: 'none' }}>
                    <Image
                      alt={button.alt}
                      src={button.img}
                      width={42}
                      height={42}
                    />
                  </a>
                </Link>
              </BotaoRedes>
            ))}
          </BotaoContainer>
        </RedesContainer>
      </ContatoContainer>
    </InfosProdutoContainer>
  );
}
