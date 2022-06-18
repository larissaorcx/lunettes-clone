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
  listMenu: any;
  openMenu: boolean;
  handleOpenMenu: () => void;
};

export type Images = {
  img: string;
  alt: string;
};

export type ImageLogo = {
  img: string;
  alt: string;
  logoNegativo: {
    img: string;
    alt: string;
  };
};
export type ImageMenu = {
  img: string;
  alt: string;
  iconClose: {
    img: string;
    alt: string;
  };
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

export type ImagesCategories = {
  title: string;
  img: string;
  alt: string;
};

export interface Header {
  imgBackground: Images;
  backgroundMobile: Images;
  logoHome: ImageLogo;
  menu: ImageMenu;
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

export interface MenuFloating {
  buttonHome: string;
  grau: {
    title: string;
    category: ImagesCategories[];
  };
  solar: {
    title: string;
    category: ImagesCategories[];
  };
}

export default function Home({
  conteudo,
  destaques,
  footer,
  listMenu,
  openMenu,
  handleOpenMenu,
}: HomeProps) {
  const [destaque] = useState(destaques);

  return (
    <>
      <Header
        imgBackground={conteudo.header.imgBackground}
        backgroundMobile={conteudo.header.backgroundMobile}
        logoHome={conteudo.header.logoHome}
        menu={conteudo.header.menu}
        sacola={conteudo.header.sacola}
        listMenu={listMenu}
        openMenu={openMenu}
        handleOpenMenu={handleOpenMenu}
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
      listMenu: dataListMenu,
    },
  };
};
