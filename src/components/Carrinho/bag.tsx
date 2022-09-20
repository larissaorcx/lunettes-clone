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

export default function Bag() {
  const { openBag, cart, setOpenBag } = useCart();

  const total = cart.reduce((sumTotal, product) => {
    const priceDiscount =
      product.product.price -
      product.product.price * (product.product.discount / 100);
    if (product.product.discount > 0) {
      return sumTotal + priceDiscount * product.product.amount;
    } else {
      return sumTotal + product.product.price * product.product.amount;
    }
  }, 0);

  return (
    <ConteinerBag openBag={openBag}>
      <Title openBag={openBag}>Sacola</Title>
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
        <ButtonFinalizarCompra type="button">
          <FaWhatsapp className="whats" />
          Finalizar Reserva
        </ButtonFinalizarCompra>
      </ButtonsBag>
    </ConteinerBag>
  );
}
