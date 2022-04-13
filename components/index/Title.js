import styles from "/styles/title.module.scss";

export default function Title() {
  return (
    <div>
      <h1 className={styles.title}>
        <span className={styles.red}>This</span>
        <span className={styles.gray}> vs </span>
        <span className={styles.blue}>That</span>
      </h1>
    </div>
  );
}
