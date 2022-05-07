import Image from 'next/image';
import { FaRegHeart } from 'react-icons/fa';

import {
  DestaquesContainer,
  Titulo,
  InfosProduto,
  NomeProduto,
  ProdutoContainer,
  CodigoProduto,
  Preço,
  BotaoReserva,
  TextoBotao,
  BotaoCores,
  CoresContainer,
} from './style';

export default function Destaques() {
  return (
    <DestaquesContainer>
      <Titulo>Prodrutos em destaque</Titulo>
      <ProdutoContainer>
        <Image alt="foto1" src="/foto1.png" width={360} height={360} />
        <CoresContainer>
          <BotaoCores type="button"></BotaoCores>
        </CoresContainer>
        <InfosProduto>
          <NomeProduto>CLASSIC LINE</NomeProduto>
          <CodigoProduto>CLL980</CodigoProduto>
        </InfosProduto>
        <Preço>R$ 120,00</Preço>
        <BotaoReserva type="button">
          <FaRegHeart />
          <TextoBotao>Reservar</TextoBotao>
        </BotaoReserva>
      </ProdutoContainer>
    </DestaquesContainer>
  );
}
