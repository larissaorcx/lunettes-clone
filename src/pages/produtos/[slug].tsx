import InternalBackground from '../../components/InternalBackground';
import { HeaderType } from '../../types';
import {
  Caminho,
  Container,
  Titulo,
  Simbolo,
  ContainerCaminho,
  ConatinerError,
} from './style';
import dataHome from '../api/mockHome';
import { GetServerSideProps } from 'next';
import ListProducts, { ProdDetalhe } from '../../components/ListProducts';

import React, { useEffect, useState } from 'react';
import Filtrar from '../../components/Filters';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Icon, Message } from '../detalhes/style';

import { createClient } from '../../../prismicio';
import { useFilter } from '../../hooks/useFilter';

interface ProductsProps {
  background: HeaderType;
  products: ProdDetalhe[];
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

export default function Products({
  background,
  products,
  setLoading,
}: ProductsProps) {
  const router = useRouter();

  const [loadproducts, setloadProducts] = useState<ProdDetalhe[]>(products);

  const { setBackupProd, produtoFiltered } = useFilter();

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

  useEffect(() => {
    setBackupProd(loadproducts);
  }, []);

  return (
    <>
      <InternalBackground background={background} height="200px" />
      <Container>
        <ContainerCaminho>
          <Caminho>Home</Caminho>
          <Simbolo>
            <Image alt="next" src="/right.png" width={16} height={16} />
          </Simbolo>
          <Caminho>{router.query?.category}</Caminho>
        </ContainerCaminho>
        {loadproducts.length === 0 ? (
          <ConatinerError>
            {router.query?.style ? (
              <Titulo>{router.query?.style}</Titulo>
            ) : (
              <Titulo>{router.query?.category}</Titulo>
            )}
            <Icon>
              <Image alt="error" src="/aviso.png" width={56} height={56} />
            </Icon>
            <Message>Não encontramos produtos para essa pesquisa</Message>
          </ConatinerError>
        ) : router.query?.style ? (
          <>
            <Titulo>{router.query?.style}</Titulo>
            <Filtrar products={loadproducts} />
            {produtoFiltered.length === 0 ? (
              <ListProducts products={loadproducts} />
            ) : (
              <ListProducts products={produtoFiltered} />
            )}
          </>
        ) : (
          <>
            <Titulo>{router.query?.category}</Titulo>
            <Filtrar products={loadproducts} />
            {produtoFiltered.length === 0 ? (
              <ListProducts products={loadproducts} />
            ) : (
              <ListProducts products={produtoFiltered} />
            )}
          </>
        )}
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  query,
  previewData,
}) => {
  const client = createClient({ previewData });

  const tags: string[] = [];

  tags.push(String(query.category));
  if (query.style) {
    tags.push(String(query.style));
  }

  const productsPrismic = await client.getAllByEveryTag(tags);

  const products = productsPrismic.flatMap(prod => {
    let sub: string[] = [];

    prod.data.subcategories.forEach((subcat: any) =>
      sub.push(subcat.subcategory)
    );
    return {
      _id: prod.data.idproduct,
      subcategories: sub,
      price: prod.data.price,
      images: prod.data.images,
      productName: prod.data.productname,
      code: prod.data.code,
      isNewCollection: prod.data.isnewcollection,
      discount: prod.data.discount,
      category: prod.data.category,
      formatedPrice: prod.data.formatedprice,
      highlighted: prod.data.highlighted,
    };
  });
  return {
    props: {
      background: dataHome.header,
      products,
      query,
    },
  };
};
