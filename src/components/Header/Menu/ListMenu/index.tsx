import {
  Button,
  ListMenuContainer,
  ContainerButtonSol,
  ContainerButtonGrau,
  ButtonHome,
} from './style';
import Image from 'next/image';

export default function ListMenu({ listMenu }: any) {
  return (
    <ListMenuContainer>
      <ButtonHome type="button">{listMenu.buttonHome}</ButtonHome>
      <ContainerButtonGrau>
        <Button type="button">{listMenu.grau.title}</Button>
        {listMenu.grau.category.map((categories: object) => (
          <ul key={categories.title}>
            <li>
              <Image
                alt={categories.alt}
                src={categories.img}
                width={150}
                height={50}
              />
              <span>{categories.title}</span>
            </li>
          </ul>
        ))}
      </ContainerButtonGrau>
      <ContainerButtonSol>
        <Button type="button">{listMenu.solar.title}</Button>
        {listMenu.solar.category.map((categories: object) => (
          <ul key={categories.title}>
            <li>
              <Image
                alt={categories.alt}
                src={categories.img}
                width={150}
                height={50}
              />
              <span>{categories.title}</span>
            </li>
          </ul>
        ))}
      </ContainerButtonSol>
    </ListMenuContainer>
  );
}
