import InternalBackground from '../../components/InternalBackground';
import { HeaderType } from '../types';
import { Caminho, Container, Titulo, Simbolo, ContainerCaminho } from './style';
import dataHome from '../../api/mockHome';
import { GetServerSideProps } from 'next';
import ListProducts from '../../components/ListProducts';
import mocklistproducts from '../../components/ListProducts/mocklistProducts';
import { Colorproducts } from '../../components/Filters/Color/ColorFilter';
import React from 'react';
import Filtrar from '../../components/ButtonFiltrar';

interface ProductsProps {
  background: HeaderType;
  products: ProductProps[];
}
export type ProductProps = {
  _id: string;
  subcategories: string[];
  price: number;
  images: imagesProps[];
};

type imagesProps = {
  id: string;
  url: string;
  color: Colorproducts;
  allImages: string;
};

export default function Products({ background, products }: ProductsProps) {
  // const [openFilter, setOpenFilter] = useState({
  //   color: true,
  //   model: false,
  //   price: false,
  // });

  // function handleOpenFilter(filter: string) {
  //   if (filter === 'color') {
  //     setOpenFilter({
  //       color: true,
  //       model: false,
  //       price: false,
  //     });
  //   } else if (filter === 'model') {
  //     setOpenFilter({
  //       color: false,
  //       model: true,
  //       price: false,
  //     });
  //   } else {
  //     setOpenFilter({
  //       color: false,
  //       model: false,
  //       price: true,
  //     });
  //   }
  // }

  return (
    <>
      <InternalBackground background={background} height="200px" />
      <Container>
        <ContainerCaminho>
          <Caminho>Home </Caminho>
          <Simbolo>&gt; </Simbolo>
          <Caminho>Grau </Caminho>
        </ContainerCaminho>
        <Titulo>Grau</Titulo>
      </Container>
      <Filtrar products={products} />
      {/* <ContainerButton>
        <ButtonFilterCor onClick={() => handleOpenFilter('color')}>
          Cores
        </ButtonFilterCor>
        <ButtonFilterModelo onClick={() => handleOpenFilter('model')}>
          Modelos
        </ButtonFilterModelo>
        <ButtonFilterPreco onClick={() => handleOpenFilter('price')}>
          Preços
        </ButtonFilterPreco>
      </ContainerButton>
      {openFilter.color && <ColorFilter products={filterColor({ products })} />}
      {openFilter.model && <ModelFilter products={filterModel({ products })} />}
      {openFilter.price && <PriceFilter products={filterPrice({ products })} />} */}

      <ListProducts />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const products = mocklistproducts.map(product => {
    return {
      id: product._id,
      subcategories: product.subcategories,
      price: product.price,
      images: product.images,
    };
  });
  return {
    props: {
      background: dataHome.header,
      products,
    },
  };
};
