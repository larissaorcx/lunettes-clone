import Footer from './Footer';
import Header from './InternalBackground';

import { FooterType, HeaderType, Menu, MenuFloating } from '../pages/types';

import { ReactNode, useEffect, useState } from 'react';
import mockHome from '../pages/api/mockHome';
import mockListMenu from './ListMenu/mockListMenu';
import mockFooter from '../components/Footer/mockFooter';

import MenuHeader from './Menu';

type LayoutProps = {
  children: ReactNode;
  openMenu: boolean | null;
  setOpenMenu: (arg0: boolean) => void;
};

export default function Layout({
  openMenu,
  children,
  setOpenMenu,
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
        setOpenMenu={setOpenMenu}
      />
      {children}
      <Footer
        hastag={conteudoFooter.hastag}
        swiper={conteudoFooter.swiper}
        info={conteudoFooter.info}
      />
    </>
  );
}
