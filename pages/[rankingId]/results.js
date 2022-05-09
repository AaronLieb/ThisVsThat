import Header from "../../components/shared/Header";
import styles from "../../styles/results.module.scss";
import Result from "../../components/results/Result";
import Button from "../../components/shared/Button";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function results() {
  const router = useRouter();

  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!router.isReady) return;

    fetch(`/api/${router.query.rankingId}/results`)
      .then((res) => res.json())
      .then((data) => {
        setResults(data.map((item) => {
          return (<Result item={item} />);
        }));
      });
  }, [router.isReady]);

  console.log(results)

  return (
    <div>
      <Header />
      <div className={styles.content}>
        <h1 className={styles.h1}>Your rankings:</h1>
        <div className={styles.rankings_container}>{results}</div>
        <div className={styles.footer}>
          <Button className={styles.ranking_button} color="blue">
            Create a new ranking
          </Button>
        </div>
      </div>
    </div>
  );
}
