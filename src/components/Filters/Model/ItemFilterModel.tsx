import { useEffect, useState } from 'react';
import { useFilter } from '../../hooks/useFilter';
import { ContainerFilter } from './style';
import { Box, Item } from './style';

interface ItemFilterModelProps {
  model: string;
}

export default function ItemFilterModel({ model }: ItemFilterModelProps) {
  const [selectedFilterModel, setSelectedFilterModel] =
    useState<boolean>(false);

  const { filterModel, removeFilters, activeFilters } = useFilter();

  function handleActiveFilter() {
    setSelectedFilterModel(!selectedFilterModel);
  }

  useEffect(() => {
    if (activeFilters.length === 0) {
      setSelectedFilterModel(false);
    }
  }, [activeFilters]);

  return (
    <ContainerFilter
      key={model}
      onClick={() => {
        handleActiveFilter();
        selectedFilterModel ? removeFilters(model) : filterModel(model);
      }}
      select={selectedFilterModel}
    >
      <Box />
      <Item>{model}</Item>
    </ContainerFilter>
  );
}
