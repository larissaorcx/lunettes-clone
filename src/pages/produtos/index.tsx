import { GetStaticProps } from 'next';
import Filtrar from '../../components/Filters';
import InternalBackground from '../../components/InternalBackground';
import ListProducts, { ProdDetalhe } from '../../components/ListProducts';
import mocklistProducts from '../../components/ListProducts/mocklistProducts';
import { HeaderType } from '../types';
import { ProductProps } from './[...slug]';
import dataHome from '../api/mockHome';
import { createClient } from '../../../prismicio';

interface AllProductsProps {
  products: ProdDetalhe[];
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
      <ListProducts products={products} />
    </>
  );
}
export const getStaticProps: GetStaticProps = async ({
  params,
  previewData,
}) => {
  const products = await mocklistProducts;
  const client = createClient({ previewData });
  // const productsPrismic = await client.getByUID(
  //   'products',
  //   params.uid // tipo personalizado params.uid
  // );

  console.log('params', params);
  console.log('previewData', previewData);

  return {
    props: {
      background: dataHome.header,
      products,
      // productsPrismic,
    },
  };
};
