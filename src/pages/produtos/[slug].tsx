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
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next';
import ListProducts, { ProdDetalhe } from '../../components/ListProducts';
import mocklistproducts from '../../components/ListProducts/mocklistProducts';
import { Colorproducts } from '../../components/Filters/Color/ColorFilter';
import React, { useEffect, useState } from 'react';
import Filtrar from '../../components/Filters';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Icon, Message } from '../detalhes/style';

import { createClient } from '../../../prismicio';

interface ProductsProps {
  background: HeaderType;
  products: ProdDetalhe[];
  setLoading: (loading: boolean) => void;
  category: string;
  subcategory: string;
  query: any;
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
  formatedPrice: number;
  category: string;
};

export type ImagesProps = {
  idimage: string;
  backgroundcolor: string;
  colorname: string;
  imglg: string;
  imgxs: string;
};

type AllImages = {
  xs: string;
  md: string;
  lg: string;
};

type ProductPropsTESTE = {
  _id: string;
  subcategories: string[];
  price: number;
  images: testProdImg[];
  productName: string;
  code: string;
  isNewCollection: boolean;
  discount: number;
  formatedPrice?: string;
  category: string;
};

type testProdImg = {
  id: string;
  url: string;
  color: Colorproducts;
  allImages: AllImages;
};

export default function Products({
  background,
  products,
  setLoading,
  category,
  subcategory,
  query,
}: ProductsProps) {
  const router = useRouter();
  const tamSlug = router.query.slug?.length;

  console.log('querys mandadas', query.slug);

  const [loadproducts, setloadProducts] = useState<ProdDetalhe[]>(products);

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);

      setTimeout(() => {
        setloadProducts(products);

        setLoading(false);
      }, 1000);
    }

    loadProducts();
  }, [products, setLoading]);

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
        {(tamSlug && tamSlug >= 3) || loadproducts.length === 0 ? (
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
            <Filtrar products={loadproducts} />
            <ListProducts products={loadproducts} />
          </>
        ) : (
          <>
            <Titulo>{category}</Titulo>
            <Filtrar products={loadproducts} />
            <ListProducts products={loadproducts} />
          </>
        )}
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  query,
  previewData,
  params,
}) => {
  const slugs = params?.slug;

  const client = createClient({ previewData });
  const productsPrismic = await client.getAllByType('produto');
  console.log('querys enviadas', query, 'slugs', slugs);

  let filteredProducts: ProductPropsTESTE[] = [];
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
      query,
    },
  };
};
