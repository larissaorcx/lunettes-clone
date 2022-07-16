import InternalBackground from '../../components/InternalBackground';
import { HeaderType } from '../types';
import {
  Caminho,
  Container,
  Titulo,
  Simbolo,
  ContainerButton,
  ButtonFilter,
} from './style';
import dataHome from '../../api/mockHome';
import { GetServerSideProps } from 'next';
import ListProducts from '../../components/ListProducts';

interface ProductsProps {
  background: HeaderType;
}

export default function Products({ background }: ProductsProps) {
  console.log('dados imagem: ', background);
  return (
    <>
      <InternalBackground background={background} height="200px" />
      <Container>
        <Caminho>Home </Caminho>
        <Simbolo>&gt; </Simbolo>
        <Caminho>Grau </Caminho>
      </Container>
      <Titulo>Grau</Titulo>
      <ContainerButton>
        <ButtonFilter>Cor</ButtonFilter>
        <ButtonFilter>Modelos</ButtonFilter>
        <ButtonFilter>Preços</ButtonFilter>
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
