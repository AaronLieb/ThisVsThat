import Header from "../components/shared/Header";
import Title from "../components/shared/Title";
import Button from "../components/shared/Button";
import styles from "../styles/single_button_page.module.scss";

export default function upload() {
  return (
    <div className={styles.content}>
      <Header />
      <Title className={styles.title} text="Upload your list to vote"/>
      <Button className={styles.button} color="blue">
      <img src='/downloadpicture.png' alt="downloadpicture"/>
        Upload.csv
        </Button>
    </div>
  );
}
