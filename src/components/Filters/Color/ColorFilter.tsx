import { useState } from 'react';
import { useFilter } from '../../hooks/useFilter';
import ItemFilterColor from './ItemFilterColor';
import { Item, ContainerCores, Box, Container } from './styleColor';

export interface ColorFilterProps {
  products: Colorproducts[];
}
export type Colorproducts = {
  name: string;
  background: string;
};

export default function ColorFilter({ products }: ColorFilterProps) {
  const [clickColor, setClickColor] = useState('');

  function handleSelectColor(colorClick: string) {
    const color = clickColor === colorClick ? '' : colorClick;
    setClickColor(color);
  }

  const { filterColor, removeFilters } = useFilter();

  return (
    <Container>
      {products.map(color => (
        <ContainerCores
          key={color.name}
          onClick={() => {
            handleSelectColor(color.name);
            clickColor === color.name
              ? removeFilters(color.name)
              : filterColor(color.name);
          }}
          selectColor={clickColor === color.name}
        >
          <ItemFilterColor color={color} clickColor={clickColor} />
        </ContainerCores>
      ))}
    </Container>
  );
}
