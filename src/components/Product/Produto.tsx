import router, { useRouter } from 'next/router';
import { BsFillHeartFill } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa';
import { ProductDetalhesProps } from '../../pages/detalhes/[slug]';
import { BotaoReservaSacola } from '../Detalhes/ButtonReserva/style';
import { useCart } from '../hooks/useCart';
import ListProductsImages from '../ListProducts/CarroselListProducts/ListProductsImages';
import {
  BotaoReserva,
  CodigoProduto,
  InfosProduto,
  NomeProduto,
  Preco,
  Prod,
  TextoBotao,
  NewCollection,
  PriceWithDiscount,
  ContainerPrecos,
  PorcentDiscount,
  Text,
  TitleDiscount,
  ImgDiscount,
} from './style';

interface ProdProps {
  product: ProductDetalhesProps;
}

export default function Produto({ product }: ProdProps) {
  const router = useRouter();
  const { openBag, cart } = useCart();

  const productInTheBag = cart.find(
    products => products.product.id === product._id
  );
  return (
    <Prod>
      {product.discount > 0 ? (
        <ImgDiscount>
          <PorcentDiscount>
            <TitleDiscount>{`${product.discount}%`}</TitleDiscount>
            <Text>OFF</Text>
          </PorcentDiscount>
          <ListProductsImages images={product.images} />
        </ImgDiscount>
      ) : (
        <ListProductsImages images={product.images} />
      )}

      <InfosProduto>
        <NomeProduto>{product.productName}</NomeProduto>
        {product.isNewCollection && <NewCollection>Nova coleção</NewCollection>}
      </InfosProduto>
      <CodigoProduto>{product.code}</CodigoProduto>
      <ContainerPrecos openBag={openBag}>
        <Preco openBag={openBag}>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(product.price)}
        </Preco>
        {product.discount > 0 && (
          <PriceWithDiscount openBag={openBag}>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(product.price - product.price * (product.discount / 100))}
          </PriceWithDiscount>
        )}
      </ContainerPrecos>
      {productInTheBag ? (
        <BotaoReservaSacola
          type="button"
          onClick={() => router.push(`/detalhes/${product.productName}`)}
          productInBag
        >
          <BsFillHeartFill className="heart" />
          <TextoBotao>Na Sacola</TextoBotao>
        </BotaoReservaSacola>
      ) : (
        <BotaoReserva
          type="button"
          onClick={() => router.push(`/detalhes/${product.productName}`)}
        >
          <FaRegHeart />
          <TextoBotao>Ver mais</TextoBotao>
        </BotaoReserva>
      )}
    </Prod>
  );
}
