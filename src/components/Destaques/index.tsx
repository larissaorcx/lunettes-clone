import Image from 'next/image';
import { FaRegHeart } from 'react-icons/fa';

import {
  DestaquesContainer,
  Titulo,
  InfosProduto,
  NomeProduto,
  ProdutoContainer,
  Produto,
  CodigoProduto,
  Preço,
  BotaoReserva,
  TextoBotao,
  BotaoCores,
  CoresContainer,
} from './style';

import config from './config';
import { useEffect, useState } from 'react';

interface DestaquesProps {
  product: [
    status: string,
    isNewCollection: boolean,
    images: [
      id: number,
      url: string,
      color?: {
        name: string;
        background: string;
      }
    ],
    _id: string,
    code: string,
    discount: number,
    price: number,
    priceFormatted: number,
    productName: string,
    createdAt: string,
    __v: number
  ];
}

export default function Destaques({ product }: DestaquesProps) {
  const [hover, setHover] = useState({ id1: { hover: false } });
  const [click, setClick] = useState(false);
  const [productID, setProductID] = useState(config.map(id => id._id));

  function handleClickColor() {
    setClick(!click);
  }

  function handleMouseOver() {
    setProductID(config.map(id => id._id));
    setClick(!click);
  }
  function handleMouseOut() {
    setProductID(config.map(id => id._id));
  }

  return (
    <DestaquesContainer>
      <Titulo>Prodrutos em destaque</Titulo>
      <ProdutoContainer>
        {config.map(product => (
          <Produto key={product._id}>
            <Image
              alt="product"
              src={click ? product.images[1].url : product.images[0].url}
              width={360}
              height={360}
              onMouseOver={() => handleMouseOver()}
              onMouseOut={() => handleMouseOut()}
            />
            <CoresContainer>
              {product.images.map(
                image =>
                  image.color?.background && (
                    <BotaoCores
                      type="button"
                      color={image.color.background}
                      onClick={() => handleClickColor()}
                      click={click}
                    />
                  )
              )}
            </CoresContainer>
            <InfosProduto>
              <NomeProduto>{product.productName}</NomeProduto>
              <CodigoProduto>{product.code}</CodigoProduto>
            </InfosProduto>
            <Preço>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(product.price)}
            </Preço>
            <BotaoReserva type="button">
              <FaRegHeart />
              <TextoBotao>Reservar</TextoBotao>
            </BotaoReserva>
          </Produto>
        ))}
      </ProdutoContainer>
    </DestaquesContainer>
  );
}
