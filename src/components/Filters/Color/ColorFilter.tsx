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
  return (
    <Container>
      {products.map(color => (
        <ItemFilterColor key={color.name} color={color} />
      ))}
    </Container>
  );
}
