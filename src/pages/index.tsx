import Destaques, { Products } from '../components/Destaques';

import dataHome from '../api/mockHome';
import { useState } from 'react';
import { GetServerSideProps } from 'next';
import config from '../components/Destaques/dataDestaques';
import { HeaderType, AboutType, FooterType, MenuFloating } from './types';
import About from '../components/Contatos';
import { Background } from '../../public/styles/backgroundStyle';

type HomeProps = {
  conteudo: {
    header: HeaderType;
    about: AboutType;
  };
  destaques: Products[];
  footer: FooterType;
  listMenu: MenuFloating;
  openMenu: boolean;
  handleOpenMenu: () => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

export default function Home({
  conteudo,
  destaques,
  loading,
  setLoading,
}: HomeProps) {
  const [destaque] = useState(destaques);

  return (
    <>
      <Background backgroundImages={conteudo.header} />
      <About
        atendimento={conteudo.about.atendimento}
        text={conteudo.about.text}
        aboutAtendimento={conteudo.about.aboutAtendimento}
      />
      {!!destaque.length && (
        <Destaques
          config={destaque}
          loading={loading}
          setLoading={setLoading}
        />
      )}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      conteudo: dataHome,
      destaques: config,
    },
  };
};
