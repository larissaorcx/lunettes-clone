import { useEffect, useState } from 'react';
import { ProductProps } from '../../pages/produtos/[...slug]';
import Produto from '../Product/Produto';

import { ContainerProducts } from './style';

import { DetailsProps, AssociatedProps } from '../../pages/detalhes/[slug]';

export interface ProdDetalhe extends ProductProps {
  description: string;
  details: DetailsProps;
  associated: AssociatedProps[];
}

export interface ListProductsProps {
  products: ProdDetalhe[];
}

export default function ListProducts({ products }: ListProductsProps) {
  const [loadproducts, setloadProducts] = useState<ProdDetalhe[]>(products);

  useEffect(() => {
    async function loadProducts() {
      setloadProducts(products);
    }
    loadProducts();
  }, [products]);

  return (
    <ContainerProducts>
      {loadproducts.map(product => (
        <Produto product={product} key={product._id} />
      ))}
    </ContainerProducts>
  );
}
