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

export interface HeaderType {
  imgBackground: Images;
  // logoHome: ImageLogo;
  // menu: ImageMenu;
  // sacola: Images;
}

export interface AboutType {
  atendimento: Images;
  text: Text;
  aboutAtendimento: {
    iconCoracao: Icon;
    iconWhats: Icon;
    iconAgenda: Icon;
  };
}

export interface FooterType {
  hastag: Text;
  swiper: Images[];
  info: {
    logo: Images;
    solar: Oculos;
    grau: Oculos;
    contato: {
      title: string;
      adress: {
        street: string;
        cnpj: string;
        whatsapp: string;
        email: string;
      };
    };
    socialMedia: Media;
    termos: {
      text: string;
    };
  };
}

export interface Menu {
  logoHome: ImageLogo;
  menu: ImageMenu;
  sacola: Images;
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
