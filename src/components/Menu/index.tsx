import {
  BotaoMenu,
  Logo,
  BotaoSacola,
  Menu,
  MenuContainer,
  ContadorItemBag,
  BotaoMenuClose,
  BotaoSacolaClose,
} from './style';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import ListMenu from '../ListMenu';
import { Images, ImageLogo, ImageMenu, MenuFloating } from '../../types';
import { useCart } from '../../hooks/useCart';
import Bag from '../Carrinho/bag';
import { useScroll } from '../../hooks/ProviderscrollPage';
import { useRouter } from 'next/router';

interface MenuProps {
  logoHome: ImageLogo;
  menu: ImageMenu;
  sacola: Images;
  listMenu: MenuFloating;
  openMenu: boolean | null;
  setOpenMenu: (arg0: boolean) => void;
}

export default function MenuHeader({
  logoHome,
  menu,
  sacola,
  listMenu,
  openMenu,
  setOpenMenu,
}: MenuProps) {
  const [scroll, setScroll] = useState(false);
  // const { openMenu, setOpenMenu } = useScroll();

  function handleOpenMenu() {
    setOpenMenu(!openMenu);
  }

  const { openBag, setOpenBag, cart } = useCart();

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

  const router = useRouter();

  return (
    <Menu scroll={scroll} openMenu={openMenu} openBag={openBag}>
      <MenuContainer
        scroll={scroll}
        openMenu={openMenu}
        openBag={openBag}
        inHome={router.pathname === '/'}
      >
        {openMenu ? (
          <BotaoMenuClose
            openBag={openBag}
            openMenu={openMenu}
            type="button"
            onClick={() => handleOpenMenu()}
          >
            <Image
              alt={menu.alt}
              src={menu.iconClose.img}
              width={30}
              height={30}
            />
          </BotaoMenuClose>
        ) : (
          <BotaoMenu
            openBag={openBag}
            openMenu={openMenu}
            type="button"
            onClick={() => handleOpenMenu()}
          >
            <Image alt={menu.alt} src={menu.img} width={30} height={20} />
          </BotaoMenu>
        )}

        <Logo scroll={scroll} openMenu={openMenu} openBag={openBag}>
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
              width={215.3}
              height={90.4}
            />
          )}
        </Logo>
        {openBag ? (
          <BotaoSacolaClose
            openMenu={openMenu}
            type="button"
            onClick={() => setOpenBag(false)}
            openBag={openBag}
          >
            <Image
              alt={menu.iconClose.alt}
              src={menu.iconClose.img}
              width={30}
              height={30}
            />
          </BotaoSacolaClose>
        ) : cart.length === 0 ? (
          <BotaoSacola type="button" openBag={openBag} openMenu={openMenu}>
            <Image alt={sacola.alt} src={sacola.img} width={30} height={30} />
          </BotaoSacola>
        ) : (
          <BotaoSacola
            type="button"
            openMenu={openMenu}
            onClick={() => {
              setOpenBag(true);
            }}
            openBag={!openMenu}
          >
            <Image alt={sacola.alt} src={sacola.img} width={30} height={30} />
            <ContadorItemBag scroll={scroll} openBag={openBag}>
              {cart.length}
            </ContadorItemBag>
          </BotaoSacola>
        )}
      </MenuContainer>
      {openMenu ? (
        <ListMenu
          listMenu={listMenu}
          handleOpenMenu={handleOpenMenu}
          openMenu={openMenu}
          scroll={scroll}
        />
      ) : (
        openBag && <Bag scroll={scroll} />
      )}
    </Menu>
  );
}
