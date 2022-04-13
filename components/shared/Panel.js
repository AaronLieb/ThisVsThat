import styles from "./styles/header.module.css";

export default function Panel({ children }) {
  return <div className={styles.container}>{children}</div>;
}
