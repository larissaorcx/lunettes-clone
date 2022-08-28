import { ProductDetalhesProps } from '../../../pages/detalhes/[slug]';
import { Caminho, Simbolo } from '../../../pages/produtos/style';
import { CodigoProduto } from '../../Destaques/style';
import {
  ContainerPrecos,
  Preco,
  PriceWithDiscount,
} from '../../ListProducts/style';
import ColorProduct from '../ColorProduct/ColorProduct';
import {
  ContainerCaminhoDetalhes,
  ContainerConteudo,
  NameProduct,
  Text,
} from './style';
import Image from 'next/image';
import ContadorProduct from '../ContadorProduct/ContadorProduct';

import ButtonReserva from '../ButtonReserva/ButtonReserva';

interface InfosProdutoProps {
  product: ProductDetalhesProps;
}

export default function InfosProduto({ product }: InfosProdutoProps) {
  return (
    <ContainerConteudo>
      <ContainerCaminhoDetalhes>
        <Caminho>Home</Caminho>
        <Simbolo>
          <Image alt="next" src="/right.png" width={16} height={16} />
        </Simbolo>
        <Caminho>{product.category}</Caminho>
        <Simbolo>
          <Image alt="next" src="/right.png" width={16} height={16} />
        </Simbolo>
        <Caminho>{product.subcategories}</Caminho>
      </ContainerCaminhoDetalhes>
      <NameProduct>{product.productName}</NameProduct>
      <CodigoProduto>{product.code}</CodigoProduto>
      <ColorProduct color={product.images} />
      <Text>Preço:</Text>
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
            }).format(product.price - product.price * (product.discount / 100))}
          </PriceWithDiscount>
        )}
      </ContainerPrecos>
      <ContadorProduct />
      <ButtonReserva />
    </ContainerConteudo>
  );
}
