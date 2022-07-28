import { ProductProps } from '../../pages/produtos/grau';
import { Item, ContainerCores, Box, Container } from './styleColor';

export interface ColorFilterProps {
  colorproducts: Colorproducts[];
}
export type Colorproducts = {
  name: string;
  background: string;
};

export default function ColorFilter({ colorproducts  }: ColorFilterProps) {
  return (
    <>
      <Container>
        {colorproducts.map(color => (
          <ContainerCores key={color.name}>
            <Box colorBox={color.background} />
            <Item>{color.name}</Item>
          </ContainerCores>
        ))}
      </Container>
    </>
  )