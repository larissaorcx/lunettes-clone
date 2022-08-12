import { Item, ContainerFilter, Box, Container } from './style';

export interface ModelFilterProps {
  products: string[];
}

export default function ModelFilter({ products }: ModelFilterProps) {
  return (
    <Container>
      {products.map(model => (
        <ContainerFilter key={model}>
          <Box />
          <Item>{model}</Item>
        </ContainerFilter>
      ))}
    </Container>
  );
}
