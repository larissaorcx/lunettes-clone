import dataHome from './api/mockHome';

import { GetServerSideProps } from 'next';
import { HeaderType, AboutType, FooterType, MenuFloating } from './types';
import About from '../components/Contatos';
import { Background } from '../../public/styles/backgroundStyle';
import ListProducts from '../components/ListProducts';
import { ProductProps } from './produtos/[...slug]';
import mocklistProducts from '../components/ListProducts/mocklistProducts';
import { useEffect, useState } from 'react';

type HomeProps = {
  conteudo: {
    header: HeaderType;
    about: AboutType;
  };
  destaques: ProductProps[];
  footer: FooterType;
  listMenu: MenuFloating;
  openMenu: boolean;
  handleOpenMenu: () => void;
  setLoading: (loading: boolean) => void;
};

export default function Home({ conteudo, destaques, setLoading }: HomeProps) {
  const [loadproducts, setloadProducts] = useState<ProductProps[]>(destaques);
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

export const getServerSideProps: GetServerSideProps = async () => {
  const destaque = mocklistProducts.filter(product => {
    if (product.highlighted) {
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
        highlighted: product.highlighted,
      };
    }
  });

  return {
    props: {
      conteudo: dataHome,
      destaques: destaque,
    },
  };
};
