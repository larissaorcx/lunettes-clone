import style from './footer.module.scss';

export default function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.text}>
        <h2>#LunettesByLari</h2>
        <span>
          Poste sua foto usando a hashtag e faça parte da nossa galeria.
        </span>
      </div>
    </div>
  );
}
