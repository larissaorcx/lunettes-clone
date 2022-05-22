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
} from './style';

import Images from './Images';

export type ImageProps = {
  id: string;
  url: string;
  color?: {
    name: string;
    background: string;
  };
};

export type Products = {
  status: string;
  isNewCollection: boolean;
  images: ImageProps[];
  _id: string;
  code: string;
  discount: number;
  price: number;
  productName: string;
  createdAt: string;
  __v: number;
};

type DestaquesProps = {
  config: Products[];
};
// Nome do parametro confuso
export default function Destaques({ config }: DestaquesProps) {
  return (
    <DestaquesContainer>
      <Titulo>Prodrutos em destaque</Titulo>
      <ProdutoContainer>
        {config.map((product: Products) => (
          <Produto key={product._id}>
            <Images data={product.images} />
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
