import Image from 'next/image';
import { ContainerLoading, Text } from './style';

export default function Loading() {
  return (
    <ContainerLoading>
      <Image
        alt="logoNegativo"
        src="/logotipo-circle.png"
        width={80}
        height={80}
      />
      <Text>Carregando</Text>
    </ContainerLoading>
  );
}
