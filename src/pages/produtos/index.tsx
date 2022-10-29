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
  console.log('slice', productsPrismic);
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
      formatedprice: prod.data.formatedprice,
      associated: prod.data.associated,
      description: prod.data.description,
      details: {
        size: prod.data.size,
        material: prod.data.material,
        accessories: prod.data.accessories,
        front: prod.data.front,
        height: prod.data.height,
        hast: prod.data.hast,
        bridge: prod.data.bridge,
        warranty: prod.data.warranty,
        lens: prod.data.lens,
      },
    };
  });

  console.log('dataPrismic', products);

  return {
    props: {
      background: dataHome.header,
      products,
      productsPrismic,
    },
  };
};
