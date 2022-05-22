import Image from 'next/image';
import Link from 'next/link';

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
} from './style';

export default function InfosProduto({ info }: any) {
  return (
    <InfosProdutoContainer>
      <Image alt={info.logo.alt} src={info.logo.img} width={138} height={61} />
      <SolarContainer>
        <TituloInfo>{info.solar.title}</TituloInfo>
        {info.solar.category.map((prod: string) => (
          <ul key={prod}>
            <li>
              <LinkCategorias href="">{prod}</LinkCategorias>
            </li>
          </ul>
        ))}
      </SolarContainer>
      <GrauContainer>
        <TituloInfo>grau</TituloInfo>
        {info.grau.category.map((prod: string) => (
          <ul key={prod}>
            <li>
              <LinkCategorias href="">{prod}</LinkCategorias>
            </li>
          </ul>
        ))}
      </GrauContainer>
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
            {info.socialMedia.itens.map((button: object) => (
              <BotaoRedes type="button" key={button.alt}>
                <Link href={button.link} passHref>
                  <Image
                    alt={button.alt}
                    src={button.img}
                    width={42}
                    height={42}
                  />
                </Link>
              </BotaoRedes>
            ))}
          </BotaoContainer>
        </RedesContainer>
      </ContatoContainer>
    </InfosProdutoContainer>
  );
}
