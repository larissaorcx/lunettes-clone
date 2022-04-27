import style from './destaques.module.scss';
import Image from 'next/image';

import { FaRegHeart } from 'react-icons/fa';

export default function Destaques() {
  return (
    <div className={style.destaques}>
      <h2>Prodrutos em destaque</h2>
      <div className={style.produto}>
        <Image alt="foto1" src="/foto1.png" width={360} height={360} />
        <div className={style.opcaoesCores}>
          <button type="button" className={style.color1}></button>
          <button type="button" className={style.color2}></button>
        </div>
        <div className={style.infosProdutos}>
          <h3>CLASSIC LINE</h3>
          <p>CLL980</p>
        </div>
        <div className={style.price}>
          <span>R$ 120,00</span>
        </div>
        <div className={style.reserva}>
          <button type="button">
            <FaRegHeart />
            <span>Reservar</span>
          </button>
        </div>
      </div>
    </div>
  );
}
