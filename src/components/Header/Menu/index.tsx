import { BotaoMenu, Logo, BotaoSacola, Menu, MenuContainer } from './style';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import ListMenu from './ListMenu';
import {
  Images,
  ImageLogo,
  ImageMenu,
  MenuFloating,
} from '../../../pages/types';

interface MenuProps {
  logoHome: ImageLogo;
  menu: ImageMenu;
  sacola: Images;
  listMenu: MenuFloating;
  openMenu: boolean | null;
  handleOpenMenu: () => void;
}

export default function MenuHeader({
  logoHome,
  menu,
  sacola,
  listMenu,
  openMenu,
  handleOpenMenu,
}: MenuProps) {
  const [scroll, setScroll] = useState(false);

  const handleScrollMenu = useCallback(() => {
    if (
      document.body.scrollTop > 75 ||
      document.documentElement.scrollTop > 75
    ) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScrollMenu);
    return () => {
      window.removeEventListener('scroll', handleScrollMenu);
    };
  }, [handleScrollMenu]);

  return (
    <Menu>
      <MenuContainer scroll={scroll} openMenu={openMenu}>
        <BotaoMenu
          type="button"
          onClick={() => handleOpenMenu()}
          openMenu={openMenu}
        >
          <Image
            alt={menu.alt}
            src={openMenu ? menu.iconClose.img : menu.img}
            width={openMenu ? 32 : 42}
            height={openMenu ? 32 : 26}
          />
        </BotaoMenu>
        <Logo scroll={scroll} openMenu={openMenu}>
          {scroll ? (
            <Image
              alt={logoHome.logoNegativo.alt}
              src={logoHome.logoNegativo.img}
              width={50}
              height={50}
            />
          ) : (
            <Image
              alt={logoHome.alt}
              src={logoHome.img}
              width={245.3}
              height={108.4}
            />
          )}
        </Logo>
        <BotaoSacola type="button">
          {openMenu ? (
            ''
          ) : (
            <Image
              alt={sacola.alt}
              src={sacola.img}
              width={58.8}
              height={55.7}
            />
          )}
        </BotaoSacola>
      </MenuContainer>
      <ListMenu listMenu={listMenu} />
    </Menu>
  );
}
