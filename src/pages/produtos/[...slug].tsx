import InternalBackground from '../../components/InternalBackground';
import { HeaderType } from '../types';
import { Caminho, Container, Titulo, Simbolo, ContainerCaminho } from './style';
import dataHome from '../api/mockHome';
import { GetServerSideProps } from 'next';
import ListProducts from '../../components/ListProducts';
import mocklistproducts from '../../components/ListProducts/mocklistProducts';
import { Colorproducts } from '../../components/Filters/Color/ColorFilter';
import React, { useEffect } from 'react';
import Filtrar from '../../components/Filters';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface ProductsProps {
  background: HeaderType;
  products: ProductProps[];
  setLoading: (loading: boolean) => void;
  category: string;
  subcategory: string;
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
  formatedPrice?: string;
  category: string;
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
  category,
  subcategory,
}: ProductsProps) {
  const router = useRouter();

  // useEffect(() => {}, [router.query.slug]);

  return (
    <>
      <InternalBackground background={background} height="200px" />
      <Container>
        <ContainerCaminho>
          <Caminho>Home</Caminho>
          <Simbolo>
            <Image alt="next" src="/right.png" width={16} height={16} />
          </Simbolo>
          <Caminho>{category}</Caminho>
        </ContainerCaminho>
        {subcategory ? (
          <Titulo>{subcategory}</Titulo>
        ) : (
          <Titulo>{category}</Titulo>
        )}
      </Container>
      <Filtrar products={products} />
      <ListProducts setLoading={setLoading} products={products} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slugs = params?.slug;

  console.log('slug', slugs);

  let filteredProducts: ProductProps[] = [];
  let category: String = '';
  let subcategory: String = '';

  if (slugs) {
    if (slugs.length > 1) {
      category = slugs[0].toUpperCase();
      subcategory = slugs[1].toUpperCase();

      filteredProducts = mocklistproducts
        .filter(
          product =>
            product.category.toUpperCase() === category &&
            product.subcategories.find(sub => sub.toUpperCase() === subcategory)
        )
        .map(product => {
          return {
            _id: product._id,
            subcategories: product.subcategories,
            price: product.price,
            images: product.images,
            productName: product.productName,
            code: product.code,
            isNewCollection: product.isNewCollection,
            discount: product.discount,
            category: product.category,
          };
        });
    } else {
      category = slugs[0].toUpperCase();

      filteredProducts = mocklistproducts
        .filter(product => product.category.toUpperCase() === category)
        .map(product => {
          return {
            _id: product._id,
            subcategories: product.subcategories,
            price: product.price,
            images: product.images,
            productName: product.productName,
            code: product.code,
            isNewCollection: product.isNewCollection,
            discount: product.discount,
            category: product.category,
          };
        });
    }
  }

  return {
    props: {
      background: dataHome.header,
      products: filteredProducts,
      category,
      subcategory,
    },
  };
};
