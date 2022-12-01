import { Container } from '../Model/style';
import ItemFilterPrice from './ItemFilterPrice';

export interface PriceFilterProps {
  products: number[];
}

export default function PriceFilter({ products }: PriceFilterProps) {
  return (
    <Container>
      {products.map(price => (
        <ItemFilterPrice key={price} price={price} />
      ))}
    </Container>
  );
}
