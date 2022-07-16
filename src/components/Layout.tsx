import Footer from './Footer';
import Header from './InternalBackground';

import { FooterType, HeaderType, Menu, MenuFloating } from '../pages/types';

import { ReactNode, useEffect, useState } from 'react';
import mockHome from '../api/mockHome';
import mockListMenu from './ListMenu/mockListMenu';
import mockFooter from '../components/Footer/mockFooter';

import MenuHeader from './Menu';

type LayoutProps = {
  openMenu: boolean | null;
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

  useEffect(() => {
    async function loadLayout() {
      const header = await mockHome.header;
      const menuFloating = await mockListMenu;
      const footer = await mockFooter;

      setConteudoHeader(header);
      setConteudoMenu(header);
      setConteudoFloatingMenu(menuFloating);
      setConteudoFooter(footer);
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
      {/* <Header backgroundImages={conteudoHeader} setBackground={setBackground} /> */}
      {children}
      <Footer
        hastag={conteudoFooter.hastag}
        swiper={conteudoFooter.swiper}
        info={conteudoFooter.info}
      />
    </>
  );
}
