import Image from 'next/image';
import style from './contatos.module.scss';

export default function Contatos() {
  return (
    <>
      <div className={style.content}>
        <Image
          alt="contacts-img"
          src="/contatos-img.png"
          width={960}
          height={540}
        />
        <div className={style.text}>
          <h2>Atendimento personalizado</h2>
          <p>
            A Lunettes by Lari é uma ótica que leva seus óculos na porta da sua
            casa. Nosso atendimento é uma consultoria de estilo exclusiva.
          </p>
        </div>
      </div>
    </>
  );
}
