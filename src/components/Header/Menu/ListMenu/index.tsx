import {
  Button,
  ListMenuContainer,
  ContainerCagtegories,
  ButtonHome,
  ListCategory,
} from './style';
import Image from 'next/image';
import { MenuFloating } from '../../../../pages/types';

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
          {listMenu.grau.category.map((categories, index) => (
            <ListCategory key={categories.title} position={index + 2}>
              <Image
                alt={categories.alt}
                src={categories.img}
                width={150}
                height={50}
              />
              <p>{categories.title}</p>
            </ListCategory>
          ))}
        </ul>
      </ContainerCagtegories>
      <ContainerCagtegories>
        <Button type="button">{listMenu.solar.title}</Button>
        <ul>
          {listMenu.solar.category.map((categories, index) => (
            <ListCategory key={categories.title} position={index + 2}>
              <Image
                alt={categories.alt}
                src={categories.img}
                width={150}
                height={50}
              />
              <p>{categories.title}</p>
            </ListCategory>
          ))}
        </ul>
      </ContainerCagtegories>
    </ListMenuContainer>
  );
}
