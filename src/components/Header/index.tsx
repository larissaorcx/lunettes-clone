import Image from 'next/image';
import { useState } from 'react';
import { HeaderContainer, BotaoMenu, Logo, BotaoSacola } from './style';

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  function handleOpenMenu() {
    return console.log('click');
  }
  return (
    <HeaderContainer>
      <BotaoMenu type="button" onClick={() => setOpenMenu(true)}>
        <Image alt="menu-categorias" src="/menu.png" width={42} height={26} />
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
        <Image alt="sacola" src="/sacola.png" width={58.8} height={55.7} />
      </BotaoSacola>
    </HeaderContainer>
  );
}
