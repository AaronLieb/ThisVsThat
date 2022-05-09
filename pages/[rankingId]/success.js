import Header from "../../components/shared/Header";
import Title from "../../components/shared/Title";
import Button from "../../components/shared/Button";
import styles from "../../styles/page.module.scss";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function success() {
  const router = useRouter();
  const [url, setUrl] = useState("");

  useEffect(() => setUrl(window.location.origin));

  return (
    <div>
      <Header />
      <div className={styles.content}>
        <Title className={styles.title}>Sucess! We recieved your list.</Title>

        <h2>Link to vote:</h2>
        <h4>{`${url}/${router.query.rankingId}/vote`}</h4>

        <Button href={`/${router.query.rankingId}/vote`} className={styles.button} color="blue">
          Vote Now
        </Button>
        <Button href={`/${router.query.rankingId}/results`} className={styles.button} color="red">
          View Results
        </Button>
      </div>
    </div>
  );
}
