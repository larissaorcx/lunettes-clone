import { GetServerSideProps } from 'next';
import InternalBackground from '../../components/InternalBackground';
import { AboutType, HeaderType } from '../types';
import mocklistproducts from '../../components/ListProducts/mocklistProducts';
import dataHome from '../api/mockHome';
import { ImagesProps } from '../produtos/[slug]';
import Image from 'next/image';
import { useRouter } from 'next/router';
import ImagesDetalhes from '../../components/Detalhes/ImagesDetalhes';

import DescricaoAtendimento from '../../components/Contatos/DescriçãoAtendimento';
import {
  Conteiner,
  ContainerConteudo,
  NameProduct,
  ContainerCaminhoDetalhes,
} from './style';
import { Caminho, Simbolo } from '../produtos/style';
import { CodigoProduto } from '../../components/Destaques/style';

interface DetalhesProps {
  background: HeaderType;
  products: ProductDetalhesProps[];
  conteudo: AboutType;
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
};

export default function Detelhes({
  background,
  products,
  conteudo,
}: DetalhesProps) {
  const router = useRouter();
  return (
    <>
      <InternalBackground background={background} height="128px" />
      {products.map(
        product =>
          product.productName === router.query.slug && (
            <Conteiner>
              <ImagesDetalhes products={product.images} />
              <ContainerConteudo>
                <ContainerCaminhoDetalhes>
                  <Caminho>Home </Caminho>
                  <Simbolo>
                    <Image alt="next" src="/right.png" width={16} height={16} />
                  </Simbolo>
                  <Caminho>{product.category}</Caminho>
                  <Simbolo>
                    <Image alt="next" src="/right.png" width={16} height={16} />
                  </Simbolo>
                  <Caminho>{product.subcategories}</Caminho>
                </ContainerCaminhoDetalhes>
                <NameProduct>{product.productName}</NameProduct>
                <CodigoProduto>{product.code}</CodigoProduto>
              </ContainerConteudo>
            </Conteiner>
          )
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
