import styles from "./Header.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.container}>
      <Link href="/">
        <div className={styles.link}>
          <img className={styles.logo} src="/logo.png" alt="logo" />
          <h1 className={styles.title}>This vs That</h1>
        </div>
      </Link>
    </div>
  );
}
