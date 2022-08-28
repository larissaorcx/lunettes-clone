import {
  ButtonContador,
  Contador,
  ContainerContador,
  Sinal,
  ValueContador,
} from './style';
import { Text } from '../InfoProduto/style';

export default function ContadorProduct() {
  return (
    <ContainerContador>
      <Text>QTD:</Text>
      <Contador>
        <ButtonContador>
          <Sinal>-</Sinal>
        </ButtonContador>
        <ValueContador>1</ValueContador>
        <ButtonContador>
          <Sinal>+</Sinal>
        </ButtonContador>
      </Contador>
    </ContainerContador>
  );
}
