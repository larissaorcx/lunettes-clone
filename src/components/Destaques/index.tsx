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

import Images from './Carrosel/Images';
import dataDestaques from './dataDestaques';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

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
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

export default function Destaques({ setLoading }: DestaquesProps) {
  const [products, setProducts] = useState<Products[]>([] as Products[]);
  const router = useRouter();

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      const produtos = await dataDestaques;

      setTimeout(() => {
        setProducts(produtos);

        setLoading(false);
      }, 3000);
    }
    loadProducts();
  }, []);

  return (
    <DestaquesContainer>
      <Titulo>Prodrutos em destaque</Titulo>
      <ProdutoContainer>
        {products.map((product: Products) => (
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
            <BotaoReserva
              type="button"
              onClick={() => router.push(`/detalhes/${product.productName}`)}
            >
              <FaRegHeart />
              <TextoBotao>Ver mais</TextoBotao>
            </BotaoReserva>
          </Produto>
        ))}
      </ProdutoContainer>
    </DestaquesContainer>
  );
}
