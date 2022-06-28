import Image from 'next/image';
import { ImageLogo } from '../../pages/types';
import { ContainerLoading, Text } from './style';

export default function Loading() {
  return (
    <ContainerLoading>
      <Image
        alt="logoNegativo"
        src="/assets/header/logotipo-negativo.png"
        width={50}
        height={50}
      />
      <Text>Carregando...</Text>
    </ContainerLoading>
  );
}
