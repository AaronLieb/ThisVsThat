import Header from "../../components/shared/Header";
import Title from "../../components/shared/Title";
import Button from "../../components/shared/Button";
import styles from "../../styles/page.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

export default function finished() {
  const router = useRouter();

  return (
    <div>
      <Header />
      <div className={styles.content}>
        <Title className={styles.title}>You've ranked everything!</Title>
        <Link href={`/${router.query.rankingId}/results`}>
          <Button className={styles.button} color="blue">
            View Ranking Results
          </Button>
        </Link>
      </div>
    </div>
  );
}
