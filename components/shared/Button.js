import styles from "/styles/button.module.scss";

export default function Button({ size = 30, color, children }) {
  return <a className={`${styles.button} ${styles[color]}`}>{children}</a>;
}
