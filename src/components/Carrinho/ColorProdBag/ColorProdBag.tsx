import { ImagesProps } from '../../../pages/produtos/[...slug]';
import { Colorproducts } from '../../Filters/Color/ColorFilter';
import {
  ConatinerColor,
  ContainerColorBag,
  ListColor,
  BoxBag,
  TextBoxBag,
} from './style';

interface ColorProductProps {
  color: Colorproducts;
}

export default function ColorProdBag({ color }: ColorProductProps) {
  return (
    <ConatinerColor>
      <ContainerColorBag>
        <ListColor key={color.name}>
          <BoxBag background={color.background} />
          <TextBoxBag>{color.name}</TextBoxBag>
        </ListColor>
      </ContainerColorBag>
    </ConatinerColor>
  );
}
