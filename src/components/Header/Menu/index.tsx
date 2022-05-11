import { BotaoMenu, Logo, BotaoSacola, Menu, MenuContainer } from './style';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import ListMenu from './ListMenu';

export default function MenuHeader() {
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
            alt="menu-categorias"
            src={
              openMenu ? '/assets/oculos/fecha.png' : '/assets/header/menu.png'
            }
            width={42}
            height={26}
          />
        </BotaoMenu>
        <Logo scroll={scroll}>
          {scroll ? (
            <Image
              alt="logo"
              src="/assets/header/logotipo-negativo.png"
              width={50}
              height={50}
              priority
            />
          ) : (
            <Image
              alt="logo"
              src="/assets/header/Logo-Lunettes.png"
              width={245.3}
              height={108.4}
              priority
            />
          )}
        </Logo>
        <BotaoSacola type="button">
          <Image
            alt="sacola"
            src="/assets/header/sacola.png"
            width={58.8}
            height={55.7}
          />
        </BotaoSacola>
      </MenuContainer>
      {openMenu && <ListMenu />}
    </Menu>
  );
}
