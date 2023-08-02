import styles from "./styles.module.css";

export function InfoSqueleton() {
  return (
    <div className={styles.infoWrapper}>
      <span className={styles.info}></span>
      <span className={styles.info}></span>
      <span className={styles.info}></span>
    </div>
  );
}
