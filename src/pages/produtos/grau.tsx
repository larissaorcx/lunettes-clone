import InternalBackground from '../../components/InternalBackground';
import { HeaderType } from '../types';
import { Caminho, Container, Titulo, Simbolo, ContainerCaminho } from './style';
import dataHome from '../../api/mockHome';
import { GetServerSideProps } from 'next';
import ListProducts from '../../components/ListProducts';
import mocklistproducts from '../../components/ListProducts/mocklistProducts';
import { Colorproducts } from '../../components/Filters/Color/ColorFilter';
import React from 'react';
import Filtrar from '../../components/Filters';
import Image from 'next/image';

interface ProductsProps {
  background: HeaderType;
  products: ProductProps[];
  setLoading: (loading: boolean) => void;
}
export type ProductProps = {
  _id: string;
  subcategories: string[];
  price: number;
  images: ImagesProps[];
  productName: string;
  code: string;
  isNewCollection: boolean;
  discount: number;
};

export type ImagesProps = {
  id: string;
  url: string;
  color: Colorproducts;
  allImages: AllImages;
};

type AllImages = {
  xs: string;
  md: string;
  lg: string;
};

export default function Products({
  background,
  products,
  setLoading,
}: ProductsProps) {
  return (
    <>
      <InternalBackground background={background} height="200px" />
      <Container>
        <ContainerCaminho>
          <Caminho>Home </Caminho>
          <Simbolo>
            <Image alt="next" src="/right.png" width={16} height={16} />
          </Simbolo>
          <Caminho>Grau </Caminho>
        </ContainerCaminho>
        <Titulo>Grau</Titulo>
      </Container>
      <Filtrar products={products} />
      <ListProducts setLoading={setLoading} />
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
      productName: product.productName,
      code: product.code,
      isNewCollection: product.isNewCollection,
      discount: product.discount,
    };
  });
  return {
    props: {
      background: dataHome.header,
      products,
    },
  };
};
