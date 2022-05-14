import Contatos from '../components/Contatos';
import Destaques, { Products } from '../components/Destaques';
import Footer from '../components/Footer';
import Header from '../components/Header';
import config from '../components/Destaques/config';
import { useEffect, useState } from 'react';

type HomeProps = {
  destaques: Products[];
};

export default function Home({ destaques }: HomeProps) {
  return (
    <>
      <Header />
      <Contatos />
      {!!destaques.length && <Destaques config={destaques} />}
      <Footer />
    </>
  );
}

export function getServerSideProps() {
  return {
    props: {
      destaques: config,
    },
  };
}
