import { Text } from '../../../pages/detalhes/style';
import { ImagesProps } from '../../../pages/produtos/[slug]';
import {
  Box,
  ContainerColor,
  ConteinerBox,
  ListButton,
  TextBox,
} from './style';

interface ColorProductProps {
  color: ImagesProps[];
}

export default function ColorProduct({ color }: ColorProductProps) {
  return (
    <ContainerColor>
      <Text>Cores:</Text>
      <ConteinerBox>
        {color.map(
          colors =>
            colors.color.name !== 'NOTCOLOR' && (
              <ListButton key={colors.id}>
                <Box background={colors.color.background} key={colors.id} />
                <TextBox>{colors.color.name}</TextBox>
              </ListButton>
            )
        )}
      </ConteinerBox>
    </ContainerColor>
  );
}
