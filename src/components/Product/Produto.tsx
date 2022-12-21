import router, { useRouter } from 'next/router';
import { useState } from 'react';
import { BsFillHeartFill } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa';
import swiper from 'swiper';
import { ProductDetalhesProps } from '../../pages/detalhes/[slug]';
import { BotaoReservaSacola } from '../Detalhes/ButtonReserva/style';
import { useCart } from '../../hooks/useCart';
import { useFilter } from '../../hooks/useFilter';
import ListProductsImages from '../ListProducts/CarroselListProducts/ListProductsImages';
import ColorListProduct from '../ListProducts/ColorListProduct';
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
  const [swiperInstanceListProd, setSwiperInstanceListProd] =
    useState<swiper>();

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
          <ListProductsImages
            images={product.images}
            setSwiperInstanceListProd={setSwiperInstanceListProd}
          />
        </ImgDiscount>
      ) : (
        <ListProductsImages
          images={product.images}
          setSwiperInstanceListProd={setSwiperInstanceListProd}
        />
      )}
      <ColorListProduct
        color={product.images}
        swiperInstanceListProd={swiperInstanceListProd}
      />
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
            }).format(product.formatedPrice)}
          </PriceWithDiscount>
        )}
      </ContainerPrecos>
      {productInTheBag ? (
        <BotaoReservaSacola
          type="button"
          onClick={() =>
            router.push(`/detalhes/${product.productName.replace(/\s/g, '')}`)
          }
          productInBag
        >
          <BsFillHeartFill className="heart" />
          <TextoBotao>Na Sacola</TextoBotao>
        </BotaoReservaSacola>
      ) : (
        <BotaoReserva
          type="button"
          onClick={() =>
            router.push(`/detalhes/${product.productName.replace(/\s/g, '')}`)
          }
        >
          <FaRegHeart />
          <TextoBotao>Ver mais</TextoBotao>
        </BotaoReserva>
      )}
    </Prod>
  );
}
