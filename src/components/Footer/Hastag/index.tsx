import { TextoHashtag, TituloHastag, HashtagContainer } from './style';

type Text = {
  title: string;
  description: string;
};

interface HastagProps {
  hastag: Text;
}

export default function Hashtag({ hastag }: HastagProps) {
  return (
    <HashtagContainer>
      <TituloHastag>{hastag.title}</TituloHastag>
      <TextoHashtag>{hastag.description}</TextoHashtag>
    </HashtagContainer>
  );
}
