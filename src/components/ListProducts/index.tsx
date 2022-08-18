import { useEffect, useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { ProductProps } from '../../pages/produtos/grau';
import {
  BotaoReserva,
  CodigoProduto,
  InfosProduto,
  NomeProduto,
  Preço,
  Produto,
  TextoBotao,
  NewCollection,
} from './style';
import ListProductsImages from './CarroselListProducts/ListProductsImages';
import mocklistProducts from './mocklistProducts';
import { ContainerProducts } from './style';

interface ListProductsProps {
  setLoading: (loading: boolean) => void;
}

export default function ListProducts({ setLoading }: ListProductsProps) {
  const [loadproducts, setloadProducts] = useState<ProductProps[]>(
    [] as ProductProps[]
  );

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      const produtos = await mocklistProducts;

      setTimeout(() => {
        setloadProducts(produtos);

        setLoading(false);
      }, 3000);
    }
    loadProducts();
  }, []);
  return (
    <ContainerProducts>
      {loadproducts.map((product: ProductProps) => (
        <Produto key={product._id}>
          <ListProductsImages products={product.images} />
          <InfosProduto>
            <NomeProduto>{product.productName}</NomeProduto>
            {product.isNewCollection && (
              <NewCollection>Nova coleção</NewCollection>
            )}
          </InfosProduto>
          <CodigoProduto>{product.code}</CodigoProduto>
          <Preço>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(product.price)}
          </Preço>
          <BotaoReserva type="button">
            <FaRegHeart />
            <TextoBotao>Ver mais</TextoBotao>
          </BotaoReserva>
        </Produto>
      ))}
    </ContainerProducts>
  );
}
