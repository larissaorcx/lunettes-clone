import MenuHeader from './Menu';
import { BackgroundImg } from './style';

export default function Header({
  imgBackgroung,
  logoHome,
  menu,
  sacola,
  ListMenu,
}: any) {
  return (
    <BackgroundImg imgBackgroung={imgBackgroung}>
      <MenuHeader
        logoHome={logoHome}
        menu={menu}
        sacola={sacola}
        ListMenu={ListMenu}
      />
    </BackgroundImg>
  );
}
