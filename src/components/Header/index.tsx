import { Images, ImageLogo, ImageMenu } from '../../pages';
import MenuHeader from './Menu';
import { BackgroundImg } from './style';

interface HeaderProps {
  imgBackground: Images;
  backgroundMobile: Images;
  logoHome: ImageLogo;
  menu: ImageMenu;
  sacola: Images;
  listMenu: any;
  openMenu: boolean;
  handleOpenMenu: () => void;
}

export default function Header({
  imgBackground,
  backgroundMobile,
  logoHome,
  menu,
  sacola,
  listMenu,
  openMenu,
  handleOpenMenu,
}: HeaderProps) {
  return (
    <BackgroundImg
      imgBackground={imgBackground}
      backgroundMobile={backgroundMobile}
    >
      <MenuHeader
        logoHome={logoHome}
        menu={menu}
        sacola={sacola}
        listMenu={listMenu}
        openMenu={openMenu}
        handleOpenMenu={handleOpenMenu}
      />
    </BackgroundImg>
  );
}
