import { TextoHashtag, TituloHastag, HashtagContainer } from './style';
import { Text } from '../../../pages';

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
