import { useState } from 'react';
import { Colorproducts } from './ColorFilter';
import { Box, Item } from './styleColor';

interface ItemFilterColorProps {
  color: Colorproducts;
  clickColor: string;
}

export default function ItemFilterColor({
  color,
  clickColor,
}: ItemFilterColorProps) {
  const [selectedFilterColor, setSelectedFilterColor] = useState<
    Colorproducts[]
  >([]);

  return (
    <>
      <Box
        colorBox={color.background}
        selectColor={clickColor === color.name}
      />
      <Item>{color.name}</Item>
    </>
  );
}
