import InternalBackground from '../../components/InternalBackground';
import { HeaderType } from '../types';
import {
  Caminho,
  Container,
  Titulo,
  Simbolo,
  ContainerCaminho,
  ConatinerError,
} from './style';
import dataHome from '../api/mockHome';
import { GetServerSideProps, GetStaticProps } from 'next';
import ListProducts from '../../components/ListProducts';
import mocklistproducts from '../../components/ListProducts/mocklistProducts';
import { Colorproducts } from '../../components/Filters/Color/ColorFilter';
import React, { useEffect } from 'react';
import Filtrar from '../../components/Filters';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Icon, Message } from '../detalhes/style';
import mocklistProducts from '../../components/ListProducts/mocklistProducts';

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
  const tamSlug = router.query.slug?.length;

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
        {(tamSlug && tamSlug >= 3) || products.length === 0 ? (
          <ConatinerError>
            <Titulo>{router.query?.slug?.slice(1)}</Titulo>
            <Icon>
              <Image alt="error" src="/aviso.png" width={56} height={56} />
            </Icon>
            <Message>Não encontramos produtos para essa pesquisa</Message>
          </ConatinerError>
        ) : subcategory ? (
          <>
            <Titulo>{subcategory}</Titulo>
            <Filtrar products={products} />
            <ListProducts setLoading={setLoading} products={products} />
          </>
        ) : (
          <>
            <Titulo>{category}</Titulo>
            <Filtrar products={products} />
            <ListProducts setLoading={setLoading} products={products} />
          </>
        )}
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  const products = mocklistProducts;
  return {
    paths: products.map(product => ({
      params: {
        slug: [
          product.category.toLowerCase(),
          ...product.subcategories.map(subcategory =>
            subcategory.toLowerCase()
          ),
        ],
      },
    })),
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slugs = params?.slug;

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
