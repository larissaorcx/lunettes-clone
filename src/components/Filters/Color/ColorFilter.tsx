import { Item, ContainerCores, Box, Container } from './styleColor';

export interface ColorFilterProps {
  products: Colorproducts[];
}
export type Colorproducts = {
  name: string;
  background: string;
};

export default function ColorFilter({ products }: ColorFilterProps) {
  return (
    <Container>
      {products.map(color => (
        <ContainerCores key={color.name}>
          <Box colorBox={color.background} />
          <Item>{color.name}</Item>
        </ContainerCores>
      ))}
    </Container>
  );
}
