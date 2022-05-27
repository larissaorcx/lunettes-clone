import { Images, ImageLogo, ImageMenu } from '../../pages';
import MenuHeader from './Menu';
import { BackgroundImg } from './style';

interface HeaderProps {
  imgBackground: Images;
  logoHome: ImageLogo;
  menu: ImageMenu;
  sacola: Images;
  listMenu: any;
}

export default function Header({
  imgBackground,
  logoHome,
  menu,
  sacola,
  listMenu,
}: HeaderProps) {
  return (
    <BackgroundImg imgBackground={imgBackground}>
      <MenuHeader
        logoHome={logoHome}
        menu={menu}
        sacola={sacola}
        listMenu={listMenu}
      />
    </BackgroundImg>
  );
}
