import { GiCheckeredFlag } from 'react-icons/gi';
import {
  ContainerQRCode,
  Title,
  Discription,
  ButtonFinalize,
  ContainerButtonFinalize,
  ContainerImgQRCode,
} from './style';

import Image, { ImageLoaderProps } from 'next/image';
import { useCart } from '../../hooks/useCart';
import router from 'next/router';

interface QRCodeProps {
  buttonBagFinalize: boolean;
  upQRCode: React.RefObject<HTMLDivElement>;
}

export default function QRCode({ buttonBagFinalize, upQRCode }: QRCodeProps) {
  const { cart, setOpenBag, setCart } = useCart();

  function productsCart() {
    let messageWhats = '';

    const initialText =
      // typeMsg === 'info'
      //   ? 'Lunettes, gostaria de ter informações sobre um produto. '
      //   :
      'Lunettes, foi realizada uma reserva no site. \n';
    const allproductscart = cart
      .map(
        product =>
          `${product.product.amount} ${
            product.product.amount === 1 ? 'unidade' : 'unidades'
          } do óculos ${product.product.name} na cor: 
        ${product.product.color.name}. `
      )
      .join('');

    messageWhats = `${initialText}${allproductscart}`;

    return window.encodeURIComponent(messageWhats);
  }
  const listcart = productsCart();

  const urlCart = `https://wa.me/5511974523425?text=${listcart}`;

  const myLoader = () => {
    return `https://chart.googleapis.com/chart?chs=400x400&cht=qr&chl=${urlCart}`;
  };

  return (
    <ContainerQRCode buttonBagFinalize={buttonBagFinalize} ref={upQRCode}>
      <Title>Fale com a Lunettes</Title>
      <Discription>
        Precisamos finalizar essa reserva pelo WhatsApp comercial da Lunettes.
        Já que está usando computador, pegue seu celular, use o QR CODE para
        iniciar uma conversa com a Lunettes no WhatsApp. Caso tenha problemas,
        nos chame no 11 974523425.
      </Discription>
      <ContainerImgQRCode>
        <Image
          loader={myLoader}
          src="/"
          alt="Qrcode"
          width={248}
          height={248}
        />
      </ContainerImgQRCode>
      <ContainerButtonFinalize>
        <ButtonFinalize
          type="button"
          onClick={() => {
            router.push('/');
            setOpenBag(false);
            setCart([]);
          }}
        >
          <GiCheckeredFlag className="flag" />
          Pronto, consegui !
        </ButtonFinalize>
      </ContainerButtonFinalize>
    </ContainerQRCode>
  );
}
