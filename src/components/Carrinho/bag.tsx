import { useCart } from '../hooks/useCart';
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
  TitleInfoQTD,
} from './style';
import ProductBag from './ProductBag/ProductBag';
import { FaWhatsapp } from 'react-icons/fa';
import QRCode from './QRCode/QRCode';
import { useState } from 'react';
import React, { useRef } from 'react';

interface BagProps {
  scroll: boolean;
}

export default function Bag({ scroll }: BagProps) {
  const { openBag, cart, setOpenBag } = useCart();
  const [buttonBagFinalize, setButtonBagFinalize] = useState(false);

  const total = cart.reduce((sumTotal, product) => {
    if (product.product.discount > 0) {
      return sumTotal + product.product.formatedPrice * product.product.amount;
    } else {
      return sumTotal + product.product.price * product.product.amount;
    }
  }, 0);

  const upQRCode = useRef<HTMLDivElement>(null);

  function handleScroll() {
    upQRCode.current?.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }

  return (
    <ConteinerBag scroll={scroll} openBag={openBag}>
      <Title scroll={scroll} openBag={openBag}>
        Sacola
      </Title>
      <QRCode buttonBagFinalize={buttonBagFinalize} upQRCode={upQRCode} />
      <InfoBag>
        <ContainerTitle>
          <TitleInfo>Produto</TitleInfo>
          <TitleInfoQTD>Quantidade</TitleInfoQTD>
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
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(total)}
        </PrecoTotal>
      </ContainerSumtotal>
      <ButtonsBag>
        <ButtonContinuarComprando
          type="button"
          onClick={() => setOpenBag(false)}
        >
          <RiShoppingCart2Line className="cart" />
          Continuar Reservando
        </ButtonContinuarComprando>
        <ButtonFinalizarCompra
          type="button"
          buttonBagFinalize={buttonBagFinalize}
          onClick={() => {
            setButtonBagFinalize(true);
            handleScroll();
          }}
        >
          <FaWhatsapp className="whats" />
          Finalizar Reserva
        </ButtonFinalizarCompra>
      </ButtonsBag>
    </ConteinerBag>
  );
}
