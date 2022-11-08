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
import { useEffect, useState } from 'react';
import { ImagesProps } from '../../../pages/produtos/[slug]';

interface InfosProdutoProps {
  product: ProductDetalhesProps;
  activeColorId: string;
  setActiveColorId: (arg: string) => void;
  filteredColors: ImagesProps[];
}

export default function InfosProduto({
  product,
  activeColorId,
  setActiveColorId,
  filteredColors,
}: InfosProdutoProps) {
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
      <ColorProduct
        colors={product.images}
        activeColorId={activeColorId}
        setActiveColorId={setActiveColorId}
        filteredColors={filteredColors}
      />
      <ContadorProduct
        price={product.price}
        discount={product.discount}
        contador={contador}
        setContador={setContador}
        id={product._id}
      />
      <ButtonReserva
        product={product}
        contador={contador}
        activeColorId={activeColorId}
      />
    </ContainerConteudo>
  );
}
