import { BotaoMenu, Logo, BotaoSacola, Menu } from './style';
import Image from 'next/image';
import { useState } from 'react';

export default function MenuHeader() {
  const [openMenu, setOpenMenu] = useState(false);

  function handleOpenMenu() {
    return console.log('click');
  }
  return (
    <Menu>
      <BotaoMenu type="button" onClick={() => handleOpenMenu()}>
        <Image
          alt="menu-categorias"
          src="/header/menu.png"
          width={42}
          height={26}
        />
      </BotaoMenu>
      <Logo>
        <Image
          alt="logo"
          src="/Logo-Lunettes.png"
          width={245.3}
          height={108.4}
          priority
        />
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
