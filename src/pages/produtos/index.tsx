import { GetStaticProps } from 'next';
import Filtrar from '../../components/Filters';
import InternalBackground from '../../components/InternalBackground';
import ListProducts from '../../components/ListProducts';
import mocklistProducts from '../../components/ListProducts/mocklistProducts';
import { HeaderType } from '../types';
import { ProductProps } from './[...slug]';
import dataHome from '../api/mockHome';

interface AllProductsProps {
  products: ProductProps[];
  setLoading: (loading: boolean) => void;
  background: HeaderType;
}

export default function AllProducts({
  products,
  setLoading,
  background,
}: AllProductsProps) {
  return (
    <>
      <InternalBackground background={background} height="200px" />
      <Filtrar products={products} />
      <ListProducts setLoading={setLoading} products={products} />
    </>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const products = await mocklistProducts;

  return {
    props: {
      background: dataHome.header,
      products,
    },
  };
};
