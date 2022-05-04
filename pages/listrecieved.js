import Header from "../components/shared/Header";
import Title from "../components/shared/Title";
import Button from "../components/shared/Button";
import styles from "../styles/single_button_page.module.scss";

export default function listrecieved() {
  return (
    <div className={styles.content}>
      <Header />
      <Title className={styles.title} text="Sucess! We recieved your list."/>
      <Button className={styles.button} color="blue">Vote Now</Button>
    </div>
  );
}
