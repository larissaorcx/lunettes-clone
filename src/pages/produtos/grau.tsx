import InternalBackground from '../../components/InternalBackground';
import { HeaderType } from '../types';
import {
  Caminho,
  Container,
  Titulo,
  Simbolo,
  ContainerButton,
  ButtonFilterModelo,
  ButtonFilterPreco,
  ContainerCaminho,
} from './style';
import dataHome from '../../api/mockHome';
import { GetServerSideProps } from 'next';
import ListProducts from '../../components/ListProducts';
import ColorFilter from '../../components/Filters/ColorFilter';

interface ProductsProps {
  background: HeaderType;
}

export default function Products({ background }: ProductsProps) {
  return (
    <>
      <InternalBackground background={background} height="200px" />
      <Container>
        <ContainerCaminho>
          <Caminho>Home </Caminho>
          <Simbolo>&gt; </Simbolo>
          <Caminho>Grau </Caminho>
        </ContainerCaminho>
        <Titulo>Grau</Titulo>
      </Container>
      <ContainerButton>
        <ColorFilter />
        <ButtonFilterModelo>Modelos</ButtonFilterModelo>
        <ButtonFilterPreco>Preços</ButtonFilterPreco>
      </ContainerButton>
      <ListProducts />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      background: dataHome.header,
    },
  };
};
