import { FaRegHeart, FaWhatsapp } from 'react-icons/fa';
import { TextoBotao } from '../../Destaques/style';
import {
  BotaoReservaSacola,
  BotaoReservaWhats,
  ContainerButton,
} from './style';

export default function ButtonReserva() {
  return (
    <ContainerButton>
      <BotaoReservaSacola type="button">
        <FaRegHeart />
        <TextoBotao>Por na sacola</TextoBotao>
      </BotaoReservaSacola>
      <BotaoReservaWhats type="button">
        <FaWhatsapp />
        <TextoBotao>Comprar agora</TextoBotao>
      </BotaoReservaWhats>
    </ContainerButton>
  );
}
