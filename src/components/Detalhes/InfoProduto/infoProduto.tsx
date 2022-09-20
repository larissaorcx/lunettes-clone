import { ProductDetalhesProps } from '../../../pages/detalhes/[slug]';
import { Caminho, Simbolo } from '../../../pages/produtos/style';

import { CodigoProduto } from '../../Product/style';
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
import { useState } from 'react';

interface InfosProdutoProps {
  product: ProductDetalhesProps;
}

export default function InfosProduto({ product }: InfosProdutoProps) {
  const [contador, setContador] = useState(1);
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
      <ColorProduct colors={product.images} />
      <ContadorProduct
        price={product.price}
        discount={product.discount}
        contador={contador}
        setContador={setContador}
        id={product._id}
      />
      <ButtonReserva product={product} contador={contador} />
    </ContainerConteudo>
  );
}
