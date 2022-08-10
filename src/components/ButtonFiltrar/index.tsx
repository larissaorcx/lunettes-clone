import { useState } from 'react';
import { filterColor, filterModel, filterPrice } from '../../helper/filter';
import { ProductProps } from '../../pages/produtos/grau';
import {
  ButtonFilterCor,
  ButtonFilterModelo,
  ButtonFilterPreco,
  ContainerButton,
} from '../../pages/produtos/style';
import ColorFilter from '../Filters/Color/ColorFilter';
import ModelFilter from '../Filters/Model/ModelFilter';
import PriceFilter from '../Filters/Price/PriceModel';

interface ButtonFiltrarProps {
  products: ProductProps[];
}

export default function Filtrar({ products }: ButtonFiltrarProps) {
  const [openFilter, setOpenFilter] = useState({
    color: true,
    model: false,
    price: false,
  });

  function handleOpenFilter(filter: string) {
    if (filter === 'color') {
      setOpenFilter({
        color: true,
        model: false,
        price: false,
      });
    } else if (filter === 'model') {
      setOpenFilter({
        color: false,
        model: true,
        price: false,
      });
    } else {
      setOpenFilter({
        color: false,
        model: false,
        price: true,
      });
    }
  }
  return (
    <>
      <ContainerButton>
        <ButtonFilterCor
          onClick={() => handleOpenFilter('color')}
          openFilter={openFilter.color}
        >
          Cores
        </ButtonFilterCor>
        <ButtonFilterModelo
          onClick={() => handleOpenFilter('model')}
          openFilter={openFilter.model}
        >
          Modelos
        </ButtonFilterModelo>
        <ButtonFilterPreco
          onClick={() => handleOpenFilter('price')}
          openFilter={openFilter.price}
        >
          Preços
        </ButtonFilterPreco>
      </ContainerButton>
      {openFilter.color && <ColorFilter products={filterColor({ products })} />}
      {openFilter.model && <ModelFilter products={filterModel({ products })} />}
      {openFilter.price && <PriceFilter products={filterPrice({ products })} />}
    </>
  );
}
