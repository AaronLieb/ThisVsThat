import styles from "./VotingBox.module.scss";

export default function VotingBox({ color, children, onClick }) {
  return (
    <div className={styles[color]} onClick={onClick}>
      <p className={styles.text}>{children}</p>
    </div>
  );
}
