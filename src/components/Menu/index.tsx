import { BotaoMenu, Logo, BotaoSacola, Menu, MenuContainer } from './style';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import ListMenu from '../ListMenu';
import { Images, ImageLogo, ImageMenu, MenuFloating } from '../../pages/types';
import { useCart } from '../hooks/useCart';
import Bag from '../Carrinho/bag';

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

  return (
    <Menu scroll={scroll} openMenu={openMenu} openBag={openBag}>
      <MenuContainer scroll={scroll} openMenu={openMenu} openBag={openBag}>
        <BotaoMenu
          openBag={openBag}
          type="button"
          onClick={() => handleOpenMenu()}
          openMenu={openMenu}
        >
          {openMenu ? (
            <Image
              alt={menu.alt}
              src={menu.iconClose.img}
              width={30}
              height={30}
            />
          ) : openBag ? (
            ''
          ) : (
            <Image alt={menu.alt} src={menu.img} width={30} height={20} />
          )}
        </BotaoMenu>
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
              width={245.3}
              height={108.4}
            />
          )}
        </Logo>
        {openMenu ? (
          ''
        ) : openBag ? (
          <BotaoSacola type="button" onClick={() => setOpenBag(false)}>
            <Image
              alt={menu.iconClose.alt}
              src={menu.iconClose.img}
              width={30}
              height={30}
            />
          </BotaoSacola>
        ) : cart.length === 0 ? (
          <BotaoSacola type="button">
            <Image alt={sacola.alt} src={sacola.img} width={30} height={30} />
          </BotaoSacola>
        ) : (
          <BotaoSacola type="button" onClick={() => setOpenBag(true)}>
            <Image alt={sacola.alt} src={sacola.img} width={30} height={30} />
          </BotaoSacola>
        )}
      </MenuContainer>
      {openMenu ? (
        <ListMenu listMenu={listMenu} handleOpenMenu={handleOpenMenu} />
      ) : (
        openBag && <Bag />
      )}
    </Menu>
  );
}
