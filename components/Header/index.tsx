import Image from 'next/image';
import { useState } from 'react';
import { HeaderContainer } from './style';

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  function handleOpenMenu() {
    return console.log('click');
  }
  return (
    <HeaderContainer>
      <div className="menu">
        <button type="button" onClick={() => setOpenMenu(true)}>
          <Image alt="menu-categorias" src="/menu.png" width={42} height={26} />
        </button>
      </div>
      <div className="logo">
        <Image
          alt="logo"
          src="/Logo-Lunettes.png"
          width={245.3}
          height={108.4}
        />
      </div>
      <div className="sacola">
        <button type="button">
          <Image alt="sacola" src="/sacola.png" width={58.8} height={55.7} />
        </button>
      </div>
    </HeaderContainer>
  );
}
