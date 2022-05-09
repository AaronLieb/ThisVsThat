import styles from "./BigInput.module.scss";

export default function ({ className, type, children, onChange, value }) {
  console.log(value)
  if (type == "input") {
    return (
      <input
        onChange={onChange}
        placeholder={children}
        value={value}
        type="text"
        className={`${styles.input} ${styles.small} ${className}`}
      ></input>
    );
  } else {
    return <textarea value={value} onChange={onChange} placeholder={children} className={`${styles.input} ${className}`}></textarea>;
  }
}
