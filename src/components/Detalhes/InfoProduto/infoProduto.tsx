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
        <>
          <Caminho>Home</Caminho>
          <Simbolo>
            <Image alt="next" src="/right.png" width={16} height={16} />
          </Simbolo>
          <Caminho>{product.category}</Caminho>
          {typeof product.subcategories !== 'string' && (
            <>
              <Simbolo>
                <Image alt="next" src="/right.png" width={16} height={16} />
              </Simbolo>
              <Caminho>Multi categorias</Caminho>
            </>
          )}
        </>
      </ContainerCaminhoDetalhes>
      <NameProduct>{product.productName}</NameProduct>
      <CodigoProduto>{product.code}</CodigoProduto>
      <ColorProduct color={product.images} />
      <ContadorProduct price={product.price} discount={product.discount} />
      <ButtonReserva />
    </ContainerConteudo>
  );
}
