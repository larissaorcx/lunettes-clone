import ImageBag from '../CarroselBag/ImageBag';
import ColorProdBag from '../ColorProdBag/ColorProdBag';
import {
  CodeBag,
  Container,
  Containerimg,
  ContainerProdContador,
  ContainerRemove,
  ConteinerInfoProd,
  InfoProdBag,
  NameProd,
  RemoveBag,
  Titleremore,
} from '../style';
import Image from 'next/image';
import { useCart } from '../../hooks/useCart';
import { ProductCardProps } from '../../Detalhes/ButtonReserva/ButtonReserva';

import {
  ButtonContador,
  Contador,
  Sinal,
  ValueContador,
} from '../../Detalhes/ContadorProduct/style';
import {
  ContainerPrecos,
  Preco,
  PrecoDiscount,
  PriceWithDiscount,
} from '../../Product/style';
import { ContainerPrecoRemove, ContainerContador, ButtonRemove } from './style';

interface ProductBagProps {
  product: ProductCardProps;
}

export default function ProductBag({ product }: ProductBagProps) {
  const { deleteProduct, amountBag, openBag } = useCart();

  function handleClickIncrement() {
    amountBag({ productId: product.id, amount: product.amount + 1 });
  }

  function handleClickDecrement() {
    amountBag({ productId: product.id, amount: product.amount - 1 });
  }

  const priceDiscount =
    product.price - product.price * (product.discount / 100);
  return (
    <InfoProdBag key={product.id}>
      <ContainerProdContador>
        <ConteinerInfoProd>
          <Containerimg>
            <ImageBag products={product.image} />
          </Containerimg>
          <Container>
            <NameProd>{product.name}</NameProd>
            <CodeBag>{product.code}</CodeBag>
            <ColorProdBag color={product.color} />
          </Container>
        </ConteinerInfoProd>
        <ContainerContador>
          <Contador openBag={openBag}>
            <ButtonContador
              type="button"
              onClick={() => handleClickDecrement()}
            >
              <Sinal openBag={openBag}>-</Sinal>
            </ButtonContador>
            <ValueContador openBag={openBag}>{product.amount}</ValueContador>
            <ButtonContador
              type="button"
              onClick={() => handleClickIncrement()}
            >
              <Sinal openBag={openBag}>+</Sinal>
            </ButtonContador>
          </Contador>
          <ButtonRemove type="button" onClick={() => deleteProduct(product.id)}>
            Remover
          </ButtonRemove>
        </ContainerContador>
      </ContainerProdContador>
      <ContainerPrecoRemove>
        <ContainerPrecos openBag={openBag}>
          {product.discount > 0 ? (
            <>
              <PrecoDiscount openBag={openBag}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(product.price)}
              </PrecoDiscount>
              <PriceWithDiscount openBag={openBag}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(priceDiscount * product.amount)}
              </PriceWithDiscount>
            </>
          ) : (
            <Preco openBag={openBag}>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(product.price * product.amount)}
            </Preco>
          )}
        </ContainerPrecos>
        <ContainerRemove>
          <RemoveBag type="button" onClick={() => deleteProduct(product.id)}>
            <Image src="/garbage.png" alt="lixo" width={15} height={15} />
            <Titleremore>Tirar da Lista</Titleremore>
          </RemoveBag>
        </ContainerRemove>
      </ContainerPrecoRemove>
    </InfoProdBag>
  );
}
