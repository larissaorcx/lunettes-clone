import dataHome from './api/mockHome';

import { GetServerSideProps } from 'next';
import { HeaderType, AboutType, FooterType, MenuFloating } from '../types';
import About from '../components/Contatos';
import { Background } from '../../public/styles/backgroundStyle';
import ListProducts, { ProdDetalhe } from '../components/ListProducts';
import { ProductProps } from './produtos/[slug]';
import mocklistProducts from '../components/ListProducts/mocklistProducts';
import { useEffect, useState } from 'react';
import { createClient } from '../../prismicio';

type HomeProps = {
  conteudo: {
    header: HeaderType;
    about: AboutType;
  };
  destaques: ProdDetalhe[];
  footer: FooterType;
  listMenu: MenuFloating;
  openMenu: boolean;
  handleOpenMenu: () => void;
  setLoading: (loading: boolean) => void;
};

export default function Home({ conteudo, destaques, setLoading }: HomeProps) {
  const [loadproducts, setloadProducts] = useState<ProdDetalhe[]>(destaques);
  useEffect(() => {
    async function loadProducts() {
      setLoading(true);

      setTimeout(() => {
        setloadProducts(destaques);

        setLoading(false);
      }, 1000);
    }

    loadProducts();
  }, [destaques, setLoading]);

  return (
    <>
      <Background backgroundImages={conteudo.header} />
      <About
        atendimento={conteudo.about.atendimento}
        text={conteudo.about.text}
        aboutAtendimento={conteudo.about.aboutAtendimento}
      />
      <ListProducts products={loadproducts} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  previewData,
}) => {
  const client = createClient({ previewData });

  const productsPrismic = await client.getAllByTag('destacado');

  const destaque = productsPrismic.flatMap(prod => {
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
      conteudo: dataHome,
      destaques: destaque,
    },
  };
};
