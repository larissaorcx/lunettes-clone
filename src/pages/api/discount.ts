import { ProductProps } from '../produtos/[...slug]';

export type DiscountProps = {
  produtos: ProductProps[];
};

export default function discount({ produtos }: DiscountProps) {
  const prod = produtos.map(product => {
    if (product.discount > 0) {
      const price = product.price;
      const porcent = product.discount / 100;
      const finalprice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price - price * porcent);

      return { ...product, formatedPrice: finalprice };
    } else {
      return product;
    }
  });

  return prod;
}
