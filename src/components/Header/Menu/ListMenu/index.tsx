import {
  Button,
  ListMenuContainer,
  ContainerCagtegories,
  ButtonHome,
} from './style';
import Image from 'next/image';
import { MenuFloating } from '../../../../pages';

interface ListMenuProps {
  listMenu: MenuFloating;
}

export default function ListMenu({ listMenu }: ListMenuProps) {
  return (
    <ListMenuContainer>
      <ButtonHome type="button">{listMenu.buttonHome}</ButtonHome>
      <ContainerCagtegories>
        <Button type="button">{listMenu.grau.title}</Button>
        <ul>
          {listMenu.grau.category.map(categories => (
            <li key={categories.title}>
              <Image
                alt={categories.alt}
                src={categories.img}
                width={150}
                height={50}
              />
              <p>{categories.title}</p>
            </li>
          ))}
        </ul>
      </ContainerCagtegories>
      <ContainerCagtegories>
        <Button type="button">{listMenu.solar.title}</Button>
        <ul>
          {listMenu.solar.category.map((categories, index) => (
            <li key={categories.title}>
              <Image
                alt={categories.alt}
                src={categories.img}
                width={150}
                height={50}
              />
              <p>{categories.title}</p>
            </li>
          ))}
        </ul>
      </ContainerCagtegories>
    </ListMenuContainer>
  );
}
