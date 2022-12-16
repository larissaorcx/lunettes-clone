import { useEffect, useState } from 'react';
import { useFilter } from '../../hooks/useFilter';
import { Colorproducts } from './ColorFilter';
import { Box, ContainerCores, Item } from './styleColor';

interface ItemFilterColorProps {
  color: Colorproducts;
  setOpenButton: (arg: boolean) => void;
}

export default function ItemFilterColor({
  color,
  setOpenButton,
}: ItemFilterColorProps) {
  const [selectedFilterColor, setSelectedFilterColor] =
    useState<boolean>(false);

  const { filterColor, removeFilters, activeFilters } = useFilter();

  function handleActiveFilter() {
    setSelectedFilterColor(!selectedFilterColor);
    setOpenButton(false);
  }

  useEffect(() => {
    if (activeFilters.length === 0) {
      setSelectedFilterColor(false);
    } else {
      const filterFind = activeFilters.find(filter => filter === color.name);

      if (filterFind) {
        setSelectedFilterColor(true);
      }
    }
  }, [activeFilters, color.name]);

  return (
    <ContainerCores
      onClick={() => {
        handleActiveFilter();

        selectedFilterColor
          ? removeFilters(color.name)
          : filterColor(color.name);
      }}
      selectColor={selectedFilterColor}
    >
      <Box colorBox={color.background} selectColor={selectedFilterColor} />
      <Item>{color.name}</Item>
    </ContainerCores>
  );
}
