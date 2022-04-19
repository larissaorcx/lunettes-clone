import Image from 'next/image';
import style from './header.module.scss';

export default function Header() {
  return (
    <>
      <div className={style.header}>
        <div className={style.menu}>
          <button type="button">
            <Image
              alt="menu-categorias"
              src="/menu.png"
              width={42}
              height={26}
            />
          </button>
        </div>
        <div className={style.logo}>
          <Image
            alt="logo"
            src="/Logo-Lunettes.png"
            width={245.3}
            height={108.4}
          />
        </div>
        <div className={style.sacola}>
          <button type="button">
            <Image alt="sacola" src="/sacola.png" width={58.8} height={55.7} />
          </button>
        </div>
      </div>
    </>
  );
}
