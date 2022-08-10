import { Item, ContainerCores, Box, Container } from './style';

export interface ModelFilterProps {
  products: string[];
}

export default function ModelFilter({ products }: ModelFilterProps) {
  return (
    <Container>
      {products.map(model => (
        <ContainerCores key={model}>
          <Box />
          <Item>{model}</Item>
        </ContainerCores>
      ))}
    </Container>
  );
}
