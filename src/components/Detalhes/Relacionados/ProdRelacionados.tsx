import { useRouter } from 'next/router';
import { FaRegHeart } from 'react-icons/fa';

import { ProductProps } from '../../../pages/produtos/[...slug]';

import {
  BotaoReserva,
  CodigoProduto,
  DestaquesContainer,
  InfosProduto,
  NomeProduto,
  Preço,
  Produto,
  ProdutoContainer,
  TextoBotao,
  Titulo,
} from '../../Destaques/style';
import ListProductsImages from '../../ListProducts/CarroselListProducts/ListProductsImages';

interface ProdRelacionadosProps {
  product: ProductProps[];
}

export default function ProdRelacionados({ product }: ProdRelacionadosProps) {
  const router = useRouter();
  return (
    <DestaquesContainer>
      <Titulo>Prodrutos Relacionados</Titulo>
      <ProdutoContainer>
        {product.map(prod => (
          <Produto key={prod._id}>
            <ListProductsImages products={prod.images} />
            <InfosProduto>
              <NomeProduto>{prod.productName}</NomeProduto>
              <CodigoProduto>{prod.code}</CodigoProduto>
            </InfosProduto>
            <Preço>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(prod.price)}
            </Preço>
            <BotaoReserva
              type="button"
              onClick={() => router.push(`/detalhes/${prod.productName}`)}
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
