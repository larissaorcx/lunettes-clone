import Image from 'next/image';
import { ContatoContainer, Paragrafo, TextContainer, Titulo } from './style';

type Image = {
  img: string;
  alt: string;
};

type Text = {
  title: string;
  description: string;
};

type AtendimentoProps = {
  atendimento: Image;
  text: Text;
};

export default function Atendimento({ atendimento, text }: AtendimentoProps) {
  return (
    <ContatoContainer>
      <Image
        alt={atendimento.alt}
        src={atendimento.img}
        width={960}
        height={540}
      />
      <TextContainer>
        <Titulo>{text.title}</Titulo>
        <Paragrafo>{text.description}</Paragrafo>
      </TextContainer>
    </ContatoContainer>
  );
}
