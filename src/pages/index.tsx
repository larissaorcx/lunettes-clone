import About from '../components/Contatos';
import Destaques, { Products } from '../components/Destaques';
import Footer from '../components/Footer';
import Header from '../components/Header';
import dataHome from '../api/mockHome';
import { useState } from 'react';
import { GetServerSideProps } from 'next';
import config from '../components/Destaques/dataDestaques';
import data from '../components/Footer/mockFooter';
import dataListMenu from '../components/Header/Menu/ListMenu/mockListMenu';

type HomeProps = {
  conteudo: {
    header: Header;
    about: About;
  };
  destaques: Products[];
  footer: Footer;
  ListMenu: any;
};

export type Images = {
  img: string;
  alt: string;
};

export type Icon = {
  img: string;
  alt: string;
  title: string;
  description: string;
};

export type Text = {
  title: string;
  description: string;
};

export type Oculos = {
  title: string;
  category: string[];
};

export type Media = {
  title: string;
  itens: Itens[];
};

export type Itens = {
  img: string;
  alt: string;
  link: string;
};

export interface Header {
  imgBackgroung: Images;
  logo: Images;
  menu: Images;
  sacola: Images;
}

export interface About {
  atendimento: Images;
  text: Text;
  aboutAtendimento: {
    iconCoracao: Icon;
    iconWhats: Icon;
    iconAgenda: Icon;
  };
}

export interface Footer {
  hastag: Text;
  swiper: Images[];
  info: {
    logo: Images;
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
}

export default function Home({
  conteudo,
  destaques,
  footer,
  ListMenu,
}: HomeProps) {
  const [destaque] = useState(destaques);

  return (
    <>
      <Header
        imgBackgroung={conteudo.header.imgBackgroung}
        logoHome={conteudo.header.logo}
        menu={conteudo.header.menu}
        sacola={conteudo.header.sacola}
        ListMenu={ListMenu}
      />
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

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      conteudo: dataHome,
      destaques: config,
      footer: data,
      ListMenu: dataListMenu,
    },
  };
};
