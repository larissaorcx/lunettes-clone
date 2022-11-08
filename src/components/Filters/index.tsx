import { useState } from 'react';
import { filterColor, filterModel, filterPrice } from '../../helper/filter';
import { ProductProps } from '../../pages/produtos/[slug]';
import {
  ButtonFilterCor,
  ButtonFilterModelo,
  ButtonFilterPreco,
  ContainerButton,
  ButtonFilter,
  ContainerFilter,
  Button,
  Titulo,
  Filter,
  ButtonClose,
  ButtonCloseFilters,
} from './style';
import ColorFilter from './Color/ColorFilter';
import ModelFilter from './Model/ModelFilter';
import PriceFilter from './Price/PriceModel';
import Image from 'next/image';

interface ButtonFiltrarProps {
  products: ProductProps[];
}

export default function Filtrar({ products }: ButtonFiltrarProps) {
  const [openButton, setOpenButton] = useState(false);
  const [openFilter, setOpenFilter] = useState('color');

  function handleOpenButtonFilter() {
    setOpenButton(!openButton);
  }

  return (
    <ContainerFilter>
      <ButtonFilter openButton={openButton}>
        <Button type="button" onClick={() => handleOpenButtonFilter()}>
          <Image alt="filtro" src="/filtro.png" width={17} height={17} />
          <Titulo>Filtrar</Titulo>
        </Button>
      </ButtonFilter>
      <ContainerButton openButton={openButton}>
        <ButtonClose openButton={openButton}>
          <ButtonCloseFilters
            type="button"
            onClick={() => handleOpenButtonFilter()}
            openButton={openButton}
          >
            <Image alt="filtroClose" src="/close.png" width={25} height={25} />
          </ButtonCloseFilters>
        </ButtonClose>
        <Filter>
          <ButtonFilterCor
            onClick={() => setOpenFilter('color')}
            openFilter={openFilter === 'color'}
          >
            Cores
          </ButtonFilterCor>
          <ButtonFilterModelo
            onClick={() => setOpenFilter('model')}
            openFilter={openFilter === 'model'}
          >
            Modelos
          </ButtonFilterModelo>
          <ButtonFilterPreco
            onClick={() => setOpenFilter('price')}
            openFilter={openFilter === 'price'}
          >
            Preços
          </ButtonFilterPreco>
        </Filter>
        {openFilter === 'color' && (
          <ColorFilter products={filterColor({ products })} />
        )}
        {openFilter === 'model' && (
          <ModelFilter products={filterModel({ products })} />
        )}
        {openFilter === 'price' && (
          <PriceFilter products={filterPrice({ products })} />
        )}
      </ContainerButton>
    </ContainerFilter>
  );
}
