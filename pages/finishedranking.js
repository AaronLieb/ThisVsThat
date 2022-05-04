import Header from "../components/shared/Header";
import Title from "../components/shared/Title";
import Button from "../components/shared/Button";
import styles from "../styles/single_button_page.module.scss";

export default function finishedranking() {
  return (
    <div className={styles.content}>
      <Header />
      <Title className={styles.title} text="You've reached the end!"/>
      <Button className={styles.button} color="blue">View Rankings</Button>
    </div>
  );
}
