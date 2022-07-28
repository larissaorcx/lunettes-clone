import InternalBackground from '../../components/InternalBackground';
import { HeaderType } from '../types';
import {
  Caminho,
  Container,
  Titulo,
  Simbolo,
  ContainerButton,
  ButtonFilterModelo,
  ButtonFilterPreco,
  ContainerCaminho,
  ButtonFilterCor,
} from './style';
import dataHome from '../../api/mockHome';
import { GetServerSideProps } from 'next';
import ListProducts from '../../components/ListProducts';
import ColorFilter from '../../components/Filters/ColorFilter';
import mocklistproducts from '../../components/ListProducts/mocklistProducts';
import { Colorproducts } from '../../components/Filters/ColorFilter';
import React from 'react';
import Filter from '../../helper/Filter';

interface ProductsProps {
  background: HeaderType;
  products: ProductProps[];
}
export type ProductProps = {
  _id: string;
  category: string;
  price: number;
  // color: Colorproducts[];
  images: imagesProps[];
};

type imagesProps = {
  id: string;
  url: string;
  color: { name: string; background: string };
  allImages: string;
};

export default function Products({ background, products }: ProductsProps) {
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
      <ContainerButton>
        <ButtonFilterCor>Cores</ButtonFilterCor>
        <ButtonFilterModelo>Modelos</ButtonFilterModelo>
        <ButtonFilterPreco>Preços</ButtonFilterPreco>
      </ContainerButton>
      {/* <ColorFilter products={products} /> */}
      <Filter products={products} />
      <ListProducts />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const products = mocklistproducts.map(product => {
    return {
      id: product._id,
      category: product.category,
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
