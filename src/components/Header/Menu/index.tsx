import { BotaoMenu, Logo, BotaoSacola, Menu } from './style';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

export default function MenuHeader() {
  const [openMenu, setOpenMenu] = useState(false);
  const [scroll, setScroll] = useState(false);

  function handleOpenMenu() {
    return console.log('click');
  }

  const handleScrollMenu = useCallback(() => {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
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
    <Menu scroll={scroll}>
      <BotaoMenu type="button" onClick={() => handleOpenMenu()}>
        <Image
          alt="menu-categorias"
          src="/header/menu.png"
          width={42}
          height={26}
        />
      </BotaoMenu>
      <Logo scroll={scroll}>
        {scroll ? (
          <Image
            alt="logo"
            src="/header/logotipo-negativo.png"
            width={50}
            height={50}
            priority
          />
        ) : (
          <Image
            alt="logo"
            src="/header/Logo-Lunettes.png"
            width={245.3}
            height={108.4}
            priority
          />
        )}
      </Logo>
      <BotaoSacola type="button">
        <Image
          alt="sacola"
          src="/header/sacola.png"
          width={58.8}
          height={55.7}
        />
      </BotaoSacola>
    </Menu>
  );
}
