import Image from 'next/image';
import { Images, Text } from '../../../types';
import { ContatoContainer, Paragrafo, TextContainer, Titulo } from './style';

type AtendimentoProps = {
  atendimento: Images;
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
