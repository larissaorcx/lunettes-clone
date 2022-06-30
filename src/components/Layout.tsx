import Footer from './Footer';
import Header from '../components/Header';

import { FooterType, HeaderType, Menu, MenuFloating } from '../pages/types';

import { ReactNode, useEffect, useState } from 'react';
import mockHome from '../api/mockHome';
import mockListMenu from '../components/Header/Menu/ListMenu/mockListMenu';
import mockFooter from '../components/Footer/mockFooter';
import Loading from './Loading/Loading';
import MenuHeader from './Header/Menu';

type LayoutProps = {
  openMenu: boolean;
  handleOpenMenu: () => void;
  children: ReactNode;
};

export default function Layout({
  openMenu,
  handleOpenMenu,
  children,
}: LayoutProps) {
  const [conteudoHeader, setConteudoHeader] = useState<HeaderType>(
    {} as HeaderType
  );
  const [conteudoMenu, setConteudoMenu] = useState<Menu>({} as Menu);
  const [conteudoFloatingMenu, setConteudoFloatingMenu] =
    useState<MenuFloating>({} as MenuFloating);
  const [conteudoFooter, setConteudoFooter] = useState<FooterType>(
    {} as FooterType
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadLayout() {
      const header = await mockHome.header;
      const menuFloating = await mockListMenu;
      const footer = await mockFooter;

      setConteudoHeader(header);
      setConteudoMenu(header);
      setConteudoFloatingMenu(menuFloating);
      setConteudoFooter(footer);
      setLoading(false);
    }

    loadLayout();
  }, []);

  if (Object.entries(conteudoHeader).length === 0) {
    return null;
  }

  return (
    <>
      <MenuHeader
        logoHome={conteudoMenu.logoHome}
        menu={conteudoMenu.menu}
        sacola={conteudoMenu.sacola}
        listMenu={conteudoFloatingMenu}
        openMenu={openMenu}
        handleOpenMenu={handleOpenMenu}
      />
      <Header imgBackground={conteudoHeader.imgBackground} />
      {children}
      <Footer
        hastag={conteudoFooter.hastag}
        swiper={conteudoFooter.swiper}
        info={conteudoFooter.info}
      />
    </>
  );
}

// import Footer from './Footer';
// import Header from '../components/Header';

// import { FooterType, HeaderType, MenuFloating } from '../pages/types';

// import { ReactNode, useEffect, useState } from 'react';
// import mockHome from '../api/mockHome';
// import mockListMenu from '../components/Header/Menu/ListMenu/mockListMenu';
// import mockFooter from '../components/Footer/mockFooter';
// import Loading from './Loading/Loading';

// type LayoutProps = {
//   openMenu: boolean;
//   handleOpenMenu: () => void;
//   children: ReactNode;
// };

// export default function Layout({
//   openMenu,
//   handleOpenMenu,
//   children,
// }: LayoutProps) {
//   const [conteudoHeader, setConteudoHeader] = useState<HeaderType>(
//     {} as HeaderType
//   );
//   const [conteudoMenu, setConteudoMenu] = useState<MenuFloating>(
//     {} as MenuFloating
//   );
//   const [conteudoFooter, setConteudoFooter] = useState<FooterType>(
//     {} as FooterType
//   );
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function loadLayout() {
//       const header = await mockHome.header;
//       const menu = await mockListMenu;
//       const footer = await mockFooter;

//       setConteudoHeader(header);
//       setConteudoMenu(menu);
//       setConteudoFooter(footer);
//       setLoading(false);
//     }

//     loadLayout();
//   }, []);

//   if (Object.entries(conteudoHeader).length === 0) {
//     return null;
//   }

//   return (
//     <>
//       <Header
//         imgBackground={conteudoHeader.imgBackground}
//         backgroundMobile={conteudoHeader.backgroundMobile}
//         logoHome={conteudoHeader.logoHome}
//         menu={conteudoHeader.menu}
//         sacola={conteudoHeader.sacola}
//         listMenu={conteudoMenu}
//         openMenu={openMenu}
//         handleOpenMenu={handleOpenMenu}
//       />
//       {children}
//       <Footer
//         hastag={conteudoFooter.hastag}
//         swiper={conteudoFooter.swiper}
//         info={conteudoFooter.info}
//       />
//     </>
//   );
// }
