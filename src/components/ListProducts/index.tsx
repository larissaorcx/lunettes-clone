import { useEffect, useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { ProductProps } from '../../pages/produtos/[...slug]';
import {
  BotaoReserva,
  CodigoProduto,
  InfosProduto,
  NomeProduto,
  Preco,
  Produto,
  TextoBotao,
  NewCollection,
  PriceWithDiscount,
  ContainerPrecos,
  PorcentDiscount,
  Text,
  TitleDiscount,
  ImgDiscount,
} from './style';
import ListProductsImages from './CarroselListProducts/ListProductsImages';
import { ContainerProducts } from './style';

import { useRouter } from 'next/router';

interface ListProductsProps {
  products: ProductProps[];
}

export default function ListProducts({ products }: ListProductsProps) {
  const router = useRouter();

  const [loadproducts, setloadProducts] = useState<ProductProps[]>(products);

  useEffect(() => {
    async function loadProducts() {
      setloadProducts(products);
    }
    loadProducts();
  }, [products]);

  return (
    <ContainerProducts>
      {loadproducts.map(product => (
        <Produto key={product._id}>
          {product.discount > 0 ? (
            <ImgDiscount>
              <PorcentDiscount>
                <TitleDiscount>{`${product.discount}%`}</TitleDiscount>
                <Text>OFF</Text>
              </PorcentDiscount>
              <ListProductsImages products={product.images} />
            </ImgDiscount>
          ) : (
            <ListProductsImages products={product.images} />
          )}

          <InfosProduto>
            <NomeProduto>{product.productName}</NomeProduto>
            {product.isNewCollection && (
              <NewCollection>Nova coleção</NewCollection>
            )}
          </InfosProduto>
          <CodigoProduto>{product.code}</CodigoProduto>
          <ContainerPrecos>
            <Preco>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(product.price)}
            </Preco>
            {product.discount > 0 && (
              <PriceWithDiscount>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(
                  product.price - product.price * (product.discount / 100)
                )}
              </PriceWithDiscount>
            )}
          </ContainerPrecos>
          <BotaoReserva
            type="button"
            onClick={() => router.push(`/detalhes/${product.productName}`)}
          >
            <FaRegHeart />
            <TextoBotao>Ver mais</TextoBotao>
          </BotaoReserva>
        </Produto>
      ))}
    </ContainerProducts>
  );
}
