import About from '../components/Contatos';
import Destaques, { Products } from '../components/Destaques';
import Footer from '../components/Footer';
import Header from '../components/Header';
import dataHome from '../api/mockHome';
import { useState } from 'react';
import { GetStaticProps } from 'next';
import config from '../components/Destaques/dataDestaques';
import data from '../components/Footer/dataFooter';

type HomeProps = {
  conteudo: {
    header: Header;
    about: About;
  };
  destaques: Products[];
  footer: Footer;
};

type Image = {
  img: string;
  alt: string;
};

type Icon = {
  img: string;
  alt: string;
  title: string;
  description: string;
};

type Text = {
  title: string;
  description: string;
};

type Oculos = {
  title: string;
  category: string[];
};

type Media = {
  title: string;
  itens: Itens[];
};

type Itens = {
  img: string;
  alt: string;
  link: string;
};

type Header = {
  imgBackgroung: Image;
  logo: Image;
  menu: Image;
  sacola: Image;
};

type About = {
  atendimento: Image;
  text: Text;
  aboutAtendimento: {
    iconCoracao: Icon;
    iconWhats: Icon;
    iconAgenda: Icon;
  };
};

type Footer = {
  hastag: Text;
  swiper: Image[];
  info: {
    logo: Image;
    solar: Oculos;
    grau: Oculos;
    adress: {
      street: string;
      CNPJ: string;
      whatsapp: string;
      email: string;
    };
    socialMedia: Media;
    termos: {
      text: string;
    };
  };
};

export default function Home({ conteudo, destaques, footer }: HomeProps) {
  const [destaque] = useState(destaques); // Por que temos esse use state ?

  return (
    <>
      <Header />
      <About
        atendimento={conteudo.about.atendimento}
        text={conteudo.about.text}
        aboutAtendimento={conteudo.about.aboutAtendimento}
      />
      {!!destaque.length && <Destaques config={destaque} />}
      <Footer
        hastag={footer.hastag}
        swiper={footer.swiper}
        info={footer.info}
      />
    </>
  );
}

export const getServerSideProps: GetStaticProps = async () => {
  return {
    props: {
      conteudo: dataHome,
      destaques: config,
      footer: data,
    },
  };
};
