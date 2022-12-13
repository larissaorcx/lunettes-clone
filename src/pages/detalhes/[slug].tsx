import { GetStaticPaths, GetStaticProps } from 'next';
import { createClient } from '../../../prismicio';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import InternalBackground from '../../components/InternalBackground';
import { AboutType, HeaderType } from '../types';
import dataHome from '../api/mockHome';
import { ImagesProps } from '../produtos/[slug]';
import { useRouter } from 'next/router';
import ImagesDetalhes from '../../components/Detalhes/ImagesDetalhes';
import DescricaoAtendimento from '../../components/Contatos/DescriçãoAtendimento';
import { TitleDiscount } from '../../components/Product/style';
import ListProducts from '../../components/ListProducts';
import InfosProduto from '../../components/Detalhes/InfoProduto/infoProduto';

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
  ContainerInfoProdImage,
} from './style';
import swiper from 'swiper';

interface DetalhesProps {
  background: HeaderType;
  prodExist: ProductDetalhesProps;
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
  formatedPrice: number;
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

export default function Detalhes({
  background,
  conteudo,
  setLoading,
  prodRelacionados,
  prodExist,
}: DetalhesProps) {
  const [productSlug, setProductSlug] = useState<
    ProductDetalhesProps | undefined
  >({} as ProductDetalhesProps);

  const [relacionados, setRelacionados] = useState<ProductDetalhesProps[]>(
    {} as []
  );

  const router = useRouter();
  const [activeColorId, setActiveColorId] = useState('');
  const [filteredColors, setFilteredColors] = useState<ImagesProps[]>([]);
  const [swiperInstance, setSwiperInstance] = useState<swiper>();

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);

      setTimeout(() => {
        setRelacionados(prodRelacionados);
        setProductSlug(prodExist);
        setLoading(false);

        if (prodExist) {
          const newFilteredColos = prodExist.images.filter(
            nameColor => nameColor.colorname !== 'NOTCOLOR'
          );
          setFilteredColors(newFilteredColos);
          setActiveColorId(newFilteredColos[0].idimage);
        }
      }, 1000);
    }

    loadProducts();
  }, [router.query.slug, prodExist, setLoading, prodRelacionados, productSlug]);

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
              <ContainerInfoProdImage>
                <ImgDiscountDetalhes>
                  <PorcentDiscountDetalhes>
                    <TitleDiscount>{`${productSlug.discount}%`}</TitleDiscount>
                    <TextDiscount>OFF</TextDiscount>
                  </PorcentDiscountDetalhes>
                  <ImagesDetalhes
                    images={productSlug.images}
                    setSwiperInstance={setSwiperInstance}
                  />
                </ImgDiscountDetalhes>
                <InfosProduto
                  product={productSlug}
                  activeColorId={activeColorId}
                  setActiveColorId={setActiveColorId}
                  filteredColors={filteredColors}
                  swiperInstance={swiperInstance}
                />
              </ContainerInfoProdImage>
            ) : (
              <ContainerInfoProdImage>
                <ImgDiscountDetalhes>
                  <ImagesDetalhes
                    images={productSlug.images}
                    setSwiperInstance={setSwiperInstance}
                  />
                </ImgDiscountDetalhes>
                <InfosProduto
                  product={productSlug}
                  activeColorId={activeColorId}
                  setActiveColorId={setActiveColorId}
                  filteredColors={filteredColors}
                  swiperInstance={swiperInstance}
                />
              </ContainerInfoProdImage>
            )}
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
export const getStaticPaths: GetStaticPaths = async () => {
  const client = createClient();
  const produto = await client.getAllByType('produto');

  return {
    paths: produto.map((product: any) => ({
      params: { slug: product.uid },
    })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({
  previewData,
  params,
}) => {
  const client = createClient({ previewData });

  const slug = params?.slug;

  const productsPrismic = await client.getByUID(
    'produto',
    String(slug).toLowerCase(),
    {
      fetchLinks: [
        'produto.productname',
        'produto.price',
        'produto.images',
        'produto.code',
        'produto.isnewcollection',
        'produto.discount',
        'produto.formatedprice',
        'produto.idproduct',
      ],
    }
  );

  let sub: string[] = [];

  productsPrismic.data.subcategories.forEach((subcat: any) =>
    sub.push(subcat.subcategory)
  );

  let associateds: any[] = [];

  if (productsPrismic.data.associados.length !== 1) {
    productsPrismic.data.associados.forEach((assoc: any) =>
      associateds.push({
        _id: assoc.associado.data.idproduct,
        price: assoc.associado.data.price,
        images: assoc.associado.data.images,
        productName: assoc.associado.data.productname,
        code: assoc.associado.data.code,
        isNewCollection: assoc.associado.data.isnewcollection,
        discount: assoc.associado.data.discount,
        formatedPrice: assoc.associado.data.formatedprice,
      })
    );
  }

  const prodExist = {
    _id: productsPrismic.data.idproduct,
    subcategories: sub,
    price: productsPrismic.data.price,
    images: productsPrismic.data.images,
    productName: productsPrismic.data.productname,
    code: productsPrismic.data.code,
    isNewCollection: productsPrismic.data.isnewcollection,
    discount: productsPrismic.data.discount,
    category: productsPrismic.data.category,
    formatedPrice: productsPrismic.data.formatedprice,
    associated: associateds,
    description: productsPrismic.data.description,
    details: {
      size: productsPrismic.data.size,
      material: productsPrismic.data.material,
      accessories: productsPrismic.data.accessories,
      front: productsPrismic.data.front,
      height: productsPrismic.data.height,
      hast: productsPrismic.data.hast,
      bridge: productsPrismic.data.bridge,
      warranty: productsPrismic.data.warranty,
      lens: productsPrismic.data.lens,
    },
  };

  return {
    props: {
      background: dataHome.header,
      prodExist,
      conteudo: dataHome.about,
      prodRelacionados: prodExist.associated,
    },
  };
};
