import { useEffect, useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { ProductProps } from '../../pages/produtos/[slug]';
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
} from './style';
import ListProductsImages from './CarroselListProducts/ListProductsImages';
import mocklistProducts from './mocklistProducts';
import { ContainerProducts } from './style';
import discount from '../../pages/api/discount';
import { useRouter } from 'next/router';

interface ListProductsProps {
  setLoading: (loading: boolean) => void;
}

export default function ListProducts({ setLoading }: ListProductsProps) {
  const router = useRouter();

  const [loadproducts, setloadProducts] = useState<ProductProps[]>(
    [] as ProductProps[]
  );

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      const produtos = await mocklistProducts;

      const productWithformatedPrice = discount({ produtos });

      setTimeout(() => {
        setloadProducts(productWithformatedPrice);

        setLoading(false);
      }, 1000);
    }
    loadProducts();
  }, []);

  return (
    <ContainerProducts>
      {loadproducts.map(product => (
        <Produto key={product._id}>
          {product.discount > 0 && (
            <PorcentDiscount>
              <TitleDiscount>{product.discount}%</TitleDiscount>
              <Text>OFF</Text>
            </PorcentDiscount>
          )}
          <ListProductsImages products={product.images} />
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
              <PriceWithDiscount>{product?.formatedPrice}</PriceWithDiscount>
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
