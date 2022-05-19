import Image from 'next/image';
import {
  Titulo,
  Container,
  InfosContatos,
  TituloContato,
  TextContato,
} from './style';

type Icon = {
  img: string;
  alt: string;
  title: string;
  description: string;
};

interface DescricaoAtendimentoProps {
  aboutAtendimento: {
    iconCoracao: Icon;
    iconWhats: Icon;
    iconAgenda: Icon;
  };
}

export default function DescricaoAtendimento({
  aboutAtendimento,
}: DescricaoAtendimentoProps) {
  return (
    <Container>
      <Titulo>Como funciona?</Titulo>
      <InfosContatos>
        <div>
          <Image
            alt={aboutAtendimento.iconCoracao.alt}
            src={aboutAtendimento.iconCoracao.img}
            width={80.4}
            height={72}
          />
          <TituloContato>{aboutAtendimento.iconCoracao.title}</TituloContato>
          <TextContato>{aboutAtendimento.iconCoracao.description}</TextContato>
        </div>
        <div>
          <Image
            alt={aboutAtendimento.iconWhats.alt}
            src={aboutAtendimento.iconWhats.img}
            width={72.6}
            height={73.3}
          />
          <TituloContato>{aboutAtendimento.iconWhats.title}</TituloContato>
          <TextContato>{aboutAtendimento.iconWhats.description}</TextContato>
        </div>
        <div>
          <Image
            alt={aboutAtendimento.iconAgenda.alt}
            src={aboutAtendimento.iconAgenda.img}
            width={78.2}
            height={72.2}
          />
          <TituloContato>{aboutAtendimento.iconAgenda.title}</TituloContato>
          <TextContato>{aboutAtendimento.iconAgenda.description}</TextContato>
        </div>
      </InfosContatos>
    </Container>
  );
}
