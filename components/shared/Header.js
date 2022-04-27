import styles from "./Header.module.scss";

export default function Header() {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src="/logo.png" alt="logo" />
      <h1 className={styles.Title}>This vs That</h1>
    </div>
  );
}
