import Atendimento from './Atendimento';
import DescricaoAtendimento from './DescriçãoAtendimento';
import { Images, Text, Icon } from '../../types';

interface AboutProps {
  atendimento: Images;
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
