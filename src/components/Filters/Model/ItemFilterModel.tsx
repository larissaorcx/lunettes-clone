import { useEffect, useState } from 'react';
import { useFilter } from '../../../hooks/useFilter';
import { ContainerFilter } from './style';
import { Box, Item } from './style';

interface ItemFilterModelProps {
  model: string;
  setOpenButton: (arg: boolean) => void;
}

export default function ItemFilterModel({
  model,
  setOpenButton,
}: ItemFilterModelProps) {
  const [selectedFilterModel, setSelectedFilterModel] =
    useState<boolean>(false);

  const { filterModel, removeFilters, activeFilters } = useFilter();

  function handleActiveFilter() {
    setSelectedFilterModel(!selectedFilterModel);
    setOpenButton(false);
  }

  useEffect(() => {
    if (activeFilters.length === 0) {
      setSelectedFilterModel(false);
    } else {
      const filterFind = activeFilters.find(filter => filter === model);

      if (filterFind) {
        setSelectedFilterModel(true);
      }
    }
  }, [activeFilters, model]);

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
