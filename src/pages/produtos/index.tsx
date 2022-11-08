import { GetStaticProps } from 'next';
import Filtrar from '../../components/Filters';
import InternalBackground from '../../components/InternalBackground';
import ListProducts, { ProdDetalhe } from '../../components/ListProducts';
import mocklistProducts from '../../components/ListProducts/mocklistProducts';
import { HeaderType } from '../types';
import dataHome from '../api/mockHome';
import { createClient } from '../../../prismicio';

import * as prismicH from '@prismicio/helpers';

interface AllProductsProps {
  products: ProdDetalhe[];
  productsPrismic: any;
  background: HeaderType;
}

export default function AllProducts({
  products,
  background,
  productsPrismic,
}: AllProductsProps) {
  return (
    <>
      <InternalBackground background={background} height="200px" />
      <Filtrar products={products} />
      <ListProducts products={products} />
    </>
  );
}
export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });
  const productsPrismic = await client.getAllByType('produto');

  const products = productsPrismic.flatMap(prod => {
    let sub: string[] = [];

    prod.data.subcategories.forEach((subcat: any) =>
      sub.push(subcat.subcategory)
    );

    return {
      _id: prod.data.idproduct,
      subcategories: sub,
      price: prod.data.price,
      images: prod.data.images,
      productName: prod.data.productname,
      code: prod.data.code,
      isNewCollection: prod.data.isnewcollection,
      discount: prod.data.discount,
      category: prod.data.category,
      formatedPrice: prod.data.formatedprice,
    };
  });

  return {
    props: {
      background: dataHome.header,
      products,
      productsPrismic,
    },
  };
};
