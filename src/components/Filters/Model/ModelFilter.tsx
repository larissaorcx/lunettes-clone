import { useState } from 'react';
import { useFilter } from '../../hooks/useFilter';
import { Item, ContainerFilter, Box, Container } from './style';

export interface ModelFilterProps {
  products: string[];
}

export default function ModelFilter({ products }: ModelFilterProps) {
  const [SelectModel, setSelectModel] = useState('');

  function handleSelectModel(modelClick: string) {
    const model = SelectModel === modelClick ? '' : modelClick;
    setSelectModel(model);
  }
  const { filterModel } = useFilter();

  return (
    <Container>
      {products.map(model => (
        <ContainerFilter
          key={model}
          onClick={() => {
            handleSelectModel(model);
            filterModel(model);
          }}
          select={SelectModel === model}
        >
          <Box />

          <Item>{model}</Item>
        </ContainerFilter>
      ))}
    </Container>
  );
}
