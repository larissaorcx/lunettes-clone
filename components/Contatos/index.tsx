import Image from 'next/image';
import style from './contatos.module.scss';

export default function Contatos() {
  return (
    <>
      <div className={style.atendimento}>
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
      <div className={style.contatos}>
        <h2>Como funciona?</h2>

        <div className={style.infosContacts}>
          <div className={style.info1}>
            <Image alt="coracao" src="/coracao.png" width={80.4} height={72} />

            <span>
              <strong>Escolha</strong>
              Você escolhe seus óculos por aqui
            </span>
          </div>

          <div className={style.info2}>
            <Image alt="whats" src="/whats.png" width={72.6} height={73.3} />

            <span>
              <strong>Avise a Lunettes</strong>
              Avise a Lunettes quais óculos quer experimentar
            </span>
          </div>

          <div className={style.info3}>
            <Image alt="agenda" src="/agenda.png" width={78.2} height={72.2} />

            <span>
              <strong>Agende</strong>
              Vamos agendar uma visita e levar os óculos até você
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
