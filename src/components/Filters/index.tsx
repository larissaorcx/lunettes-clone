import { useState } from 'react';
import { filterColor, filterModel, filterPrice } from '../../helper/filter';
import { ProductProps } from '../../pages/produtos/grau';
import {
  ButtonFilterCor,
  ButtonFilterModelo,
  ButtonFilterPreco,
  ContainerButton,
  ButtonFilter,
  ContainerFilter,
  Button,
  Titulo,
} from './style';
import ColorFilter from './Color/ColorFilter';
import ModelFilter from './Model/ModelFilter';
import PriceFilter from './Price/PriceModel';
import Image from 'next/image';

interface ButtonFiltrarProps {
  products: ProductProps[];
}

export default function Filtrar({ products }: ButtonFiltrarProps) {
  const [openFilter, setOpenFilter] = useState('color');

  return (
    <ContainerFilter>
      <>
        <ButtonFilter>
          <Button>
            <Image
              alt="filtro"
              src="/filtro.png"
              width={17}
              height={17}
            ></Image>
            <Titulo>Filtrar</Titulo>
          </Button>
        </ButtonFilter>
        <ContainerButton>
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
        </ContainerButton>
        {openFilter === 'color' && (
          <ColorFilter products={filterColor({ products })} />
        )}
        {openFilter === 'model' && (
          <ModelFilter products={filterModel({ products })} />
        )}
        {openFilter === 'price' && (
          <PriceFilter products={filterPrice({ products })} />
        )}
      </>
    </ContainerFilter>
  );
}
