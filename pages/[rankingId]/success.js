import Header from "../../components/shared/Header";
import Title from "../../components/shared/Title";
import Button from "../../components/shared/Button";
import page from "../../styles/page.module.scss";
import styles from "../../styles/success.module.scss";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function success() {
  const router = useRouter();
  const [url, setUrl] = useState("");

  useEffect(() => setUrl(window.location.origin));

  return (
    <div>
      <Header />
      <div className={page.content}>
        <Title className={page.title}>Sucess! We recieved your list.</Title>

        <h2>Link to vote:</h2>
        <a
          onClick={(e) => {
            e.target.className += ` ${styles.clicked}`
            navigator.clipboard.writeText(e.target.textContent);
          }}
          className={styles.link}
        >{`${url}/${router.query.rankingId}/vote`}</a>
        <Link href={`/${router.query.rankingId}/vote`}>
          <Button className={page.button} color="red">
            Vote Now
          </Button>
        </Link>

        <Link href={`/${router.query.rankingId}/results`}>
          <Button className={page.button} color="blue">
            View Results
          </Button>
        </Link>
      </div>
    </div>
  );
}
