import MenuHeader from '../index';
import {
  Button,
  ListMenuContainer,
  ContainerButtonSol,
  ContainerButtonGrau,
} from './style';
import Image from 'next/image';

export default function ListMenu() {
  return (
    <ListMenuContainer>
      <Button type="button">Home</Button>
      <ContainerButtonGrau>
        <Button type="button">Óculos de grau</Button>
        <ul>
          <li>
            <Image
              alt="aviador"
              src="/assets/oculos/aviador.png"
              width={42}
              height={26}
            />
            <span>Aviador</span>
          </li>
          <li>
            <Image
              alt="quadrado"
              src="/assets/oculos/quadrado.png"
              width={42}
              height={26}
            />
            <span>Quadrado</span>
          </li>
          <li>
            <Image
              alt="vintage"
              src="/assets/oculos/vintage.png"
              width={42}
              height={26}
            />
            <span>Vintage</span>
          </li>
          <li>
            <Image
              alt="redondo"
              src="/assets/oculos/redondo.png"
              width={42}
              height={26}
            />
            <span>Redondo</span>
          </li>
          <li>
            <Image
              alt="gatinho"
              src="/assets/oculos/gatinho.png"
              width={42}
              height={26}
            />
            <span>Gatinho</span>
          </li>
          <li>
            <Image
              alt="oval"
              src="/assets/oculos/oval.png"
              width={42}
              height={26}
            />
            <span>Oval</span>
          </li>
          <li>
            <Image
              alt="retangular"
              src="/assets/oculos/retangular.png"
              width={42}
              height={26}
            />
            <span>Retangular</span>
          </li>
        </ul>
      </ContainerButtonGrau>
      <ContainerButtonSol>
        <Button type="button">Óculos de sol</Button>
        <ul>
          <li>
            <Image
              alt="aviador"
              src="/assets/oculos/aviador.png"
              width={42}
              height={26}
            />
            <span>Aviador</span>
          </li>
          <li>
            <Image
              alt="quadrado"
              src="/assets/oculos/quadrado.png"
              width={42}
              height={26}
            />
            <span>Quadrado</span>
          </li>
          <li>
            <Image
              alt="vintage"
              src="/assets/oculos/vintage.png"
              width={42}
              height={26}
            />
            <span>Vintage</span>
          </li>
          <li>
            <Image
              alt="oval"
              src="/assets/oculos/redondo.png"
              width={42}
              height={26}
            />
            <span>Redondo</span>
          </li>
          <li>
            <Image
              alt="gatinho"
              src="/assets/oculos/gatinho.png"
              width={42}
              height={26}
            />
            <span>Gatinho</span>
          </li>
          <li>
            <Image
              alt="espelho"
              src="/assets/oculos/espelho.png"
              width={42}
              height={26}
            />
            <span>Espelho</span>
          </li>
        </ul>
      </ContainerButtonSol>
    </ListMenuContainer>
  );
}
