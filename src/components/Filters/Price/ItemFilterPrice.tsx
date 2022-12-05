import { useEffect, useState } from 'react';
import { useFilter } from '../../hooks/useFilter';
import { Box, ContainerFilter, Item } from '../Model/style';

interface ItemFilterModelProps {
  price: number;
}

export default function ItemFilterPrice({ price }: ItemFilterModelProps) {
  const [selectedFilterPrice, setSelectedFilterPrice] =
    useState<boolean>(false);

  const { filterPrice, removeFilters, activeFilters } = useFilter();

  function handleActiveFilter() {
    setSelectedFilterPrice(!selectedFilterPrice);
  }

  useEffect(() => {
    if (activeFilters.length === 0) {
      setSelectedFilterPrice(false);
    } else {
      const filterFind = activeFilters.find(filter => filter === price);

      if (filterFind) {
        setSelectedFilterPrice(true);
      }
    }
  }, [activeFilters, price]);

  return (
    <ContainerFilter
      key={price}
      onClick={() => {
        handleActiveFilter();
        selectedFilterPrice ? removeFilters(price) : filterPrice(price);
      }}
      select={selectedFilterPrice}
    >
      <Box />
      <Item>ATÉ R$ {price}</Item>
    </ContainerFilter>
  );
}
