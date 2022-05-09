import styles from "./Button.module.scss";

export default function Button({ size = 30, href, color, children, onClick }) {
  return (
    <a
      style={{ "fontSize": `${size}px` }}
      onClick={onClick}
      href={href}
      className={`${styles.button} ${styles[color]}`}
    >
      {children}
    </a>
  );
}
