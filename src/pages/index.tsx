import Destaques, { Products } from '../components/Destaques';

import dataHome from '../api/mockHome';
import { useState } from 'react';
import { GetServerSideProps } from 'next';
import config from '../components/Destaques/dataDestaques';
import { HeaderType, AboutType, FooterType, MenuFloating } from './types';
import About from '../components/Contatos';

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

// import Destaques, { Products } from '../components/Destaques';

// import dataHome from '../api/mockHome';
// import { useState } from 'react';
// import { GetServerSideProps } from 'next';
// import config from '../components/Destaques/dataDestaques';
// import data from '../components/Footer/mockFooter';
// import dataListMenu from '../components/Header/Menu/ListMenu/mockListMenu';
// import { HeaderType, AboutType, FooterType, MenuFloating } from './types';
// import Header from '../components/Header';
// import About from '../components/Contatos';
// import Footer from '../components/Footer';

// type HomeProps = {
//   conteudo: {
//     header: HeaderType;
//     about: AboutType;
//   };
//   destaques: Products[];
//   footer: FooterType;
//   listMenu: MenuFloating;
//   openMenu: boolean;
//   handleOpenMenu: () => void;
// };

// export default function Home({
//   conteudo,
//   destaques,
//   footer,
//   listMenu,
//   openMenu,
//   handleOpenMenu,
// }: HomeProps) {
//   const [destaque] = useState(destaques);

//   return (
//     <>
//       <Header
//         imgBackground={conteudo.header.imgBackground}
//         backgroundMobile={conteudo.header.backgroundMobile}
//         logoHome={conteudo.header.logoHome}
//         menu={conteudo.header.menu}
//         sacola={conteudo.header.sacola}
//         listMenu={listMenu}
//         openMenu={openMenu}
//         handleOpenMenu={handleOpenMenu}
//       />
//       <About
//         atendimento={conteudo.about.atendimento}
//         text={conteudo.about.text}
//         aboutAtendimento={conteudo.about.aboutAtendimento}
//       />
//       {!!destaque.length && <Destaques config={destaque} />}
//       <Footer
//         hastag={footer.hastag}
//         swiper={footer.swiper}
//         info={footer.info}
//       />
//     </>
//   );
// }

// export const getServerSideProps: GetServerSideProps = async () => {
//   return {
//     props: {
//       conteudo: dataHome,
//       destaques: config,
//       footer: data,
//       listMenu: dataListMenu,
//     },
//   };
// };
