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

interface QRCodeProps {
  buttonBagFinalize: boolean;
  upQRCode: React.RefObject<HTMLDivElement>;
}

export default function QRCode({ buttonBagFinalize, upQRCode }: QRCodeProps) {
  const { cart } = useCart();

  function productsCart() {
    const allproductscart = cart
      .map(
        product =>
          `${product.product.amount} ${
            product.product.amount === 1 ? 'unidade' : 'unidades'
          } do óculos ${product.product.name} na cor: ${
            product.product.color
          }. \n`
      )
      .join('');

    const readyText = `${allproductscart}`;

    return window.encodeURIComponent(readyText);
  }

  const myLoader = ({ src, width, quality }: ImageLoaderProps) => {
    return `https://chart.googleapis.com/chart?chs=${width}&cht=qr&chl=${src}&q=${
      quality || 75
    }`;
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
        <ButtonFinalize type="button">
          <GiCheckeredFlag className="flag" />
          Pronto, consegui !
        </ButtonFinalize>
      </ContainerButtonFinalize>
    </ContainerQRCode>
  );
}
