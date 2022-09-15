import { GetServerSideProps } from 'next';
import InternalBackground from '../../components/InternalBackground';
import { AboutType, HeaderType } from '../types';
import mocklistproducts from '../../components/ListProducts/mocklistProducts';
import dataHome from '../api/mockHome';
import { ImagesProps, ProductProps } from '../produtos/[...slug]';

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
  ContainerEspecificação,
  ListEspecificacoes,
  TitleDetalhes,
  Value,
  Especificacoes,
  ImgDiscountDetalhes,
  ContainerDetalhes,
} from './style';

import { TitleDiscount } from '../../components/Product/style';
import { useEffect, useState } from 'react';

import InfosProduto from '../../components/Detalhes/InfoProduto/infoProduto';

import Image from 'next/image';
import ListProducts from '../../components/ListProducts';

interface DetalhesProps {
  background: HeaderType;
  exist: ProductDetalhesProps;
  conteudo: AboutType;
  setLoading: (loading: boolean) => void;
  prodRelacionados: ProductDetalhesProps[];
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
  details: DetailsProps;
  associated: AssociatedProps[];
};

export type AssociatedProps = {
  id: string;
  url: string;
};

export type DetailsProps = {
  size: string;
  material: string;
  accessories: string;
  front: string;
  height: string;
  hast: string;
  bridge: string;
  warranty: string;
  lens: string;
};

export default function Detelhes({
  background,
  conteudo,
  setLoading,
  prodRelacionados,
  exist,
}: DetalhesProps) {
  const [productSlug, setProductSlug] = useState<
    ProductDetalhesProps | undefined
  >({} as ProductDetalhesProps);

  const [relacionados, setRelacionados] = useState<ProductDetalhesProps[]>(
    {} as []
  );

  const router = useRouter();

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);

      setTimeout(() => {
        setRelacionados(prodRelacionados);
        setProductSlug(exist);
        setLoading(false);
      }, 1000);
    }

    loadProducts();
  }, [router.query.slug, exist, setLoading, prodRelacionados]);

  return (
    <>
      <InternalBackground background={background} height="128px" />
      {!productSlug && (
        <>
          <MessageError>
            <Icon>
              <Image alt="error" src="/erro.png" width={56} height={56} />
            </Icon>
            <Message>
              {`${router.query.slug} não parece ser o nome de um produto da
          Lunettes. Abra o menu e escolha um tipo de produto.`}
            </Message>
          </MessageError>
          <DescricaoAtendimento aboutAtendimento={conteudo.aboutAtendimento} />
        </>
      )}
      {productSlug && Object.entries(productSlug).length !== 0 && (
        <ContainerDetalhes>
          <Conteiner>
            {productSlug.discount > 0 ? (
              <ImgDiscountDetalhes>
                <PorcentDiscountDetalhes>
                  <TitleDiscount>{`${productSlug.discount}%`}</TitleDiscount>
                  <TextDiscount>OFF</TextDiscount>
                </PorcentDiscountDetalhes>
                <ImagesDetalhes products={productSlug.images} />
              </ImgDiscountDetalhes>
            ) : (
              <ImgDiscountDetalhes>
                <ImagesDetalhes products={productSlug.images} />
              </ImgDiscountDetalhes>
            )}
            <InfosProduto product={productSlug} />
            <ConteinerDescricao>
              <TitleDescricao>Descrição</TitleDescricao>
              <Descricao>{productSlug.description}</Descricao>
            </ConteinerDescricao>
            <ContainerEspecificação>
              <TitleDescricao>Detalhes</TitleDescricao>
              <Especificacoes>
                <ListEspecificacoes>
                  <TitleDetalhes>Tamanho</TitleDetalhes>
                  <Value>{productSlug.details.size}</Value>
                </ListEspecificacoes>
                <ListEspecificacoes>
                  <TitleDetalhes>Material</TitleDetalhes>
                  <Value>{productSlug.details.material}</Value>
                </ListEspecificacoes>
                <ListEspecificacoes>
                  <TitleDetalhes>Acessórios</TitleDetalhes>
                  <Value>{productSlug.details.accessories}</Value>
                </ListEspecificacoes>
                <ListEspecificacoes>
                  <TitleDetalhes>Medida da Frente</TitleDetalhes>
                  <Value>{productSlug.details.front}</Value>
                </ListEspecificacoes>
                <ListEspecificacoes>
                  <TitleDetalhes>Medida da Altura</TitleDetalhes>
                  <Value>{productSlug.details.height}</Value>
                </ListEspecificacoes>
                <ListEspecificacoes>
                  <TitleDetalhes>Medida da Haste</TitleDetalhes>
                  <Value>{productSlug.details.hast}</Value>
                </ListEspecificacoes>
                <ListEspecificacoes>
                  <TitleDetalhes>Medida da Ponte do Nariz</TitleDetalhes>
                  <Value>{productSlug.details.bridge}</Value>
                </ListEspecificacoes>
                <ListEspecificacoes>
                  <TitleDetalhes>Garantia</TitleDetalhes>
                  <Value>{productSlug.details.warranty}</Value>
                </ListEspecificacoes>
                <ListEspecificacoes>
                  <TitleDetalhes>Lente</TitleDetalhes>
                  <Value>{productSlug.details.lens}</Value>
                </ListEspecificacoes>
              </Especificacoes>
            </ContainerEspecificação>
          </Conteiner>
          <DescricaoAtendimento aboutAtendimento={conteudo.aboutAtendimento} />
          <ListProducts products={relacionados} />
        </ContainerDetalhes>
      )}
      {productSlug && Object.entries(productSlug).length === 0 && (
        <DescricaoAtendimento aboutAtendimento={conteudo.aboutAtendimento} />
      )}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const name = params?.slug;
  const produtos = await mocklistproducts;
  const exist = produtos.find(product => product.productName.trim() === name);

  const prodRelacionados = exist?.associated
    .map(relacionado => {
      return produtos.find(product => product._id === relacionado.id);
    })
    .filter(prod => prod);

  return {
    props: {
      background: dataHome.header,
      exist,
      conteudo: dataHome.about,
      prodRelacionados,
    },
  };
};
