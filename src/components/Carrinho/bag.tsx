import { useCart } from '../hooks/useCart';
import Link from 'next/link';
import { RiShoppingCart2Line } from 'react-icons/ri';

import {
  ConteinerBag,
  Title,
  InfoBag,
  TitleInfo,
  ContainerTitle,
  ContainerSumtotal,
  PrecoTotal,
  ButtonFinalizarCompra,
  ButtonContinuarComprando,
  ButtonsBag,
} from './style';
import ProductBag from './ProductBag/ProductBag';
import { FaWhatsapp } from 'react-icons/fa';

export default function Bag() {
  const { openBag, cart } = useCart();

  return (
    <ConteinerBag openBag={openBag}>
      <Title openBag={openBag}>Sacola</Title>
      <InfoBag>
        <ContainerTitle>
          <TitleInfo>Produto</TitleInfo>
          <TitleInfo>Quantidade</TitleInfo>
          <TitleInfo>Preço</TitleInfo>
        </ContainerTitle>
      </InfoBag>
      {cart.map(productCart => (
        <ProductBag
          key={productCart.product.id}
          product={productCart.product}
        />
      ))}
      <ContainerSumtotal>
        <TitleInfo>Total</TitleInfo>
        <PrecoTotal>
          {/* {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(productCart.product.price)} */}
          valor
        </PrecoTotal>
      </ContainerSumtotal>
      <ButtonsBag>
        <ButtonContinuarComprando type="button">
          <RiShoppingCart2Line />
          Continuar Reservando
        </ButtonContinuarComprando>
        <Link
          href="https://api.whatsapp.com/send/?phone=5511947584716&text=Lunettes%2C+gostaria+de+ter+informa%C3%A7%C3%B5es+sobre+um+produto.+%0A+%0A1+unidade+do+%C3%B3culos+Dricc+na+cor%3A+Rosa.+%0A&type=phone_number&app_absent=0"
          passHref
        >
          <ButtonFinalizarCompra type="button">
            <FaWhatsapp />
            Finalizar Reserva
          </ButtonFinalizarCompra>
        </Link>
      </ButtonsBag>
    </ConteinerBag>
  );
}
