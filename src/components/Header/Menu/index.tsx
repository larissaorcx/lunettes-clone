import { BotaoMenu, Logo, BotaoSacola, Menu, MenuContainer } from './style';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import ListMenu from './ListMenu';
import { Images, ImageLogo, ImageMenu } from '../../../pages';

interface MenuProps {
  logoHome: ImageLogo;
  menu: ImageMenu;
  sacola: Images;
  listMenu: any;
}

export default function MenuHeader({
  logoHome,
  menu,
  sacola,
  listMenu,
}: MenuProps) {
  const [openMenu, setOpenMenu] = useState(false);
  const [scroll, setScroll] = useState(false);

  function handleOpenMenu() {
    setOpenMenu(!openMenu);
  }

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
      <MenuContainer scroll={scroll}>
        <BotaoMenu type="button" onClick={() => handleOpenMenu()}>
          <Image
            alt={menu.alt}
            src={openMenu ? menu.iconClose.img : menu.img}
            width={42}
            height={26}
          />
        </BotaoMenu>
        <Logo scroll={scroll}>
          {scroll ? (
            <Image
              alt={logoHome.logoNegativo.alt}
              src={logoHome.logoNegativo.img}
              width={50}
              height={50}
              priority
            />
          ) : (
            <Image
              alt={logoHome.alt}
              src={logoHome.img}
              width={245.3}
              height={108.4}
              priority
            />
          )}
        </Logo>
        <BotaoSacola type="button">
          <Image alt={sacola.alt} src={sacola.img} width={58.8} height={55.7} />
        </BotaoSacola>
      </MenuContainer>
      {openMenu && <ListMenu listMenu={listMenu} />}
    </Menu>
  );
}
