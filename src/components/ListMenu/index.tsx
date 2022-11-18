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
  openMenu: boolean | null;
  handleOpenMenu: () => void;
}

export default function ListMenu({
  listMenu,
  openMenu,
  handleOpenMenu,
}: ListMenuProps) {
  const router = useRouter();

  return (
    <ListMenuContainer>
      <ButtonHome
        type="button"
        openMenu={openMenu}
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
          openMenu={openMenu}
          onClick={() => {
            router.push({
              pathname: '/produtos/[sepa]',
              query: { sepa: '1', category: 'Grau' },
            });
            handleOpenMenu();
          }}
        >
          {listMenu.grau.title}
        </Button>
        <ContainerCategory>
          {listMenu.grau.category.map((categories, index) => (
            <ListCategory
              key={categories.title}
              openMenu={openMenu}
              position={index + 2}
              onClick={() => {
                router.push({
                  pathname: '/produtos/[sepa]',
                  query: {
                    sepa: '1',
                    category: 'Grau',
                    style: categories.title,
                  },
                });
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
          openMenu={openMenu}
          onClick={() => {
            router.push({
              pathname: '/produtos/[sepa]',
              query: { sepa: '1', category: 'Solar' },
            });
            handleOpenMenu();
          }}
        >
          {listMenu.solar.title}
        </Button>
        <ContainerCategory>
          {listMenu.solar.category.map((categories, index) => (
            <ListCategory
              key={categories.title}
              openMenu={openMenu}
              position={index + 2}
              onClick={() => {
                router.push({
                  pathname: '/produtos/[sepa]',
                  query: {
                    sepa: '1',
                    category: 'Solar',
                    style: categories.title,
                  },
                });
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
