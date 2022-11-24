import { useState } from 'react';
import { useFilter } from '../../hooks/useFilter';
import { Item, ContainerFilter, Box, Container } from '../Model/style';

export interface PriceFilterProps {
  products: number[];
}

export default function PriceFilter({ products }: PriceFilterProps) {
  const [selectPrice, setSelectPrice] = useState('');

  function handleSelectPrice(priceClick: string) {
    const price = priceClick === selectPrice ? '' : priceClick;
    setSelectPrice(price);
  }
  const { filterPrice } = useFilter();
  return (
    <Container>
      {products.map(price => (
        <ContainerFilter
          key={price}
          onClick={() => {
            handleSelectPrice(String(price));
            filterPrice(price);
          }}
          select={selectPrice === String(price)}
        >
          <Box />
          <Item> até R$ {price}</Item>
        </ContainerFilter>
      ))}
    </Container>
  );
}
