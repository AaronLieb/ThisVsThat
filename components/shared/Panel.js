import styles from "./Panel.module.scss";

export default function Panel({ children }) {
  return <div className={styles.container}>{children}</div>;
}
