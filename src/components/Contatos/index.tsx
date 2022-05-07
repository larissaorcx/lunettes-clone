import Image from 'next/image';
import {
  ContatoContainer,
  TextContainer,
  Titulo,
  Paragrafo,
  Container,
  InfosContatos,
  TituloContato,
  TextContato,
} from './style';

export default function Contatos() {
  return (
    <>
      <ContatoContainer>
        <Image
          alt="contacts-img"
          src="/assets/contatos/contatos-img.png"
          width={960}
          height={540}
        />
        <TextContainer>
          <Titulo>Atendimento personalizado</Titulo>
          <Paragrafo>
            A Lunettes by Lari é uma ótica que leva seus óculos na porta da sua
            casa. Nosso atendimento é uma consultoria de estilo exclusiva.
          </Paragrafo>
        </TextContainer>
      </ContatoContainer>
      <Container>
        <Titulo>Como funciona?</Titulo>
        <InfosContatos>
          <div>
            <Image
              alt="coracao"
              src="/assets/contatos/coracao.png"
              width={80.4}
              height={72}
            />
            <TituloContato>Escolha</TituloContato>
            <TextContato>Você escolhe seus óculos por aqui</TextContato>
          </div>
          <div>
            <Image
              alt="whats"
              src="/assets/contatos/whats.png"
              width={72.6}
              height={73.3}
            />
            <TituloContato>Avise a Lunettes</TituloContato>
            <TextContato>
              Avise a Lunettes quais óculos quer experimentar
            </TextContato>
          </div>
          <div>
            <Image
              alt="agenda"
              src="/assets/contatos/agenda.png"
              width={78.2}
              height={72.2}
            />
            <TituloContato>Agende</TituloContato>
            <TextContato>
              Vamos agendar uma visita e levar os óculos até você
            </TextContato>
          </div>
        </InfosContatos>
      </Container>
    </>
  );
}
