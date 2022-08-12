import { Item, ContainerFilter, Box, Container } from '../Model/style';

export interface PriceFilterProps {
  products: number[];
}

export default function PriceFilter({ products }: PriceFilterProps) {
  return (
    <Container>
      {products.map(price => (
        <ContainerFilter key={price}>
          <Box />
          <Item> até R$ {price}</Item>
        </ContainerFilter>
      ))}
    </Container>
  );
}
