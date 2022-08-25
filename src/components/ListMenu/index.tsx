import {
  Button,
  ListMenuContainer,
  ContainerCagtegories,
  ButtonHome,
  ListCategory,
} from './style';
import Image from 'next/image';
import { MenuFloating } from '../../pages/types';
import { useRouter } from 'next/router';

interface ListMenuProps {
  listMenu: MenuFloating;
}

export default function ListMenu({ listMenu }: ListMenuProps) {
  const router = useRouter();

  return (
    <ListMenuContainer>
      <ButtonHome type="button" onClick={() => router.push('/')}>
        {listMenu.buttonHome}
      </ButtonHome>
      <ContainerCagtegories>
        <Button
          type="button"
          onClick={() => {
            router.push('/produtos/grau');
          }}
        >
          {listMenu.grau.title}
        </Button>
        <ul>
          {listMenu.grau.category.map((categories, index) => (
            <ListCategory
              key={categories.title}
              position={index + 2}
              onClick={() => router.push('/produtos/grau')}
            >
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
        <Button type="button" onClick={() => router.push('/produtos/solar')}>
          {listMenu.solar.title}
        </Button>
        <ul>
          {listMenu.solar.category.map((categories, index) => (
            <ListCategory
              key={categories.title}
              position={index + 2}
              onClick={() => router.push('/produtos/solar')}
            >
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
