import style from './destaques.module.scss';
import Image from 'next/image';

export default function Destaques() {
  return (
    <div className={style.destaques}>
      <h2>Prodrutos em destaque</h2>
      <div className={style.produto}>
        <Image alt="foto1" src="/foto1.png" width={360} height={360} />
        <div className={style.cores}>
          <button type="button"></button>
          <button type="button"></button>
        </div>
        <div className={style.infosProdutos}>
          <h3>CLASSIC LINE</h3>
          <p>CLL980</p>
        </div>
        <div className={style.price}>
          <span>R$ 120,00</span>
        </div>
        <button type="button">
          <Image alt="iconeBotão" src="/ibotao.png" width={33} height={30} />
          <span>Reservar</span>
        </button>
      </div>
    </div>
  );
}
