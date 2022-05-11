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

interface DestaquesProps {
  product: [
    subcategories: string[],
    status: string,
    highlighted: boolean,
    isNewCollection: boolean,
    images: [
      id: number,
      url: string,
      color?: {
        name: string;
        background: string;
      },
      allImages?: string
    ],
    favorite: number,
    viewDetails: number,
    _id: string,
    category: string,
    code: string,
    discount: number,
    price: number,
    productName: string,
    createdAt: string,
    __v: number
  ];
}

export default function Destaques({ product }: DestaquesProps) {
  return (
    <DestaquesContainer>
      <Titulo>Prodrutos em destaque</Titulo>
      <ProdutoContainer>
        <Produto>
          {config.map(product => (
            <>
              <Image
                key={product._id}
                alt="product"
                src={product.images[1].url}
                width={360}
                height={360}
              />
              <CoresContainer>
                {/* <BotaoCores type="button">
                  {product.images.map(image => image.color?.background)}
                </BotaoCores> */}
                {product.images.map(
                  image =>
                    image.color?.background && (
                      <BotaoCores
                        type="button"
                        color={image.color.background}
                      />
                    )
                )}
              </CoresContainer>
              <InfosProduto>
                <NomeProduto>{product.productName}</NomeProduto>
                <CodigoProduto>{product.code}</CodigoProduto>
              </InfosProduto>
              <Preço>{product.price}</Preço>
              <BotaoReserva type="button">
                <FaRegHeart />
                <TextoBotao>Reservar</TextoBotao>
              </BotaoReserva>
            </>
          ))}
        </Produto>
      </ProdutoContainer>
    </DestaquesContainer>
  );
}
