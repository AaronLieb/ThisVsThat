import Header from "../../components/shared/Header";
import styles from "../../styles/results.module.scss";
import page from "../../styles/page.module.scss";
import Result from "../../components/results/Result";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function results() {
  const router = useRouter();

  const [results, setResults] = useState([]);
  const [name, setName] = useState("Loading...");

  useEffect(() => {
    if (!router.isReady) return;

    fetch(`/api/${router.query.rankingId}/results`)
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        data.results.sort((a, b) => b.winPercent - a.winPercent);
        setResults(data.results.map((item, i) => <Result rank={i + 1} item={item} />));
      });
  }, [router.isReady]);

  return (
    <div>
      <Header />
      <div className={page.content}>
        <h1 className={styles.title}>{name}</h1>
        <div className={styles.rankings_container}>{results}</div>
      </div>
    </div>
  );
}
