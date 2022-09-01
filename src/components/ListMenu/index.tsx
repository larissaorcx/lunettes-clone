import {
  Button,
  ListMenuContainer,
  ContainerCagtegories,
  ButtonHome,
  ListCategory,
  ContainerCategory,
  TitleCategory,
} from './style';
import Image from 'next/image';
import { MenuFloating } from '../../pages/types';
import { useRouter } from 'next/router';

interface ListMenuProps {
  listMenu: MenuFloating;
  handleOpenMenu: () => void;
}

export default function ListMenu({ listMenu, handleOpenMenu }: ListMenuProps) {
  const router = useRouter();

  return (
    <ListMenuContainer>
      <ButtonHome
        type="button"
        onClick={() => {
          router.push('/');
          handleOpenMenu();
        }}
      >
        {listMenu.buttonHome}
      </ButtonHome>
      <ContainerCagtegories>
        <Button
          type="button"
          onClick={() => {
            router.push('/produtos/grau');
            handleOpenMenu();
          }}
        >
          {listMenu.grau.title}
        </Button>
        <ContainerCategory>
          {listMenu.grau.category.map((categories, index) => (
            <ListCategory
              key={categories.title}
              position={index + 2}
              onClick={() => {
                router.push(`/produtos/grau/${categories.title}`);
                handleOpenMenu();
              }}
            >
              <Image
                alt={categories.alt}
                src={categories.img}
                width={150}
                height={50}
              />
              <TitleCategory>{categories.title}</TitleCategory>
            </ListCategory>
          ))}
        </ContainerCategory>
      </ContainerCagtegories>
      <ContainerCagtegories>
        <Button
          type="button"
          onClick={() => {
            router.push('/produtos/solar');
            handleOpenMenu();
          }}
        >
          {listMenu.solar.title}
        </Button>
        <ContainerCategory>
          {listMenu.solar.category.map((categories, index) => (
            <ListCategory
              key={categories.title}
              position={index + 2}
              onClick={() => {
                router.push(`/produtos/solar/${categories.title}`);
                handleOpenMenu();
              }}
            >
              <Image
                alt={categories.alt}
                src={categories.img}
                width={150}
                height={50}
              />
              <TitleCategory>{categories.title}</TitleCategory>
            </ListCategory>
          ))}
        </ContainerCategory>
      </ContainerCagtegories>
    </ListMenuContainer>
  );
}
