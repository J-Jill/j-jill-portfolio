import styles from "./marquee.module.css";

const ITEMS = ["Frontend", "React", "UI/UX", "Toronto", "Design", "Code"];

export function Marquee() {
  /*
    Duplicamos los items para el loop sin salto visible.
    La animación mueve exactamente -50% del track total.
    Cuando llega al final del primer set, está en el inicio
    del segundo set que es visualmente idéntico → loop seamless.
  */
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className={styles.wrap} aria-hidden="true">
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`} className={styles.item}>
            {item}
            <span className={styles.sep}> · </span>
          </span>
        ))}
      </div>
    </div>
  );
}
