import { FaRegHeart, FaWhatsapp } from 'react-icons/fa';

import Link from 'next/link';
import {
  BotaoReservaSacola,
  BotaoReservaWhats,
  ContainerButton,
} from './style';
import { TextoBotao } from '../../ListProducts/style';

export default function ButtonReserva() {
  return (
    <ContainerButton>
      <BotaoReservaSacola type="button">
        <FaRegHeart />
        <TextoBotao>Por na sacola</TextoBotao>
      </BotaoReservaSacola>
      <Link
        href="https://api.whatsapp.com/send/?phone=5511947584716&text=Lunettes%2C+gostaria+de+ter+informa%C3%A7%C3%B5es+sobre+um+produto.+%0A+%0A1+unidade+do+%C3%B3culos+Dricc+na+cor%3A+Rosa.+%0A&type=phone_number&app_absent=0"
        passHref
      >
        <BotaoReservaWhats type="button">
          <FaWhatsapp />
          <TextoBotao>Comprar agora</TextoBotao>
        </BotaoReservaWhats>
      </Link>
    </ContainerButton>
  );
}
