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

interface ContadorProductProps {
  price: number;
  discount: number;
}

export default function ContadorProduct({
  price,
  discount,
}: ContadorProductProps) {
  const [contador, setContador] = useState(1);
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

  useEffect(() => {
    setValue(price * contador);
  }, [contador]);

  return (
    <>
      {' '}
      <Text>Preço:</Text>
      <ContainerPrecos>
        <Preco>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(value)}
        </Preco>
        {discount > 0 && (
          <PriceWithDiscount>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(value - value * (discount / 100))}
          </PriceWithDiscount>
        )}
      </ContainerPrecos>
      <ContainerContador>
        <Text>QTD:</Text>
        <Contador>
          <ButtonContador type="button" onClick={() => handleClickDecrement()}>
            <Sinal>-</Sinal>
          </ButtonContador>
          <ValueContador>{contador}</ValueContador>
          <ButtonContador type="button" onClick={() => handleClickIncrement()}>
            <Sinal>+</Sinal>
          </ButtonContador>
        </Contador>
      </ContainerContador>
    </>
  );
}
