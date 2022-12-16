import { Container } from '../Model/style';
import ItemFilterPrice from './ItemFilterPrice';

export interface PriceFilterProps {
  products: number[];
  setOpenButton: (arg: boolean) => void;
}

export default function PriceFilter({
  products,
  setOpenButton,
}: PriceFilterProps) {
  return (
    <Container>
      {products.map(price => (
        <ItemFilterPrice
          key={price}
          price={price}
          setOpenButton={setOpenButton}
        />
      ))}
    </Container>
  );
}
