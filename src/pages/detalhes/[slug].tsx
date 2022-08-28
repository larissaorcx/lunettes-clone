import { GetServerSideProps } from 'next';
import InternalBackground from '../../components/InternalBackground';
import { AboutType, HeaderType } from '../types';
import mocklistproducts from '../../components/ListProducts/mocklistProducts';
import dataHome from '../api/mockHome';
import { ImagesProps } from '../produtos/[slug]';

import { useRouter } from 'next/router';
import ImagesDetalhes from '../../components/Detalhes/ImagesDetalhes';

import DescricaoAtendimento from '../../components/Contatos/DescriçãoAtendimento';
import {
  Conteiner,
  Icon,
  Message,
  MessageError,
  TextDiscount,
  PorcentDiscountDetalhes,
  ConteinerDescricao,
  Descricao,
  TitleDescricao,
} from './style';

import { TitleDiscount } from '../../components/ListProducts/style';
import { useEffect, useState } from 'react';

import InfosProduto from '../../components/Detalhes/InfoProduto/infoProduto';

import Image from 'next/image';

interface DetalhesProps {
  background: HeaderType;
  products: ProductDetalhesProps[];
  conteudo: AboutType;
  setLoading: (loading: boolean) => void;
}

export type ProductDetalhesProps = {
  _id: string;
  subcategories: string[];
  category: string;
  price: number;
  images: ImagesProps[];
  productName: string;
  code: string;
  isNewCollection: boolean;
  discount: number;
  formatedPrice?: string;
  description: string;
};

export default function Detelhes({
  background,
  conteudo,
  setLoading,
}: DetalhesProps) {
  const [productSlug, setProductSlug] = useState<
    ProductDetalhesProps | undefined
  >({} as ProductDetalhesProps);
  const router = useRouter();

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);

      const produtos = await mocklistproducts;
      const exist = produtos.find(
        product => product.productName.trim() === router.query.slug
      );
      setTimeout(() => {
        setProductSlug(exist);

        setLoading(false);
      }, 1000);
    }

    loadProducts();
  }, []);

  return (
    <>
      <InternalBackground background={background} height="128px" />
      {productSlug === undefined && (
        <MessageError>
          <Icon>
            <Image alt="error" src="/erro.png" width={56} height={56} />
          </Icon>
          <Message>
            {`${router.query.slug} não parece ser o nome de um produto da
          Lunettes. Abra o menu e escolha um tipo de produto.`}
          </Message>
        </MessageError>
      )}
      {productSlug && Object.entries(productSlug).length !== 0 && (
        <Conteiner>
          {productSlug.discount > 0 && (
            <PorcentDiscountDetalhes>
              <TitleDiscount>{productSlug.discount}%</TitleDiscount>
              <TextDiscount>OFF</TextDiscount>
            </PorcentDiscountDetalhes>
          )}
          <ImagesDetalhes products={productSlug.images} />
          <InfosProduto product={productSlug} />
          <ConteinerDescricao>
            <TitleDescricao>Descrição</TitleDescricao>
            <Descricao>{productSlug.description}</Descricao>
          </ConteinerDescricao>
        </Conteiner>
      )}
      <DescricaoAtendimento aboutAtendimento={conteudo.aboutAtendimento} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const products = mocklistproducts.map(product => {
    return {
      id: product._id,
      category: product.category,
      subcategories: product.subcategories,
      price: product.price,
      images: product.images,
      productName: product.productName,
      code: product.code,
      isNewCollection: product.isNewCollection,
      discount: product.discount,
      description: product.description,
    };
  });
  return {
    props: {
      background: dataHome.header,
      products,
      conteudo: dataHome.about,
    },
  };
};
