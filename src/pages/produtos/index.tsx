import { GetServerSideProps, GetStaticProps } from 'next';
import Filtrar from '../../components/Filters';
import InternalBackground from '../../components/InternalBackground';
import ListProducts, { ProdDetalhe } from '../../components/ListProducts';
import { HeaderType } from '../../types';
import dataHome from '../api/mockHome';
import { createClient } from '../../../prismicio';

import { useEffect } from 'react';
import { useFilter } from '../../hooks/useFilter';

interface AllProductsProps {
  products: ProdDetalhe[];
  productsPrismic: any;
  background: HeaderType;
}

export default function AllProducts({
  products,
  background,
}: AllProductsProps) {
  const { setBackupProd, produtoFiltered } = useFilter();

  useEffect(() => {
    setBackupProd(products);
  }, []);
  return (
    <>
      <InternalBackground background={background} height="200px" />
      <Filtrar products={products} />
      {produtoFiltered.length === 0 ? (
        <ListProducts products={products} />
      ) : (
        <ListProducts products={produtoFiltered} />
      )}
    </>
  );
}
export const getServerSideProps: GetServerSideProps = async ({
  previewData,
  query,
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
