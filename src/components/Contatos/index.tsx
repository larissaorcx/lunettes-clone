import Atendimento from './Atendimento';
import DescricaoAtendimento from './DescriçãoAtendimento';

type Image = {
  img: string;
  alt: string;
};

type Icon = {
  img: string;
  alt: string;
  title: string;
  description: string;
};

type Text = {
  title: string;
  description: string;
};

interface AboutProps {
  atendimento: Image;
  text: Text;
  aboutAtendimento: {
    iconCoracao: Icon;
    iconWhats: Icon;
    iconAgenda: Icon;
  };
}

export default function About({
  atendimento,
  text,
  aboutAtendimento,
}: AboutProps) {
  return (
    <>
      <Atendimento atendimento={atendimento} text={text} />
      <DescricaoAtendimento aboutAtendimento={aboutAtendimento} />
    </>
  );
}
