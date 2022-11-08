import {
  ButtonContador,
  Contador,
  ContainerContador,
  Sinal,
  ValueContador,
} from './style';
import { Text } from '../InfoProduto/style';
import { useEffect, useState } from 'react';
import { ContainerPrecos, Preco, PriceWithDiscount } from '../../Product/style';
import { useCart } from '../../hooks/useCart';

interface ContadorProductProps {
  price: number;
  discount: number;

  contador: number;
  setContador: (arg: number) => void;
  id: string;
}

export default function ContadorProduct({
  price,
  discount,

  contador,
  setContador,
  id,
}: ContadorProductProps) {
  const { cart, openBag } = useCart();
  const [value, setValue] = useState(price);

  function handleClickIncrement() {
    if (contador >= 1) {
      setContador(contador + 1);
    }
  }

  function handleClickDecrement() {
    if (contador >= 2) {
      setContador(contador - 1);
    }
  }
  const productInTheBag = cart.find(products => products.product.id === id);

  useEffect(() => {
    if (productInTheBag) {
      setContador(productInTheBag.product.amount);
    } else {
      setContador(contador);
    }
  }, [productInTheBag?.product.amount]);

  useEffect(() => {
    setValue(price * contador);
  }, [contador, price]);

  return (
    <>
      <Text>Preço:</Text>
      {productInTheBag ? (
        <ContainerPrecos openBag={openBag}>
          <Preco openBag={openBag}>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(productInTheBag.product.price * contador)}
          </Preco>
          {discount > 0 && (
            <PriceWithDiscount openBag={openBag}>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(productInTheBag.product.formatedPrice * contador)}
            </PriceWithDiscount>
          )}
        </ContainerPrecos>
      ) : (
        <ContainerPrecos openBag={openBag}>
          <Preco openBag={openBag}>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(value)}
          </Preco>
          {discount > 0 && (
            <PriceWithDiscount openBag={openBag}>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(value - value * (discount / 100))}
            </PriceWithDiscount>
          )}
        </ContainerPrecos>
      )}
      <ContainerContador>
        <Text>QTD:</Text>
        <Contador openBag={openBag}>
          <ButtonContador type="button" onClick={() => handleClickDecrement()}>
            <Sinal openBag={openBag}>-</Sinal>
          </ButtonContador>

          <ValueContador openBag={openBag}>{contador}</ValueContador>

          <ButtonContador type="button" onClick={() => handleClickIncrement()}>
            <Sinal openBag={openBag}>+</Sinal>
          </ButtonContador>
        </Contador>
      </ContainerContador>
    </>
  );
}
